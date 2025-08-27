// React
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

// local imports
import stockVideo from "../assets/stock.mp4";
import FadeIn from "../components/FadeIn";
import LeadCaptureModal from "../components/LeadCaptureModal";
import CrimsonNetwork from "../components/CrimsonNetwork";

const Hero = () => {
  const [leadOpen, setLeadOpen] = useState(false);
  const openLead = useCallback(() => setLeadOpen(true), []);
  const closeLead = useCallback(() => setLeadOpen(false), []);

  return (
    <div className="min-h-[70vh] relative bg-white">
      {/* Crimson network background (stable, canvas) */}
      <CrimsonNetwork />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10" style={{ isolation: 'isolate' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Heading, text, CTAs, stats */}
          <div>
            <FadeIn delay={0.2} direction="down" fullWidth>
              <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-textPrimary relative z-30 drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                Build Your Career in
                <br />
                <span className="text-primary">BIM & Building Automation</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="down" fullWidth>
              <p className="mt-5 text-lg sm:text-xl text-textSecondary max-w-2xl relative z-30 drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
                Industry practitioners teaching real projects in Revit (MEP/Arch/Str) and BMS/BAS. Learn by doing, build a portfolio, and get interview‑ready.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" fullWidth>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start max-w-xl">
                <Link
                  to="/courses"
                  className="btn-primary px-6 py-3 text-base w-full sm:w-auto text-center inline-flex items-center justify-center"
                >
                  Explore Courses
                </Link>
                <button
                  onClick={openLead}
                  className="px-6 py-3 rounded-xl border border-border bg-white/90 backdrop-blur font-semibold text-textPrimary hover:bg-white transition-colors w-full sm:w-auto text-center inline-flex items-center justify-center shadow-[0_2px_10px_rgba(126,20,22,0.25)] hover:shadow-[0_6px_20px_rgba(126,20,22,0.35)]"
                >
                  Book Free Counselling
                </button>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.3} direction="up" fullWidth>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[{
                  value: "10+",
                  label: "Years in Industry",
                },
                {
                  value: "40–80",
                  label: "Hands‑on Hours / Course",
                },
                {
                  value: "100%",
                  label: "Placement Assistance",
                },
                {
                  value: "5+",
                  label: "Projects Portfolio",
                }].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white/95 shadow-lg p-4 text-center ring-1 ring-primary/15 hover:ring-primary/30 transition-all duration-200 ease-out"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-primary">{item.value}</div>
                    <div className="text-xs sm:text-sm font-medium text-textPrimary">{item.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Video card */}
          <FadeIn delay={0.3} direction="up" fullWidth>
            <div className="relative z-20 rounded-3xl p-[2px] bg-gradient-to-r from-primary/40 to-primary/10 shadow-2xl" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
              <div
                className="relative w-full rounded-3xl overflow-hidden bg-black max-h-[70vh]"
                style={{ aspectRatio: "16 / 9" }}
              >
                <video
                  src={stockVideo}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                  aria-hidden="true"
                />
                {/* Info pill card (bottom-left) */}
                <div className="absolute bottom-4 left-4">
                  <div className="px-5 py-3 sm:py-4 rounded-[24px] bg-white shadow-xl ring-1 ring-primary/20">
                    <div className="text-sm sm:text-base font-semibold text-textPrimary">Upcoming Class</div>
                    <div className="text-xs sm:text-sm font-medium text-textPrimary">Chennai & Online</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <LeadCaptureModal isOpen={leadOpen} onClose={closeLead} />
    </div>
  );
};

export default Hero;
