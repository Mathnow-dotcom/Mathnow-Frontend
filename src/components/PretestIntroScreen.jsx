import React, { useEffect } from 'react';
import { useMathGamePick } from '../store/mathGameBridgeStore.js';

const PretestIntroScreen = () => {
  const { isPretest, selectedTable, navigate, isQuittingRef } =
    useMathGamePick((ctx) => ({
      isPretest: Boolean(ctx.isPretest),
      selectedTable: ctx.selectedTable,
      navigate: ctx.navigate || (() => {}),
      isQuittingRef: ctx.isQuittingRef || { current: false },
    }));

  useEffect(() => {
    if (!isPretest) {
      if (isQuittingRef?.current) {
        navigate('/', { replace: true });
        return;
      }
      navigate('/levels', { replace: true });
    }
  }, [isPretest, navigate, isQuittingRef]);

  if (!isPretest) return null;

  const levelLabel = selectedTable ?? '_';

  return (
    <>
      <style>{`
        .pretest-badge {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4.9rem;
          height: 4.9rem;
          margin: 0 auto 0.85rem;
          border-radius: 9999px;
          background: radial-gradient(circle at 35% 30%, rgba(200,255,252,0.98), rgba(71,214,240,0.96) 55%, rgba(23,116,222,0.92) 100%);
          box-shadow: 0 0 34px rgba(74,211,255,0.38);
          overflow: visible;
          animation: pretest-badge-pulse 2.1s ease-in-out infinite;
        }

        .pretest-badge::before {
          content: '';
          position: absolute;
          inset: -0.22rem;
          border-radius: 9999px;
          background:
            conic-gradient(from 0deg, rgba(255,255,255,0) 0deg, rgba(209,250,255,0.58) 70deg, rgba(255,255,255,0.18) 120deg, rgba(255,255,255,0) 180deg, rgba(103,232,249,0.24) 260deg, rgba(255,255,255,0) 360deg),
            radial-gradient(circle at 30% 28%, rgba(255,255,255,0.3), transparent 42%);
          mix-blend-mode: screen;
          animation: pretest-sphere-rotate 5.2s linear infinite;
          pointer-events: none;
        }

        .pretest-badge::after {
          content: '';
          position: absolute;
          inset: -0.85rem;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(125,245,255,0.34) 0%, rgba(56,189,248,0.18) 42%, rgba(56,189,248,0) 72%);
          filter: blur(8px);
          opacity: 0.85;
          animation: pretest-glow-wave 2.2s ease-in-out infinite;
          pointer-events: none;
        }

        .pretest-badge-shine {
          position: absolute;
          inset: 10%;
          border-radius: 9999px;
          background:
            radial-gradient(circle at 28% 22%, rgba(255,255,255,0.48), rgba(255,255,255,0.12) 18%, transparent 34%),
            radial-gradient(circle at 68% 72%, rgba(165,243,252,0.22), transparent 36%);
          animation: pretest-shine-drift 4.8s ease-in-out infinite;
          pointer-events: none;
        }

        .pretest-icon {
          position: relative;
          z-index: 1;
          display: inline-block;
          color: #effcff;
          line-height: 1;
          text-shadow: 0 8px 20px rgba(14,116,144,0.45);
          animation: pretest-icon-bob 1.45s ease-in-out infinite, pretest-icon-flicker 1.35s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes pretest-sphere-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pretest-badge-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 28px rgba(74,211,255,0.34); }
          50% { transform: scale(1.04); box-shadow: 0 0 40px rgba(125,245,255,0.5); }
        }

        @keyframes pretest-glow-wave {
          0%, 100% { transform: scale(0.94); opacity: 0.68; }
          50% { transform: scale(1.08); opacity: 0.96; }
        }

        @keyframes pretest-shine-drift {
          0%, 100% { transform: translate3d(-4%, -4%, 0) rotate(0deg); opacity: 0.8; }
          50% { transform: translate3d(5%, 4%, 0) rotate(12deg); opacity: 1; }
        }

        @keyframes pretest-icon-bob {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-3px) scale(1.07); }
        }

        @keyframes pretest-icon-flicker {
          0%, 100% { opacity: 1; filter: brightness(1); }
          35% { opacity: 0.96; filter: brightness(1.06); }
          48% { opacity: 1; filter: brightness(1.16); }
          52% { opacity: 0.94; filter: brightness(1.02); }
          70% { opacity: 1; filter: brightness(1.08); }
        }

        @media (min-width: 640px) {
          .pretest-badge {
            width: 5.8rem;
            height: 5.8rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pretest-badge,
          .pretest-badge::before,
          .pretest-badge::after,
          .pretest-badge-shine,
          .pretest-icon {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <div
        className="min-h-screen w-full fixed inset-0 flex flex-col items-center justify-center p-4 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(4,20,44,0.44), rgba(2,14,34,0.74)), url('/night_sky_landscape.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(159,244,255,0.18),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(45,212,191,0.16),transparent_24%),radial-gradient(circle_at_50%_82%,rgba(34,211,238,0.12),transparent_28%)]" />

        <div className="relative w-full max-w-[560px] md:max-w-[700px] lg:max-w-[820px] xl:max-w-[900px]">
          <div className="absolute -top-10 -right-8 h-28 w-28 rounded-full bg-cyan-300/20 blur-2xl" />
          <div className="absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-teal-300/18 blur-2xl" />

          <div className="rounded-[28px] md:rounded-[32px] bg-[linear-gradient(145deg,rgba(123,240,255,0.34),rgba(18,163,186,0.22),rgba(4,30,65,0.82))] p-[1.5px] shadow-[0_24px_60px_rgba(4,18,26,0.62),0_0_30px_rgba(45,212,191,0.14)]">
            <div className="relative min-h-[220px] md:min-h-[260px] lg:min-h-[300px] overflow-hidden rounded-[26px] md:rounded-[30px] border border-[#c6fbff]/15 bg-[radial-gradient(circle_at_top_left,_rgba(110,245,255,0.14),_rgba(7,42,88,0.95)_38%,_rgba(5,20,52,0.99)_100%)] backdrop-blur-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(165,243,252,0.14),transparent_30%),radial-gradient(circle_at_80%_24%,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_50%_88%,rgba(45,212,191,0.08),transparent_28%)]" />
              <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-cyan-300/14 blur-3xl" />
              <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-teal-300/12 blur-3xl" />

              <span className="pointer-events-none absolute top-3 left-4 text-cyan-100/60 text-xl font-black animate-pulse">
                +
              </span>
              <span className="pointer-events-none absolute top-4 right-5 text-teal-100/55 text-xl font-black animate-pulse">
                -
              </span>
              <span className="pointer-events-none absolute bottom-14 left-5 text-cyan-100/55 text-xl font-black animate-pulse">
                ×
              </span>
              <span className="pointer-events-none absolute bottom-14 right-5 text-sky-100/60 text-xl font-black animate-pulse">
                ÷
              </span>

            <div className="relative p-4 sm:p-5 md:p-7 lg:p-8">
                <div className="pretest-badge">
                  <div className="pretest-badge-shine" />
                  <span className="pretest-icon text-[2.35rem] sm:text-[2.8rem] font-black text-[#2563eb]">P</span>
                </div>

                <div className="mx-auto mb-4 w-full rounded-2xl md:rounded-3xl border border-[#c6fbff]/15 bg-black/28 px-4 py-4 sm:px-5 sm:py-4 md:px-7 md:py-5 lg:px-8 lg:py-6 shadow-[inset_0_0_24px_rgba(45,212,191,0.1)]">
                  <h2
                    className="mx-auto w-full max-w-[15ch] text-center font-extrabold tracking-tight text-[#7df5ff] whitespace-normal break-words leading-[1.04] drop-shadow-[0_4px_14px_rgba(125,245,255,0.16)] text-[clamp(1.65rem,7vw,2.65rem)] sm:text-[clamp(2.25rem,5.1vw,3.7rem)] lg:text-[clamp(2.8rem,4.4vw,4.6rem)]"
                    style={{ fontFamily: 'Baloo 2, Comic Neue, cursive' }}
                  >
                    <span className="block whitespace-normal break-words">
                      {`LEVEL ${levelLabel} PREVIEW`}
                    </span>
                  </h2>
                </div>

                <p
                  className="mx-auto w-full max-w-fit px-2 text-center font-extrabold tracking-tight text-white whitespace-nowrap leading-none text-[clamp(0.7rem,1.7vw,1.6rem)] sm:text-[clamp(0.9rem,1.55vw,1.55rem)] md:text-[clamp(1rem,1.35vw,1.7rem)]"
                  style={{ fontFamily: 'Baloo 2, Comic Neue, cursive' }}
                >
                  ANSWER AS FAST AS YOU CAN
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8" aria-hidden="true">
          <div className="relative h-11 w-11 md:h-14 md:w-14">
            <div className="absolute inset-0 rounded-full border-[3px] border-[#c6fbff]/20" />
            <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#7df5ff] border-r-[#2dd4bf] animate-spin" />
            <div className="absolute inset-[9px] rounded-full bg-cyan-300/28 animate-pulse" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PretestIntroScreen;
