import { DownloadButtons } from "@/components/DownloadButtons";

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
        <div className="mt-10">
          <DownloadButtons align="center" />
        </div>
      </div>
    </section>
  );
}
