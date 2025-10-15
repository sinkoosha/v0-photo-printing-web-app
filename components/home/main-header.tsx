import Link from "next/link"

const secondaryLinks = [
  { href: "#", label: "چاپ عکس" },
  { href: "#", label: "آلبوم عکس" },
  { href: "#", label: "قاب عکس" },
  { href: "#", label: "چاپ دیجیتال" },
  { href: "#", label: "راهنمای استفاده" },
  { href: "#", label: "درباره ما" },
  { href: "#", label: "تماس با ما" },
]

export function MainHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E9E1DA] bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1200px] flex-row-reverse items-center gap-3 px-4 py-4 md:px-6">
        <Link href="#" className="shrink-0 text-2xl font-semibold tracking-tight text-[#3B2F2A]">
          AX<span className="text-[#C78555]">Print</span>
        </Link>
        <div className="flex-1">
          <label htmlFor="site-search" className="sr-only">
            جستجو
          </label>
          <div className="relative">
            <input
              id="site-search"
              type="search"
              placeholder="دنبال چه چیزی هستی؟"
              className="w-full rounded-full border border-[#E9E1DA] bg-white/80 px-4 py-2 text-sm text-[#5A4A40] shadow-sm placeholder:text-[#9C8C7F] focus:border-[#C78555] focus:outline-none focus:ring-2 focus:ring-[#C78555]/30"
            />
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3 text-sm text-[#5A4A40]">
          <Link
            href="/profile"
            className="rounded-full border border-transparent px-3 py-1.5 transition hover:border-[#C78555]/40 hover:bg-[#F1E4D7]"
          >
            حساب کاربری
          </Link>
          <Link
            href="/cart"
            className="rounded-full border border-transparent px-3 py-1.5 transition hover:border-[#C78555]/40 hover:bg-[#F1E4D7]"
          >
            سبد خرید
          </Link>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E9E1DA] text-[#3B2F2A] transition hover:bg-[#F1E4D7] md:hidden"
          aria-label="باز کردن منو"
        >
          <span className="text-lg">☰</span>
        </button>
      </div>
      <div className="border-t border-[#E9E1DA]/70 bg-white/70">
        <nav
          aria-label="لینک‌های ثانویه"
          className="mx-auto flex w-full max-w-[1200px] items-center gap-6 overflow-x-auto px-4 py-3 text-sm text-[#5A4A40] md:px-6"
        >
          {secondaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap rounded-full px-3 py-1 transition hover:bg-[#F1E4D7] hover:text-[#3B2F2A]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
