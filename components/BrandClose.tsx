const qrCodeSrc =
  "https://api.qrserver.com/v1/create-qr-code/?size=512x512&format=png&data=https%3A%2F%2Finyo-landing-page-xzfr.vercel.app%2Fcoming-soon";

export function BrandClose() {
  return (
    <section id="start" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px] rounded-[36px] border border-[#d6e4f1] bg-gradient-to-br from-white to-[#eaf4ff] px-16 py-20 text-center shadow-sm">
        <h2 className="mx-auto max-w-4xl text-6xl font-semibold leading-tight tracking-normal text-[#142035]">
          让每一次表达，都更像你。
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-xl leading-9 text-[#60748d]">
          从一个想法开始，持续创作属于你的人生片段。
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {[
            { label: "iOS 下载", caption: "扫码获取 iOS 版本", primary: true },
            { label: "Android 下载", caption: "扫码获取 Android 版本", primary: false },
          ].map((item) => (
            <div className="group relative" key={item.label}>
              <a
                href="/coming-soon"
                className={
                  item.primary
                    ? "inline-flex rounded-full bg-[#152033] px-8 py-4 text-base font-medium text-white transition hover:bg-[#263754]"
                    : "inline-flex rounded-full border border-[#cdd9e5] bg-white/78 px-8 py-4 text-base font-medium text-[#152033] transition hover:border-[#b8c8d9] hover:bg-white"
                }
              >
                {item.label}
              </a>

              <div className="pointer-events-none absolute left-1/2 top-full z-30 mt-4 hidden w-[220px] -translate-x-1/2 rounded-[28px] border border-[#dce7f1] bg-white/95 p-4 text-center shadow-[0_20px_60px_rgba(63,84,110,0.18)] backdrop-blur-xl group-hover:block group-focus-within:block">
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
    </section>
  );
}
