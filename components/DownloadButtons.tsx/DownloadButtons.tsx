type DownloadButtonProps = {
  align?: "left" | "center";
};

const qrCodeSrc =
  "https://api.qrserver.com/v1/create-qr-code/?size=512x512&format=png&data=https%3A%2F%2Finyo-landing-page-xzfr.vercel.app%2Fcoming-soon";

const downloadItems = [
  {
    label: "iOS 下载",
    caption: "扫码获取 iOS 版本",
    href: "/coming-soon",
    style:
      "bg-[#152033] text-white hover:bg-[#263754]",
  },
  {
    label: "Android 下载",
    caption: "扫码获取 Android 版本",
    href: "/coming-soon",
    style:
      "border border-[#cdd9e5] bg-white/78 text-[#152033] hover:border-[#b8c8d9] hover:bg-white",
  },
];

export function DownloadButtons({
  align = "left",
}: DownloadButtonProps) {
  const overlayAlign =
    align === "center"
      ? "left-1/2 -translate-x-1/2"
      : "left-0";

  return (
    <div
      className={`flex flex-wrap items-center gap-4 ${align === "center" ? "justify-center" : ""}`}
    >
      {downloadItems.map((item) => (
        <div className="group relative" key={item.label}>
          <a
            href={item.href}
            className={`inline-flex rounded-full px-7 py-3.5 text-base font-medium transition ${item.style}`}
          >
            {item.label}
          </a>

          <div
            className={`pointer-events-none absolute top-full z-30 mt-4 hidden w-[220px] rounded-[28px] border border-[#dce7f1] bg-white/95 p-4 text-center shadow-[0_20px_60px_rgba(63,84,110,0.18)] backdrop-blur-xl group-hover:block group-focus-within:block ${overlayAlign}`}
          >
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
  );
}
