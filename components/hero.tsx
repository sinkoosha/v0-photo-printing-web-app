import { Button } from "@/components/ui/button"
import { Upload, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container py-20 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
          <Sparkles className="h-4 w-4" />
          <span>چاپ حرفه‌ای با کیفیت بالا</span>
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl lg:text-7xl">
          خاطرات شما را
          <br />
          <span className="text-primary">زنده نگه می‌داریم</span>
        </h1>

        <p className="mb-10 text-lg text-muted-foreground text-pretty md:text-xl max-w-2xl mx-auto leading-relaxed">
          با چاپ‌عکس، تصاویر دیجیتال خود را به چاپ‌های باکیفیت تبدیل کنید. انتخاب سایز، ویرایش آنلاین و تحویل سریع در
          سراسر کشور.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-base px-8 h-12 gap-2" asChild>
            <Link href="/upload">
              <Upload className="h-5 w-5" />
              آپلود و شروع چاپ
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 h-12 bg-transparent">
            مشاهده نمونه کارها
          </Button>
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card p-2 shadow-2xl">
          <div className="aspect-video rounded-xl bg-muted overflow-hidden">
            <img
              src="/photo-printing-preview-interface-with-uploaded-pho.jpg"
              alt="پیش‌نمایش رابط کاربری چاپ‌عکس"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
