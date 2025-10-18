import Link from "next/link"

const helpLinks = [
  { href: "#", label: "سؤالات متداول" },
  { href: "#", label: "راهنمای خرید" },
  { href: "#", label: "قوانین سایت" },
]

const socialLinks = [
  { href: "#", label: "اینستاگرام" },
  { href: "#", label: "تلگرام" },
  { href: "#", label: "واتساپ" },
]

export function SiteFooter() {
  return (
    <footer className="bg-overlay/60 pt-12 text-foreground-muted">
      <div className="mx-auto w-full max-w-container px-4 md:px-6">
        <div className="grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 text-right">
            <Link href="#" className="text-2xl font-semibold text-foreground">
              AX<span className="text-accent">Print</span>
            </Link>
            <p className="text-sm leading-7">
              چاپ حرفه‌ای عکس، قاب‌های اختصاصی و بسته‌بندی‌های شیک برای اینکه خاطراتت همیشه تازه بماند.
            </p>
          </div>
          <div className="space-y-3 text-right">
            <h4 className="text-sm font-semibold text-foreground">راهنما</h4>
            <ul className="space-y-2 text-sm">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link className="transition hover:text-accent" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 text-right">
            <h4 className="text-sm font-semibold text-foreground">ارتباط با ما</h4>
            <ul className="space-y-2 text-sm">
              <li>
                تلفن: <a href="tel:02112345678" className="transition hover:text-accent">۰۲۱-۱۲۳۴۵۶۷۸</a>
              </li>
              <li>
                ایمیل: <a href="mailto:hello@axprint.ir" className="transition hover:text-accent">hello@axprint.ir</a>
              </li>
              <li>تهران، خیابان هنر، پلاک ۲۳</li>
            </ul>
          </div>
          <div className="space-y-3 text-right">
            <h4 className="text-sm font-semibold text-foreground">ما را دنبال کنید</h4>
            <div className="flex justify-end gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
                >
                  {social.label[0]}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 border-t border-border py-6 text-sm text-foreground-muted md:flex-row md:justify-between">
          <div className="flex flex-wrap justify-center gap-3">
            {[1, 2, 3].map((badge) => (
              <span
                key={badge}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-xs text-foreground-soft"
              >
                مجوز {badge}
              </span>
            ))}
          </div>
          <p className="text-center text-xs text-foreground-muted">
            کلیه حقوق این سایت متعلق به شرکت عکس پرینت می‌باشد.
          </p>
        </div>
      </div>
    </footer>
  )
}
