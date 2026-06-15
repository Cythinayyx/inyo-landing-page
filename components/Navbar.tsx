export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-6 pt-5">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between rounded-full border border-white/80 bg-white/75 px-5 shadow-sm backdrop-blur">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl">
            <img
              alt="映你 inyo"
              className="h-full w-full object-contain"
              src="/images/inyo-logo-new.png"
            />
          </span>
          <span className="text-lg font-semibold tracking-normal">映你</span>
        </a>
      </nav>
    </header>
  );
}
