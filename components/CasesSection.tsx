"use client";

import { useEffect, useRef, useState } from "react";

function createPoster(title: string, index: number) {
  const colors = [
    ["#33445f", "#172233", "#0e1724"],
    ["#43566f", "#1b2b3f", "#101927"],
    ["#56677a", "#24344d", "#111a29"],
    ["#2f4058", "#1d2a3c", "#0d1623"],
  ][index % 4];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="800" viewBox="0 0 640 800">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${colors[0]}"/>
          <stop offset="0.54" stop-color="${colors[1]}"/>
          <stop offset="1" stop-color="${colors[2]}"/>
        </linearGradient>
        <radialGradient id="glow" cx="42%" cy="22%" r="58%">
          <stop offset="0" stop-color="#e8f7ff" stop-opacity="0.22"/>
          <stop offset="1" stop-color="#e8f7ff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="640" height="800" fill="url(#bg)"/>
      <rect width="640" height="800" fill="url(#glow)"/>
      <rect x="54" y="58" width="532" height="684" rx="44" fill="#ffffff" opacity="0.035"/>
      <text x="56" y="704" fill="#dbe7f3" fill-opacity="0.58" font-family="Arial, sans-serif" font-size="26">${title}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const cases = [
  {
    title: "巴黎旅行",
    subtitle: "同一次旅行的连续生活片段",
    videos: [
      "/videos/cases/paris-01.mp4",
      "/videos/cases/paris-02.mp4",
      "/videos/cases/paris-03.mp4",
      "/videos/cases/paris-04.mp4",
    ],
  },
  {
    title: "出发去打高尔夫",
    subtitle: "同一次聚会的连续生活片段",
    videos: [
      "/videos/cases/friends-01.mp4",
      "/videos/cases/friends-02.mp4",
      "/videos/cases/friends-03.mp4",
      "/videos/cases/friends-04.mp4",
    ],
  },
  {
    title: "认真学习的一天吖",
    subtitle: "同一天里的连续生活片段",
    videos: [
      "/videos/cases/study-01.mp4",
      "/videos/cases/study-02.mp4",
      "/videos/cases/study-03.mp4",
      "/videos/cases/study-04.mp4",
    ],
  },
];

export function CasesSection() {
  const [activeVideoByCase, setActiveVideoByCase] = useState<Record<number, number>>({
    0: 0,
    1: 0,
    2: 0,
  });
  const [loadedVideoKeys, setLoadedVideoKeys] = useState<Set<string>>(() => new Set());
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [canLoadVideos, setCanLoadVideos] = useState(false);
  const [mobileActiveCase, setMobileActiveCase] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<Record<number, Array<HTMLVideoElement | null>>>({});

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMobileState = () => setIsMobile(mediaQuery.matches);

    updateMobileState();
    mediaQuery.addEventListener("change", updateMobileState);

    return () => mediaQuery.removeEventListener("change", updateMobileState);
  }, []);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "180px 0px" },
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      setCanLoadVideos(false);
      return;
    }

    const delay = window.setTimeout(() => {
      setCanLoadVideos(true);
    }, isMobile ? 900 : 120);

    return () => window.clearTimeout(delay);
  }, [isInView, isMobile]);

  useEffect(() => {
    if (!canLoadVideos) {
      return;
    }

    setLoadedVideoKeys((current) => {
      const next = new Set(current);

      cases.forEach((_, caseIndex) => {
        if (isMobile && mobileActiveCase !== caseIndex) {
          return;
        }

        next.add(`${caseIndex}:${activeVideoByCase[caseIndex] ?? 0}`);
      });

      return next.size === current.size ? current : next;
    });
  }, [activeVideoByCase, canLoadVideos, isMobile, mobileActiveCase]);

  useEffect(() => {
    cases.forEach((_, caseIndex) => {
      const activeIndex = activeVideoByCase[caseIndex] ?? 0;

      videoRefs.current[caseIndex]?.forEach((video, index) => {
        if (!video) {
          return;
        }

        const shouldPlay =
          canLoadVideos &&
          activeIndex === index &&
          (!isMobile || mobileActiveCase === caseIndex);

        if (shouldPlay) {
          video.play().catch(() => undefined);
          return;
        }

        video.pause();

        if (activeIndex !== index && video.readyState > 0) {
          try {
            video.currentTime = 0;
          } catch {
            // Safari can reject currentTime changes before metadata is ready.
          }
        }
      });
    });
  }, [activeVideoByCase, canLoadVideos, isMobile, loadedVideoKeys, mobileActiveCase]);

  return (
    <section ref={sectionRef} id="cases" className="bg-[#101927] px-6 py-24 text-white">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-5xl font-semibold tracking-normal">
              一组视频，拥有连续的情绪。
            </h2>
          </div>
        </div>

        <div className="space-y-7">
          {cases.map((item, caseIndex) => (
            <article key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-5 flex items-center justify-between px-2">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <span className="text-sm text-[#8da4bd]">{item.subtitle}</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => {
                  const activeIndex = activeVideoByCase[caseIndex] ?? 0;
                  const isCurrentVideo = activeIndex === index;
                  const canPlayThisCase = !isMobile || mobileActiveCase === caseIndex;
                  const shouldLoadVideo = canLoadVideos && isCurrentVideo && canPlayThisCase;
                  const videoKey = `${caseIndex}:${index}`;
                  const shouldRenderVideo = shouldLoadVideo || loadedVideoKeys.has(videoKey);
                  const poster = createPoster(item.title, index);

                  return item.videos ? (
                    <div
                      key={`${item.title}-${index}`}
                      className={`relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#31425a] via-[#1d2a3c] to-[#111a29] transition duration-700 ${
                        isCurrentVideo && canPlayThisCase
                          ? "opacity-100"
                          : "opacity-62 hover:opacity-82"
                      }`}
                    >
                      <img
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        src={poster}
                      />
                      {shouldRenderVideo ? (
                        <video
                          autoPlay={shouldLoadVideo}
                          className="relative z-10 h-full w-full object-cover transition duration-700"
                          muted
                          onEnded={() => {
                            setActiveVideoByCase((current) => {
                              const nextIndex = ((current[caseIndex] ?? 0) + 1) % 4;

                              if (isMobile && nextIndex === 0) {
                                setMobileActiveCase((currentCase) => (currentCase + 1) % cases.length);
                              }

                              return {
                                ...current,
                                [caseIndex]: nextIndex,
                              };
                            });
                          }}
                          playsInline
                          poster={poster}
                          preload="metadata"
                          ref={(video) => {
                            videoRefs.current[caseIndex] ??= [];
                            videoRefs.current[caseIndex][index] = video;
                          }}
                          src={item.videos[index]}
                        />
                      ) : null}
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_48%,rgba(9,15,25,0.24))]" />
                    </div>
                  ) : (
                    <div
                      key={`${item.title}-${index}`}
                      className="flex aspect-[4/5] flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-[#31425a] via-[#1d2a3c] to-[#111a29] p-4"
                    >
                      <div className="h-20 rounded-2xl bg-white/10" />
                      <div>
                        <p className="text-sm text-[#a9bbce]">Scene {caseIndex + 1}.{index + 1}</p>
                        <div className="mt-4 h-2 w-3/4 rounded-full bg-white/25" />
                        <div className="mt-2 h-2 w-1/2 rounded-full bg-white/15" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
