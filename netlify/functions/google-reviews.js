exports.handler = async (event) => {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ success: false, error: 'Missing GOOGLE_PLACES_API_KEY on server' }) };
    }

    const params = new URLSearchParams(event.queryStringParameters || {});
    const placeId = params.get('placeId');
    const query = params.get('query');
    const location = params.get('location');

    let fetchImpl = global.fetch;
    if (typeof fetchImpl !== 'function') {
      const mod = await import('node-fetch');
      fetchImpl = mod.default;
    }

    let effectivePlaceId = placeId;

    if (!effectivePlaceId && query) {
      const ts = new URLSearchParams({ query, key: apiKey });
      if (location) {
        ts.set('location', location);
        ts.set('radius', '5000');
      }
      const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?${ts.toString()}`;
      const sResp = await fetchImpl(searchUrl);
      const sJson = await sResp.json();
      if (sJson.status !== 'OK' || !sJson.results?.length) {
        return { statusCode: 404, body: JSON.stringify({ success: false, error: sJson.error_message || 'Place not found' }) };
      }
      effectivePlaceId = sJson.results[0].place_id;
    }

    if (!effectivePlaceId) {
      return { statusCode: 400, body: JSON.stringify({ success: false, error: 'Provide placeId or query parameter' }) };
    }

    const fields = 'name,rating,user_ratings_total,reviews';
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(effectivePlaceId)}&fields=${encodeURIComponent(fields)}&key=${encodeURIComponent(apiKey)}`;
    const dResp = await fetchImpl(detailsUrl);
    const dJson = await dResp.json();

    if (dJson.status !== 'OK') {
      return { statusCode: 502, body: JSON.stringify({ success: false, error: dJson.error_message || dJson.status || 'Places API error' }) };
    }

    const r = dJson.result || {};
    const payload = {
      success: true,
      name: r.name || '',
      placeId: effectivePlaceId,
      rating: r.rating || 0,
      totalReviews: r.user_ratings_total || 0,
      reviews: (r.reviews || []).map(x => ({
        author_name: x.author_name,
        profile_photo_url: x.profile_photo_url,
        rating: x.rating,
        relative_time_description: x.relative_time_description,
        text: x.text,
        time: x.time,
        author_url: x.author_url,
      })),
    };

    return { statusCode: 200, body: JSON.stringify(payload) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ success: false, error: err.message }) };
  }
};
