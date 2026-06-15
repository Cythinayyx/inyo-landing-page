export function Footer() {
  return (
    <footer className="border-t border-[#dce7f1] px-6 py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 text-sm text-[#667890]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-[#dce7f1] bg-white">
              <img
                alt="映你"
                className="h-full w-full object-contain"
                src="/images/inyo-logo-new.png"
              />
            </span>
            <span className="text-base font-semibold text-[#1c2a40]">映你</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] leading-6">
            <a className="transition hover:text-[#1c2a40]" href="#">
              用户协议
            </a>
            <a className="transition hover:text-[#1c2a40]" href="#">
              隐私政策
            </a>
          </div>
        </div>

        <div className="border-t border-[#e6eef5] pt-4 text-[13px] leading-6 text-[#7b8da3]">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span>Copyright © 2026 南通虾条科技有限公司 版权所有</span>
            <span>技术支持：service@heyinyo.com</span>
            <a
              className="transition hover:text-[#1c2a40]"
              href="https://beian.miit.gov.cn/#/Integrated/index"
              rel="noreferrer"
              target="_blank"
            >
              ICP备案：苏ICP备2026031279号-3
            </a>
            <a
              className="inline-flex items-center gap-2 transition hover:text-[#1c2a40]"
              href="https://beian.mps.gov.cn/#/query/webSearch"
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt="公安备案图标"
                className="h-4 w-4 object-contain"
                src="https://beian.mps.gov.cn/favicon.ico"
              />
              苏公网安备
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
