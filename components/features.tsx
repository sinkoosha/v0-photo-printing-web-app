import { Card } from "@/components/ui/card"
import { Palette, Zap, Shield, Truck } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "ویرایشگر آنلاین",
    description: "ابزارهای حرفه‌ای برای ویرایش، کراپ و بهبود کیفیت تصاویر شما قبل از چاپ",
  },
  {
    icon: Zap,
    title: "پردازش سریع",
    description: "سفارش شما در کمترین زمان ممکن پردازش و آماده ارسال می‌شود",
  },
  {
    icon: Shield,
    title: "کیفیت تضمینی",
    description: "استفاده از بهترین کاغذها و دستگاه‌های چاپ برای نتیجه‌ای بی‌نظیر",
  },
  {
    icon: Truck,
    title: "ارسال سریع",
    description: "تحویل در سراسر کشور با بسته‌بندی مطمئن و ردیابی آنلاین",
  },
]

export function Features() {
  return (
    <section id="features" className="container py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">چرا چاپ‌عکس؟</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            ما با ارائه بهترین خدمات و کیفیت، تجربه‌ای متفاوت از چاپ عکس را برای شما فراهم می‌کنیم
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
