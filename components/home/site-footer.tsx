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
    <footer className="bg-[#F1E4D7]/60 pt-12 text-[#5A4A40]">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 text-right">
            <Link href="#" className="text-2xl font-semibold text-[#3B2F2A]">
              AX<span className="text-[#C78555]">Print</span>
            </Link>
            <p className="text-sm leading-7">
              چاپ حرفه‌ای عکس، قاب‌های اختصاصی و بسته‌بندی‌های شیک برای اینکه خاطراتت همیشه تازه بماند.
            </p>
          </div>
          <div className="space-y-3 text-right">
            <h4 className="text-sm font-semibold text-[#3B2F2A]">راهنما</h4>
            <ul className="space-y-2 text-sm">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link className="transition hover:text-[#C78555]" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 text-right">
            <h4 className="text-sm font-semibold text-[#3B2F2A]">ارتباط با ما</h4>
            <ul className="space-y-2 text-sm">
              <li>
                تلفن: <a href="tel:02112345678" className="transition hover:text-[#C78555]">۰۲۱-۱۲۳۴۵۶۷۸</a>
              </li>
              <li>
                ایمیل: <a href="mailto:hello@axprint.ir" className="transition hover:text-[#C78555]">hello@axprint.ir</a>
              </li>
              <li>تهران، خیابان هنر، پلاک ۲۳</li>
            </ul>
          </div>
          <div className="space-y-3 text-right">
            <h4 className="text-sm font-semibold text-[#3B2F2A]">ما را دنبال کنید</h4>
            <div className="flex justify-end gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9E1DA] text-sm font-medium text-[#3B2F2A] transition hover:border-[#C78555] hover:text-[#C78555]"
                >
                  {social.label[0]}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 border-t border-[#E9E1DA] py-6 text-sm text-[#5A4A40] md:flex-row md:justify-between">
          <div className="flex flex-wrap justify-center gap-3">
            {[1, 2, 3].map((badge) => (
              <span
                key={badge}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E9E1DA] bg-white text-xs text-[#9C8C7F]"
              >
                مجوز {badge}
              </span>
            ))}
          </div>
          <p className="text-center text-xs text-[#5A4A40]">
            کلیه حقوق این سایت متعلق به شرکت عکس پرینت می‌باشد.
          </p>
        </div>
      </div>
    </footer>
  )
}
