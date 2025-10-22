import Image from "next/image"
import Link from "next/link"

export function HeroBanner() {
  return (
    <section className="mx-auto w-full max-w-container px-4 pb-12 pt-8 md:px-6 md:pt-12">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-soft">
        <Image
          src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1600&q=80"
          alt="چیدمان قاب‌های دیواری مدرن در اتاق نشیمن"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/50 to-transparent" />
        <div className="relative flex min-h-[360px] flex-col items-end justify-end gap-4 p-6 text-right sm:p-10 md:min-h-[440px]">
          <span className="rounded-full border border-border/60 bg-surface/90 px-4 py-1 text-xs font-medium tracking-[0.3em] text-accent">
            Super
          </span>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            قاب‌های جدید دیواری
          </h2>
          <p className="max-w-[420px] text-sm text-foreground-muted sm:text-base">
            خاطراتت را با چاپ حرفه‌ای و قاب‌های زیبا به دیوار خانه بیاویز. مجموعه جدید ما با متریال باکیفیت و طراحی مدرن آماده
            روشن کردن فضای خانه‌ات است.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="rounded-full bg-accent px-6 py-2 text-sm font-medium text-accent-contrast shadow-soft transition hover:bg-accent-strong"
            >
              مشاهده محصولات
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
