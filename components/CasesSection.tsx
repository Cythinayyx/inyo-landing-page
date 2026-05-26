"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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
  const [activeCase, setActiveCase] = useState(0);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [playbackUnlocked, setPlaybackUnlocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [canLoadVideos, setCanLoadVideos] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<Record<number, Array<HTMLVideoElement | null>>>({});

  const prepareVideoForInlinePlayback = useCallback((video: HTMLVideoElement) => {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("preload", "metadata");
  }, []);

  const tryPlayVideo = useCallback(
    (video: HTMLVideoElement) => {
      prepareVideoForInlinePlayback(video);

      const playPromise = video.play();

      if (!playPromise) {
        return;
      }

      playPromise
        .then(() => {
          setAutoplayBlocked(false);
        })
        .catch((error: { name?: string }) => {
          if (error?.name === "NotAllowedError") {
            setAutoplayBlocked(true);
          }
        });
    },
    [prepareVideoForInlinePlayback],
  );

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
    cases.forEach((_, caseIndex) => {
      const activeIndex = activeVideoByCase[caseIndex] ?? 0;

      videoRefs.current[caseIndex]?.forEach((video, index) => {
        if (!video) {
          return;
        }

        const shouldPlay =
          canLoadVideos &&
          isInView &&
          activeCase === caseIndex &&
          activeIndex === index;

        if (shouldPlay) {
          tryPlayVideo(video);
          return;
        }

        prepareVideoForInlinePlayback(video);
        video.pause();

        if (!shouldPlay && video.readyState > 0) {
          try {
            video.currentTime = Math.min(0.01, video.duration || 0.01);
          } catch {
            // Safari can reject currentTime changes before metadata is ready.
          }
        }
      });
    });
  }, [
    activeCase,
    activeVideoByCase,
    canLoadVideos,
    isInView,
    isMobile,
    prepareVideoForInlinePlayback,
    tryPlayVideo,
  ]);

  const handleManualPlayback = () => {
    setPlaybackUnlocked(true);
    setAutoplayBlocked(false);
    setActiveCase(0);
    setActiveVideoByCase({ 0: 0, 1: 0, 2: 0 });

    window.requestAnimationFrame(() => {
      const firstVideo = videoRefs.current[0]?.[0];

      if (firstVideo) {
        tryPlayVideo(firstVideo);
      }
    });
  };

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
                  const canPlayThisCase = activeCase === caseIndex;
                  const shouldPlayVideo =
                    canLoadVideos &&
                    isInView &&
                    isCurrentVideo &&
                    canPlayThisCase &&
                    (!autoplayBlocked || playbackUnlocked);

                  return item.videos ? (
                    <div
                      key={`${item.title}-${index}`}
                      className={`relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#31425a] via-[#1d2a3c] to-[#111a29] transition duration-700 ${
                        isCurrentVideo && canPlayThisCase
                          ? "opacity-100"
                          : "opacity-62 hover:opacity-82"
                      }`}
                    >
                      <video
                        autoPlay={shouldPlayVideo}
                        className="relative z-10 h-full w-full object-cover transition duration-700"
                        muted
                        onEnded={() => {
                          setActiveVideoByCase((current) => {
                            const nextIndex = ((current[caseIndex] ?? 0) + 1) % 4;

                            if (nextIndex === 0) {
                              setActiveCase((currentCase) => (currentCase + 1) % cases.length);
                            }

                            return {
                              ...current,
                              [caseIndex]: nextIndex,
                            };
                          });
                        }}
                        onLoadedMetadata={(event) => {
                          const video = event.currentTarget;
                          prepareVideoForInlinePlayback(video);

                          if (!shouldPlayVideo && video.currentTime < 0.01) {
                            video.currentTime = Math.min(0.01, video.duration || 0.01);
                          }

                          if (shouldPlayVideo) {
                            tryPlayVideo(video);
                          }
                        }}
                        onLoadedData={(event) => {
                          const video = event.currentTarget;

                          prepareVideoForInlinePlayback(video);

                          if (shouldPlayVideo) {
                            tryPlayVideo(video);
                          }
                        }}
                        playsInline
                        preload="metadata"
                        ref={(video) => {
                          videoRefs.current[caseIndex] ??= [];
                          videoRefs.current[caseIndex][index] = video;
                        }}
                        src={item.videos[index]}
                        {...{ "webkit-playsinline": "true" }}
                      />
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
        {autoplayBlocked && isInView ? (
          <div className="mt-8 flex justify-center">
            <button
              className="rounded-full border border-white/14 bg-white/10 px-5 py-2.5 text-sm font-medium text-white/86 backdrop-blur transition hover:bg-white/16"
              onClick={handleManualPlayback}
              type="button"
            >
              点击播放
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
