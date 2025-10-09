import { Card } from "@/components/ui/card"
import { Upload, Edit, ShoppingBag, Package } from "lucide-react"

const steps = [
  {
    icon: Upload,
    number: "۱",
    title: "آپلود تصاویر",
    description: "عکس‌های خود را از گوشی یا کامپیوتر آپلود کنید",
  },
  {
    icon: Edit,
    number: "۲",
    title: "ویرایش و سفارشی‌سازی",
    description: "سایز، متریال و تنظیمات چاپ را انتخاب کنید",
  },
  {
    icon: ShoppingBag,
    number: "۳",
    title: "پرداخت امن",
    description: "با درگاه امن پرداخت، سفارش خود را نهایی کنید",
  },
  {
    icon: Package,
    number: "۴",
    title: "دریافت سفارش",
    description: "چاپ‌های باکیفیت خود را در درب منزل دریافت کنید",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="container py-20 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">نحوه کار</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            در چهار مرحله ساده، عکس‌های خود را چاپ کنید
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 h-full">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
