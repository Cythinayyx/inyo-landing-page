"use client";

import { motion } from "framer-motion";

const qrCodeSrc =
  "https://api.qrserver.com/v1/create-qr-code/?size=512x512&format=png&data=https%3A%2F%2Finyo-landing-page-xzfr.vercel.app%2Fcoming-soon";

const continuationCards = [
  {
    className: "left-[3%] top-[12%] h-28 w-44",
    delay: 0,
    eyebrow: "01",
    title: "出发之前",
    subtitle: "今天想慢一点。",
    image: "/images/safari/expression-flow-01.jpg",
    tone: "from-[#dbe7f2]/88 via-white/70 to-[#cfd8ee]/72",
  },
  {
    className: "right-[2%] top-[18%] h-32 w-48",
    delay: 0.7,
    eyebrow: "02",
    title: "城市正在后退",
    subtitle: "窗外开始变成电影。",
    image: "/images/safari/expression-flow-02.jpg",
    tone: "from-[#eceff5]/86 via-[#f8fbff]/72 to-[#d9e7ee]/78",
  },
  {
    className: "left-[0%] bottom-[18%] h-32 w-48",
    delay: 1.2,
    eyebrow: "03",
    title: "电影开始之前",
    subtitle: "夜晚刚刚升温。",
    image: "/images/safari/expression-flow-03.jpg",
    tone: "from-[#dfe9ee]/86 via-[#f7fbff]/78 to-[#cdd6e8]/72",
  },
  {
    className: "right-[5%] bottom-[10%] h-28 w-44",
    delay: 1.8,
    eyebrow: "04",
    title: "夜晚有了味道",
    subtitle: "灯光、酒杯和放松下来的自己。",
    image: "/images/safari/expression-flow-04.jpg",
    tone: "from-[#e7edf7]/88 via-white/74 to-[#d6e7ee]/74",
  },
  {
    className: "left-[38%] bottom-[1%] h-24 w-40",
    delay: 2.4,
    eyebrow: "05",
    title: "清晨重启",
    subtitle: "昨晚的情绪还没散去。",
    image: "/images/safari/expression-flow-05.jpg",
    tone: "from-[#eef3f8]/88 via-white/78 to-[#dce4f0]/72",
  },
  {
    className: "right-[31%] top-[1%] h-24 w-40",
    delay: 3,
    eyebrow: "06",
    title: "下一段故事",
    subtitle: "有些生活，会自然继续。",
    image: "/images/safari/expression-flow-06.jpg",
    tone: "from-[#edf4f7]/88 via-white/76 to-[#dbe8ef]/72",
  },
];

