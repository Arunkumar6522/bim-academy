exports.handler = async (event) => {
  try {
    const url = (event.queryStringParameters || {}).url;
    if (!url) return { statusCode: 400, body: 'Missing url' };

    let fetchImpl = global.fetch;
    if (typeof fetchImpl !== 'function') {
      const mod = await import('node-fetch');
      fetchImpl = mod.default;
    }

    const upstream = await fetchImpl(url, { headers: { 'User-Agent': 'BimBytes-Academy/1.0' } });
    if (!upstream.ok) return { statusCode: upstream.status, body: 'Failed to load image' };

    const ct = upstream.headers.get('content-type') || 'image/jpeg';
    const arrBuf = await upstream.arrayBuffer();
    return {
      statusCode: 200,
      headers: { 'Content-Type': ct, 'Cache-Control': 'public, max-age=86400' },
      body: Buffer.from(arrBuf).toString('base64'),
      isBase64Encoded: true,
    };
  } catch (e) {
    return { statusCode: 500, body: 'Photo proxy error' };
  }
};
