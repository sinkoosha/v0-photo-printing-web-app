import Link from "next/link"

const secondaryLinks = [
  { href: "/products/polaroid", label: "چاپ پولاروید" },
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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/90 shadow-soft backdrop-blur">
      <div className="mx-auto flex w-full max-w-container flex-row-reverse items-center gap-3 px-4 py-4 md:px-6">
        <Link href="/" className="shrink-0 text-2xl font-semibold tracking-tight text-foreground">
          AX<span className="text-accent">Print</span>
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
              className="w-full rounded-full border border-border/80 bg-surface px-4 py-2 text-sm text-foreground-muted shadow-soft placeholder:text-foreground-soft focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3 text-sm text-foreground-muted">
          <Link
            href="/profile"
            className="rounded-full border border-transparent px-3 py-1.5 transition hover:border-accent/40 hover:bg-overlay"
          >
            حساب کاربری
          </Link>
          <Link
            href="/cart"
            className="rounded-full border border-transparent px-3 py-1.5 transition hover:border-accent/40 hover:bg-overlay"
          >
            سبد خرید
          </Link>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-overlay md:hidden"
          aria-label="باز کردن منو"
        >
          <span className="text-lg">☰</span>
        </button>
      </div>
      <div className="border-t border-border/70 bg-surface/80">
        <nav
          aria-label="لینک‌های ثانویه"
          className="mx-auto flex w-full max-w-container items-center gap-6 overflow-x-auto px-4 py-3 text-sm text-foreground-muted md:px-6"
        >
          {secondaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap rounded-full px-3 py-1 transition hover:bg-overlay hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
