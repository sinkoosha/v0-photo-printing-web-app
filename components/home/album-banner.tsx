import Image from "next/image"
import Link from "next/link"

export function AlbumBanner() {
  return (
    <section className="mx-auto w-full max-w-container px-4 pb-12 md:px-6">
      <div className="grid gap-8 overflow-hidden rounded-3xl border border-border/70 bg-surface-soft/90 p-6 shadow-soft md:grid-cols-2 md:p-10">
        <div className="relative order-2 h-64 overflow-hidden rounded-2xl border border-border/60 bg-surface/70 md:order-1 md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1000&q=80"
            alt="آلبوم عکس دست‌ساز با صفحات کرم"
            fill
            sizes="(max-width: 768px) 100vw, 520px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-end gap-4 text-right md:order-2">
          <h3 className="text-2xl font-semibold text-foreground">هر برگ آلبوم، یک قطعه از زندگی</h3>
          <p className="text-sm leading-7 text-foreground-muted md:text-base">
            آلبوم‌های سفارشی AXPrint با کاغذهای ویژه، جلدهای دست‌دوز و چاپ دقیق طراحی شده‌اند تا بهترین همراه برای داستان‌های زندگی‌ات
            باشند. با انتخاب جنس جلد، رنگ نخ و بسته‌بندی، آن را کاملاً شخصی‌سازی کن.
          </p>
          <Link
            href="#"
            className="rounded-full bg-accent px-6 py-2 text-sm font-medium text-accent-contrast shadow-soft transition hover:bg-accent-strong"
          >
            سفارش محصول
          </Link>
        </div>
      </div>
    </section>
  )
}
