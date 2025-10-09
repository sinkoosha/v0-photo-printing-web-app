import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "مریم احمدی",
    role: "عکاس پرتره",
    content:
      "کیفیت چاپ‌ها فوق‌العاده است. رنگ‌ها دقیق و زنده هستند و بسته‌بندی بسیار حرفه‌ای بود.",
  },
  {
    name: "سینا مرادی",
    role: "طراح گرافیک",
    content:
      "سفارش‌ها همیشه به‌موقع می‌رسند و تیم پشتیبانی در انتخاب متریال مناسب راهنمایی عالی ارائه می‌کند.",
  },
  {
    name: "بهاره قاسمی",
    role: "مدیر گالری",
    content:
      "برای نمایشگاه اخیرمان از چاپ‌عکس استفاده کردیم و بازخورد مشتریان فوق‌العاده مثبت بود.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/40 py-20 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
            صدای مشتریان ما
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            هزاران مشتری در سراسر ایران به چاپ‌عکس اعتماد کرده‌اند؛ این بخشی از تجربه‌های آن‌هاست.
          </p>
        </div>

        <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:max-w-5xl">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col gap-6 p-8">
              <div className="flex items-center gap-2 text-primary">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base leading-8 text-muted-foreground text-pretty">
                {testimonial.content}
              </p>
              <div>
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
