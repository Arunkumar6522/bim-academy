// React
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

// local imports
import stockVideo from "../assets/stock.mp4";

import FadeIn from "../components/FadeIn";
import LeadCaptureModal from "../components/LeadCaptureModal";

const Hero = () => {

  const [leadOpen, setLeadOpen] = useState(false);
  const openLead = useCallback(() => setLeadOpen(true), []);
  const closeLead = useCallback(() => setLeadOpen(false), []);

  return (
    <div className="min-h-[70vh] relative bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Heading, text, CTAs, stats */}
          <div>

            <FadeIn delay={0.2} direction="down" fullWidth>
              <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-textPrimary">
                Build Your Career in
                <br />
                <span className="text-primary">BIM & Building Automation</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="down" fullWidth>
              <p className="mt-5 text-lg sm:text-xl text-textSecondary max-w-2xl">
                Industry practitioners teaching real projects in Revit (MEP/Arch/Str) and BMS/BAS. Learn by doing, build a portfolio, and get interview‑ready.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" fullWidth>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-xl mx-auto">
                <Link to="/courses" className="btn-primary px-6 py-3 text-base w-full sm:w-auto text-center inline-flex items-center justify-center">
                  Explore Courses
                </Link>
                <button onClick={openLead} className="px-6 py-3 rounded-xl border border-border bg-white/80 backdrop-blur font-semibold text-textPrimary hover:bg-white transition-colors w-full sm:w-auto text-center inline-flex items-center justify-center">
                  Book Free Counselling
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" fullWidth>
              <div className="mt-10 hidden lg:grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-2xl bg-white shadow-lg p-4 text-center ring-1 ring-primary/20 hover:ring-primary/40 transition-all duration-200 ease-out hover:shadow-xl hover:-translate-y-1">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm font-medium text-textPrimary">Years in Industry</div>
                </div>
                <div className="rounded-2xl bg-white shadow-lg p-4 text-center ring-1 ring-primary/20 hover:ring-primary/40 transition-all duration-200 ease-out hover:shadow-xl hover:-translate-y-1">
                  <div className="text-3xl font-bold text-primary">40–80</div>
                  <div className="text-sm font-medium text-textPrimary">Hands‑on Hours / Course</div>
                </div>
                <div className="rounded-2xl bg-white shadow-lg p-4 text-center ring-1 ring-primary/20 hover:ring-primary/40 transition-all duration-200 ease-out hover:shadow-xl hover:-translate-y-1">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm font-medium text-textPrimary">Placement Assistance</div>
                </div>
                <div className="rounded-2xl bg-white shadow-lg p-4 text-center ring-1 ring-primary/20 hover:ring-primary/40 transition-all duration-200 ease-out hover:shadow-xl hover:-translate-y-1">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm font-medium text-textPrimary">Projects Portfolio</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Video card */}
          <FadeIn delay={0.3} direction="up" fullWidth>
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-primary/40 to-primary/10 shadow-2xl">
              <div
                className="relative w-full rounded-3xl overflow-hidden bg-black max-h-[70vh]"
                style={{ aspectRatio: "16 / 9" }}
              >
                <video
                  src={stockVideo}
                  className="h-full w-full object-cover pointer-events-none"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent pointer-events-none" />
                {/* Single info pill card (bottom-left) */}
                <div className="absolute bottom-4 left-4">
                  <div className="px-5 py-3 sm:py-4 rounded-[24px] bg-white shadow-xl ring-1 ring-primary/20 hover:ring-primary/40 transition-all duration-200 ease-out hover:shadow-2xl">
                    <div className="text-sm sm:text-base font-semibold text-textPrimary">Upcoming Class</div>
                    <div className="text-xs sm:text-sm font-medium text-textPrimary">Chennai & Online</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Mobile-only quick stats below video (all 4 in one row) */}
          <FadeIn delay={0.25} direction="up" fullWidth>
            <div className="mt-6 grid grid-cols-4 gap-2 lg:hidden">
              <div className="rounded-xl bg-white shadow-md p-2 text-center ring-1 ring-primary/20 hover:ring-primary/40 transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-1">
                <div className="text-lg font-bold text-primary leading-none">10+</div>
                <div className="text-[10px] font-medium text-textPrimary leading-tight">Years</div>
              </div>
              <div className="rounded-xl bg-white shadow-md p-2 text-center ring-1 ring-primary/20 hover:ring-primary/40 transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-1">
                <div className="text-lg font-bold text-primary leading-none">40–80</div>
                <div className="text-[10px] font-medium text-textPrimary leading-tight">Hours</div>
              </div>
              <div className="rounded-xl bg-white shadow-md p-2 text-center ring-1 ring-primary/20 hover:ring-primary/40 transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-1">
                <div className="text-lg font-bold text-primary leading-none">100%</div>
                <div className="text-[10px] font-medium text-textPrimary leading-tight">Placement</div>
              </div>
              <div className="rounded-xl bg-white shadow-md p-2 text-center ring-1 ring-primary/20 hover:ring-primary/40 transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-1">
                <div className="text-lg font-bold text-primary leading-none">5+</div>
                <div className="text-[10px] font-medium text-textPrimary leading-tight">Projects</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <LeadCaptureModal isOpen={leadOpen} onClose={closeLead} />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/95 to-transparent" />
    </div>
  );
};

export default Hero;