function ExpressionFragment({
  card,
}: {
  card: (typeof continuationCards)[number];
}) {
  return (
    <motion.div
      animate={{
        opacity: [0.48, 0.78, 0.48],
        scale: [0.98, 1.02, 0.98],
        y: [0, -10, 0],
      }}
      className={`absolute ${card.className} rounded-[28px] border border-white/55 bg-gradient-to-br ${card.tone} p-4 shadow-[0_18px_70px_rgba(81,105,129,0.13)] backdrop-blur-xl`}
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      transition={{
        delay: card.delay,
        duration: 7.5,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[28px]">
        <img
          alt={`${card.title}：${card.subtitle}`}
          className="h-full w-full object-cover opacity-95"
          decoding="async"
          height={240}
          loading="eager"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
          src={card.image}
          width={320}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,251,255,0.02)_0%,rgba(248,251,255,0.12)_44%,rgba(248,251,255,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.22),transparent_38%)]" />
      </div>
      <div className="relative flex h-full flex-col justify-end">
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] text-[#7f8ea8]">
            {card.eyebrow}
          </p>
          <h3 className="mt-1 text-sm font-medium leading-5 text-[#28364c]">
            {card.title}
          </h3>
          <p className="mt-0.5 text-[10px] leading-4 text-[#65748d]">
            {card.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function MainExpressionCard() {
  return (
    <motion.div
      animate={{
        rotateX: [0, 1.2, 0],
        rotateY: [0, -1.6, 0],
        scale: [1, 1.018, 1],
        y: [0, -8, 0],
      }}
      className="relative mx-auto h-[440px] w-[340px] overflow-hidden rounded-[42px] border border-white/60 bg-white/55 shadow-[0_34px_110px_rgba(72,92,118,0.2)] backdrop-blur-2xl sm:h-[500px] sm:w-[386px]"
      transition={{
        duration: 9,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_18%,rgba(255,229,188,0.72),transparent_26%),linear-gradient(145deg,#eef5f8_0%,#d4e2eb_36%,#8f9baa_100%)]" />
      <motion.div
        animate={{ scale: [1.02, 1.08, 1.02], x: [-6, 8, -6], y: [4, -8, 4] }}
        className="absolute inset-[-8%]"
        transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
      >
        <img
          alt="餐厅晚餐正在成为连续故事"
          className="h-full w-full object-cover"
          decoding="async"
          fetchPriority="high"
          height={1000}
          loading="eager"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
          src="/images/safari/expression-main.jpg"
          width={772}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent_36%,rgba(20,30,48,0.08)),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_46%,rgba(15,23,36,0.42))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,212,143,0.18),transparent_36%)]" />
      <div className="absolute inset-0 rounded-[42px] border border-white/50" />

      <div className="absolute bottom-5 left-5 right-5 rounded-[26px] border border-white/42 bg-white/32 p-4 backdrop-blur-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/76">
          当前片段
        </p>
        <p className="mt-2 text-lg font-medium leading-6 text-white">
          餐厅晚餐，正在慢慢成为故事
        </p>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(196,218,235,0.46),transparent_34%),radial-gradient(circle_at_42%_20%,rgba(255,255,255,0.96),transparent_32%),linear-gradient(135deg,#f7fbff_0%,#eef6fb_46%,#e5edf7_100%)]" />
      <div className="pointer-events-none absolute left-[42%] top-20 h-[560px] w-[560px] rounded-full bg-[#d9edf5]/42 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 lg:min-h-[680px] lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
        <div className="relative z-20 max-w-[620px]">
          <p className="text-5xl font-semibold leading-none tracking-normal text-[#121d31] sm:text-6xl lg:text-[76px]">
            让表达 更像你
          </p>
          <p className="mt-6 max-w-[560px] text-xl font-light leading-8 tracking-normal text-[#41516b] sm:text-2xl">
            Make your expression feel more like you
          </p>
          <p className="mt-5 max-w-[500px] text-lg font-light leading-8 text-[#74839a] sm:text-xl">
            AI帮你持续呈现更好的自己
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-4">
            {[
              { label: "iOS 下载", caption: "扫码获取 iOS 版本", primary: true },
              { label: "Android 下载", caption: "扫码获取 Android 版本", primary: false },
            ].map((item) => (
              <div className="group relative" key={item.label}>
                <a
                  href="/coming-soon"
                  className={
                    item.primary
                      ? "inline-flex rounded-full bg-[#152033] px-7 py-3.5 text-base font-medium text-white transition hover:bg-[#263754]"
                      : "inline-flex rounded-full border border-[#cdd9e5] bg-white/78 px-7 py-3.5 text-base font-medium text-[#152033] transition hover:border-[#b8c8d9] hover:bg-white"
                  }
                >
                  {item.label}
                </a>

                <div className="pointer-events-none absolute left-0 top-full z-30 mt-4 hidden w-[220px] rounded-[28px] border border-[#dce7f1] bg-white/95 p-4 text-center shadow-[0_20px_60px_rgba(63,84,110,0.18)] backdrop-blur-xl group-hover:block group-focus-within:block">
                  <img
                    alt={`${item.label} 下载二维码`}
                    className="h-[172px] w-[172px] rounded-[20px] border border-[#e4edf5] object-cover"
                    src={qrCodeSrc}
                  />
                  <p className="mt-3 text-sm font-medium text-[#1c2a40]">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          aria-label="Expression Flow: a current restaurant moment is continuously extended by AI into future emotional fragments."
          className="relative z-10 min-h-[620px]"
          role="img"
        >
          <motion.div
            animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.04, 1] }}
            className="absolute left-[12%] top-[12%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(119,159,190,0.2),transparent_66%)] blur-3xl"
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          />
          <div className="absolute left-[12%] right-[10%] top-[49%] h-px bg-gradient-to-r from-transparent via-[#8ea0bd]/45 to-transparent" />
          <div className="absolute left-[34%] top-[16%] h-[74%] w-px bg-gradient-to-b from-transparent via-[#a8b8cc]/42 to-transparent" />

          {continuationCards.map((card) => (
            <ExpressionFragment card={card} key={card.title} />
          ))}

          <div className="absolute left-1/2 top-[52%] z-10 -translate-x-1/2 -translate-y-1/2">
            <MainExpressionCard />
          </div>

          <motion.div
            animate={{ opacity: [0.25, 0.55, 0.25], x: ["-12%", "16%", "-12%"] }}
            className="absolute left-[16%] top-[48%] h-1 w-[68%] rounded-full bg-gradient-to-r from-transparent via-[#7da9c4]/60 to-transparent blur-sm"
            transition={{ duration: 7.5, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
}
