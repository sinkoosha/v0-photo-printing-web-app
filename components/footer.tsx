import Link from "next/link"
import { ImageIcon, Instagram, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <ImageIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">چاپ‌عکس</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              سرویس آنلاین چاپ عکس با کیفیت بالا. خاطرات شما را با بهترین کیفیت چاپ می‌کنیم.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">اینستاگرام</span>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">تلگرام</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">دسترسی سریع</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  ویژگی‌ها
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  نحوه کار
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  قیمت‌ها
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-muted-foreground hover:text-foreground transition-colors">
                  پیگیری سفارش
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">پشتیبانی</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  شرایط و قوانین
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} چاپ‌عکس. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}
