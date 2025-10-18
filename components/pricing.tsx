import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const sizes = [
  {
    name: "۱۰×۱۵ سانتی‌متر",
    price: "۱۵,۰۰۰",
    features: ["کیفیت استاندارد", "کاغذ گلاسه", "مناسب آلبوم"],
  },
  {
    name: "۲۰×۳۰ سانتی‌متر",
    price: "۴۵,۰۰۰",
    popular: true,
    features: ["کیفیت بالا", "کاغذ مات یا گلاسه", "مناسب قاب"],
  },
  {
    name: "۳۰×۴۰ سانتی‌متر",
    price: "۸۵,۰۰۰",
    features: ["کیفیت حرفه‌ای", "انواع کاغذ", "مناسب دکوراسیون"],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="container py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">قیمت‌های شفاف</h2>
          <p className="text-lg text-foreground-muted text-pretty max-w-2xl mx-auto leading-relaxed">
            بدون هزینه پنهان - قیمت نهایی را قبل از پرداخت مشاهده کنید
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {sizes.map((size, index) => (
            <Card key={index} className={`p-6 relative ${size.popular ? "border-accent shadow-lg" : ""}`}>
              {size.popular && (
                <div className="absolute -top-3 right-1/2 translate-x-1/2 bg-accent text-accent-contrast px-4 py-1 rounded-full text-sm font-medium">
                  محبوب‌ترین
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{size.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{size.price}</span>
                  <span className="text-foreground-muted">تومان</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {size.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={size.popular ? "default" : "outline"}>
                انتخاب سایز
              </Button>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-foreground-muted">
          * قیمت‌ها به ازای هر برگ می‌باشد. هزینه ارسال در مرحله پرداخت محاسبه می‌شود.
        </p>
      </div>
    </section>
  )
}
