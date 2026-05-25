"use client";

import { useEffect, useRef, useState } from "react";

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
  const videoRefs = useRef<Record<number, Array<HTMLVideoElement | null>>>({});

  useEffect(() => {
    cases.forEach((item, caseIndex) => {
      if (!item.videos) {
        return;
      }

      const activeIndex = activeVideoByCase[caseIndex] ?? 0;

      videoRefs.current[caseIndex]?.forEach((video, index) => {
        if (!video) {
          return;
        }

        if (index === activeIndex) {
          video.play().catch(() => undefined);
          return;
        }

        video.pause();
        video.currentTime = 0;
      });
    });
  }, [activeVideoByCase]);

  return (
    <section id="cases" className="bg-[#101927] px-6 py-24 text-white">
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
                {Array.from({ length: 4 }).map((_, index) => (
                  item.videos ? (
                    <div
                      key={`${item.title}-${index}`}
                      className={`relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#31425a] via-[#1d2a3c] to-[#111a29] transition duration-700 ${
                        (activeVideoByCase[caseIndex] ?? 0) === index
                          ? "opacity-100"
                          : "opacity-62 hover:opacity-82"
                      }`}
                    >
                      <video
                        autoPlay={(activeVideoByCase[caseIndex] ?? 0) === index}
                        className={`h-full w-full object-cover transition duration-700 ${
                          (activeVideoByCase[caseIndex] ?? 0) === index ? "scale-100" : "scale-[1.01]"
                        }`}
                        muted
                        onEnded={() => {
                          setActiveVideoByCase((current) => ({
                            ...current,
                            [caseIndex]: ((current[caseIndex] ?? 0) + 1) % 4,
                          }));
                        }}
                        playsInline
                        preload="metadata"
                        ref={(video) => {
                          videoRefs.current[caseIndex] ??= [];
                          videoRefs.current[caseIndex][index] = video;
                        }}
                        src={item.videos[index]}
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
                  )
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
