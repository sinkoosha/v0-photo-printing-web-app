import Image from "next/image"
import Link from "next/link"
import {
  BadgeCheck,
  Brush,
  Camera,
  CheckCircle2,
  Heart,
  MessageCircle,
  Package,
  Palette,
  Printer,
  ShieldCheck,
  Star,
  StarHalf,
  Truck,
  Users,
} from "lucide-react"

import { MainHeader } from "@/components/home/main-header"
import { NotificationBar } from "@/components/home/notification-bar"
import { SiteFooter } from "@/components/home/site-footer"

const productSpecs = [
  { label: "نوع چاپ", value: "دیجیتال با کیفیت ۳۰۰dpi" },
  { label: "ابعاد هر عکس", value: "۱۰ در ۱۲ سانتی‌متر" },
  { label: "جنس کاغذ", value: "فتویی براق + لمینیت نرم" },
  { label: "زمان آماده‌سازی", value: "۲ تا ۳ روز کاری" },
  { label: "حداقل تیراژ", value: "۱۰ عدد" },
  { label: "قابلیت شخصی‌سازی", value: "فیلتر رنگی و متن پایین عکس" },
  { label: "بسته‌بندی", value: "جعبه مقوایی با روکش مات" },
  { label: "ارسال", value: "پست پیشتاز یا پیک شهری" },
]

const highlightFeatures = [
  {
    title: "کاغذ مخصوص پولاروید",
    description: "برش گرد با حاشیه سفید کلاسیک و پوشش ضد اثر انگشت برای ماندگاری بیشتر.",
    icon: Printer,
  },
  {
    title: "ویرایش رنگ پیشرفته",
    description: "نور، کنتراست و رنگ‌ها قبل از چاپ تنظیم می‌شود تا بهترین خروجی را داشته باشید.",
    icon: Palette,
  },
  {
    title: "بسته‌بندی هدیه‌ای",
    description: "هر سفارش داخل باکس دست‌ساز و روبان‌بندی شده برای هدیه دادن آماده می‌شود.",
    icon: Package,
  },
]

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1548248823-ce16a73b7d50?auto=format&fit=crop&w=800&q=80",
    alt: "چیدمان پولاروید روی میز چوبی",
  },
  {
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    alt: "پولاروید روی طناب با گیره چوبی",
  },
  {
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    alt: "پولاروید سفر در کنار دوربین",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    alt: "چیدمان پولاروید خانوادگی",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    alt: "جزئیات چاپ براق پولاروید",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    alt: "هدیه پولاروید در جعبه",
  },
]

const reviewData = [
  {
    name: "ستاره نادری",
    rating: 5,
    date: "۲۷ اسفند ۱۴۰۲",
    title: "کیفیت چاپ بی‌نظیر",
    comment:
      "رنگ‌ها دقیقاً همانی شد که روی نمایشگرم دیدم و بسته‌بندی به قدری شیک بود که بدون اضافه‌کاری برای هدیه دادن استفاده کردم.",
    highlights: ["رنگ دقیق", "پشتیبانی سریع"],
  },
  {
    name: "نیما حاتمی",
    rating: 4.5,
    date: "۱۶ بهمن ۱۴۰۲",
    title: "به موقع رسید",
    comment:
      "برای سورپرایز سالگرد سفارش دادم، همه‌چیز تمیز و مرتب بود. فقط ای کاش گزینه ارسال فوری داشتید.",
    highlights: ["بسته‌بندی عالی", "زمان‌بندی خوب"],
  },
  {
    name: "بهاره نیک‌سرشت",
    rating: 4,
    date: "۲ آذر ۱۴۰۲",
    title: "پیشنهاد می‌کنم",
    comment:
      "امکان افزودن متن زیر عکس‌ها خیلی جالب بود. کیفیت چاپ روی کاغذ براق واقعاً چشم‌نواز است.",
    highlights: ["شخصی‌سازی متن", "جنس کاغذ"],
  },
]

const faqs = [
  {
    question: "چطور فایل عکس‌ها را ارسال کنم؟",
    answer:
      "پس از افزودن محصول به سبد و تکمیل خرید، لینک آپلود اختصاصی در حساب کاربری فعال می‌شود. همچنین می‌توانید از بخش آپلود سریع در صفحه اصلی استفاده کنید.",
  },
  {
    question: "آیا امکان چاپ فوری وجود دارد؟",
    answer:
      "در حال حاضر سرویس آماده‌سازی ۲۴ ساعته فقط برای سفارش‌های داخل تهران فعال است. برای هماهنگی با پشتیبانی تماس بگیرید.",
  },
  {
    question: "چگونه از وضعیت سفارش مطلع شوم؟",
    answer:
      "از طریق بخش پیگیری سفارش در حساب کاربری یا لینک پیامک شده می‌توانید وضعیت چاپ و ارسال را ببینید.",
  },
]

const serviceHighlights = [
  {
    icon: ShieldCheck,
    title: "ضمانت کیفیت چاپ",
    description: "اگر چاپ‌ها دارای خط یا لکه باشند، بدون قید و شرط مجدد چاپ می‌کنیم.",
  },
  {
    icon: Truck,
    title: "ارسال سریع و مطمئن",
    description: "ارسال به سراسر ایران با بسته‌بندی مقاوم و انتخاب زمان تحویل.",
  },
  {
    icon: BadgeCheck,
    title: "پرداخت امن",
    description: "تسویه آنلاین تحت گواهی SSL و امکان پرداخت در محل تهران.",
  },
]

const trustBadges = [
  { label: "نماد اعتماد", description: "در حال بروزرسانی" },
  { label: "ساماندهی", description: "مجوز رسانه‌های دیجیتال" },
  { label: "عضو اتحادیه", description: "عکاسان و چاپخانه‌داران" },
]

const bundleOptions = [
  { label: "۱۰ عدد", price: "۱۹۹٬۰۰۰", saving: "۵٪ تخفیف" },
  { label: "۲۰ عدد", price: "۳۵۹٬۰۰۰", saving: "۱۰٪ تخفیف" },
  { label: "۴۰ عدد", price: "۶۵۹٬۰۰۰", saving: "۱۵٪ تخفیف" },
  { label: "۷۰ عدد", price: "۹۹۹٬۰۰۰", saving: "۲۰٪ تخفیف" },
]

const printAddons = [
  {
    title: "پوشش مات",
    description: "لمینیت لطیف برای کاهش بازتاب نور",
    price: "+۲۹٬۰۰۰",
  },
  {
    title: "لبه گرد کلاسیک",
    description: "برش دقیق با انحنای همسان برای تمام عکس‌ها",
    price: "رایگان",
  },
  {
    title: "پاکت هدیه پارچه‌ای",
    description: "پارچه نخی با روبان دست‌دوز",
    price: "+۴۹٬۰۰۰",
  },
]

export function ProductPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <NotificationBar />
      <MainHeader />
      <main className="flex-1 pb-24">
        <div className="mx-auto w-full max-w-container px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-foreground-soft" aria-label="مسیر صفحه">
            <Link href="/" className="hover:text-foreground">
              خانه
            </Link>
            <span className="text-accent">/</span>
            <Link href="#" className="hover:text-foreground">
              محصولات چاپ عکس
            </Link>
            <span className="text-accent">/</span>
            <span className="text-foreground">چاپ عکس پولاروید</span>
          </nav>

          <section className="mt-6 grid gap-6 lg:grid-cols-[0.52fr_0.48fr]">
            <ProductMedia />
            <ProductSummary />
          </section>

          <section aria-label="گالری تصاویر محصول" className="mt-10">
            <h2 className="mb-4 text-lg font-semibold text-foreground">نمای نزدیک از چاپ‌ها</h2>
            <div className="flex gap-4 overflow-x-auto rounded-3xl border border-border bg-surface p-4">
              {galleryImages.map((image) => (
                <div
                  key={image.alt}
                  className="relative h-32 w-48 shrink-0 overflow-hidden rounded-2xl border border-border/70 shadow-sm"
                >
                  <Image src={image.src} alt={image.alt} fill sizes="192px" className="object-cover" />
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-6 lg:grid-cols-3">
            {highlightFeatures.map((feature) => (
              <article
                key={feature.title}
                className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-overlay text-accent">
                  <feature.icon className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm leading-7 text-foreground-muted">{feature.description}</p>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-12 rounded-3xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">جزئیات فنی محصول</h2>
            <dl className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {productSpecs.map((spec) => (
                <div key={spec.label} className="flex flex-col gap-1 rounded-2xl bg-surface-muted p-4">
                  <dt className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{spec.label}</dt>
                  <dd className="text-sm text-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-12 grid gap-6 lg:grid-cols-[0.65fr_0.35fr]">
            <div className="space-y-6 rounded-3xl border border-border bg-surface p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">آماده‌سازی و ارسال</h2>
              <ul className="space-y-4 text-sm leading-7 text-foreground-muted">
                <li className="flex gap-3">
                  <Truck className="mt-1 h-5 w-5 text-accent" />
                  <span>
                    سفارش‌های داخل تهران به‌صورت پیک ویژه و شهرستان با پست پیشتاز ارسال می‌شود. بسته‌بندی چندلایه مانع آسیب در
                    مسیر خواهد شد.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Camera className="mt-1 h-5 w-5 text-accent" />
                  <span>
                    قبل از چاپ، تیم ادیت تصویر روشنایی و کنتراست عکس‌ها را بهینه کرده و در صورت نیاز با شما هماهنگی انجام
                    می‌شود.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Brush className="mt-1 h-5 w-5 text-accent" />
                  <span>امکان چاپ سیاه‌وسفید یا فیلترهای رنگی اختصاصی در مرحله آپلود فعال است.</span>
                </li>
              </ul>
            </div>
            <aside className="space-y-4 rounded-3xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">سرویس مشتریان</h3>
              <ul className="space-y-4 text-sm text-foreground-muted">
                <li className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <span>پشتیبانی ۷ روز هفته از ساعت ۹ تا ۲۱</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  <span>مشاوره انتخاب سایز و چیدمان رایگان</span>
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-accent" />
                  <span>باشگاه مشتریان با امتیاز و هدیه تولد</span>
                </li>
              </ul>
              <Link
                href="/track"
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-contrast transition hover:bg-accent-strong"
              >
                پیگیری سفارش‌های قبلی
              </Link>
            </aside>
          </section>

          <ReviewsSection />

          <section className="mt-12 rounded-3xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">سؤالات متداول</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-border bg-surface-muted p-4">
                  <h3 className="text-sm font-semibold text-foreground">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-foreground-muted">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceHighlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-overlay text-accent">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-foreground-muted">{item.description}</p>
              </div>
            ))}
          </section>

          <section className="mt-12 rounded-3xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">گواهی‌ها و مجوزها</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface-muted p-6 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface shadow-sm">
                    <ShieldCheck className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{badge.label}</p>
                  <p className="text-xs text-foreground-muted">{badge.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

function ProductMedia() {
  return (
    <div className="space-y-4 rounded-3xl border border-border bg-surface p-4 shadow-sm">
      <div className="relative overflow-hidden rounded-3xl bg-surface-muted p-6">
        <span className="absolute right-4 top-4 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-contrast shadow-lg">
          ۱۰٪ تخفیف ویژه
        </span>
        <Image
          src="https://images.unsplash.com/photo-1510822739207-928d5433b05e?auto=format&fit=crop&w=900&q=80"
          alt="چاپ‌های پولاروید در دست"
          width={720}
          height={720}
          className="mx-auto h-auto max-w-full rounded-2xl object-cover shadow-xl"
        />
      </div>
      <div className="grid grid-cols-3 gap-3 text-xs text-foreground-muted">
        <div className="flex items-center gap-2 rounded-2xl bg-surface-muted px-3 py-2">
          <ShieldCheck className="h-4 w-4 text-accent" />
          ضمانت کیفیت چاپ
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-surface-muted px-3 py-2">
          <Truck className="h-4 w-4 text-accent" />
          ارسال به سراسر کشور
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-surface-muted px-3 py-2">
          <Camera className="h-4 w-4 text-accent" />
          ادیت تخصصی رایگان
        </div>
      </div>
    </div>
  )
}

function ProductSummary() {
  return (
    <section className="space-y-6 rounded-3xl border border-border bg-surface p-6 shadow-sm" aria-labelledby="product-heading">
      <header className="space-y-3">
        <div className="flex items-center justify-between gap-4 text-sm text-foreground-soft">
          <span className="flex items-center gap-2">
            <Printer className="h-4 w-4 text-accent" />
            کد محصول: AX-PL01
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-accent transition hover:bg-overlay"
              aria-label="اشتراک گذاری"
            >
              <MessageCircle className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-accent transition hover:bg-overlay"
              aria-label="افزودن به لیست علاقه‌مندی"
            >
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>
        <h1 id="product-heading" className="text-2xl font-bold text-foreground">
          چاپ عکس پولاروید با کیفیت استودیویی
        </h1>
        <div className="flex items-center gap-3 text-sm text-foreground-muted">
          <div className="flex items-center text-accent">
            {[...Array(4)].map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" />
            ))}
            <StarHalf className="h-4 w-4 fill-current" />
          </div>
          <span>۴.۷ امتیاز از ۱۲۶ نظر</span>
          <Link href="#reviews" className="text-accent hover:underline">
            مشاهده دیدگاه‌ها
          </Link>
        </div>
        <p className="text-sm leading-7 text-foreground-muted">
          عکس‌های خاطره‌انگیز خود را در قالب کارت‌های پولاروید با حاشیه سفید کلاسیک چاپ کنید. مناسب هدیه، دفتر خاطرات و دکور
          دیواری با امکان افزودن متن کوتاه.
        </p>
      </header>

      <div className="rounded-3xl bg-surface-muted p-5">
        <div className="flex flex-col gap-3 text-sm">
          <span className="text-foreground-soft">شروع قیمت از</span>
          <div className="flex items-baseline gap-3 text-foreground">
            <span className="text-2xl font-bold">۳۵۹٬۰۰۰ تومان</span>
            <span className="rounded-full bg-surface px-3 py-1 text-xs text-accent">پکیج ۲۰ عددی</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-foreground-soft">
            <span className="line-through">۳۹۹٬۰۰۰ تومان</span>
            <span className="font-medium text-accent">۱۰٪ تخفیف خرید آنلاین</span>
          </div>
        </div>
      </div>

      <section aria-label="انتخاب تیراژ" className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">انتخاب تیراژ</h2>
          <span className="text-xs text-foreground-soft">بیشتر بخرید، بیشتر تخفیف بگیرید</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {bundleOptions.map((option, index) => (
            <button
              key={option.label}
              type="button"
              className={`flex flex-col items-start rounded-2xl border px-4 py-3 text-right transition hover:border-accent hover:bg-surface-muted ${
                index === 1 ? "border-accent bg-surface-muted shadow-sm" : "border-border bg-surface"
              }`}
            >
              <span className="text-sm font-semibold text-foreground">{option.label}</span>
              <span className="text-xs text-foreground-muted">{option.price} تومان</span>
              <span className="text-xs text-accent">{option.saving}</span>
            </button>
          ))}
        </div>
      </section>

      <section aria-label="افزودنی‌ها" className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground">افزودنی‌های چاپ</h2>
        <ul className="space-y-3">
          {printAddons.map((addon) => (
            <li key={addon.title} className="flex items-center justify-between rounded-2xl bg-surface-muted px-4 py-3 text-sm text-foreground">
              <div>
                <p className="font-medium">{addon.title}</p>
                <p className="text-xs text-foreground-muted">{addon.description}</p>
              </div>
              <span className="text-xs font-semibold text-accent">{addon.price}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button className="flex-1 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast shadow-sm transition hover:bg-accent-strong">
          افزودن به سبد خرید
        </button>
        <button className="flex-1 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-surface-muted">
          خرید فوری
        </button>
      </div>

      <ul className="grid gap-3 text-sm text-foreground-muted sm:grid-cols-2">
        <li className="flex items-center gap-2 rounded-2xl bg-surface-muted px-3 py-2">
          <ShieldCheck className="h-4 w-4 text-accent" />
          ضمانت بازگشت ۷ روزه
        </li>
        <li className="flex items-center gap-2 rounded-2xl bg-surface-muted px-3 py-2">
          <Truck className="h-4 w-4 text-accent" />
          ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان
        </li>
        <li className="flex items-center gap-2 rounded-2xl bg-surface-muted px-3 py-2">
          <CheckCircle2 className="h-4 w-4 text-accent" />
          بررسی کیفیت توسط تیم کنترل نهایی
        </li>
        <li className="flex items-center gap-2 rounded-2xl bg-surface-muted px-3 py-2">
          <Package className="h-4 w-4 text-accent" />
          بسته‌بندی اختصاصی قابل هدیه دادن
        </li>
      </ul>
    </section>
  )
}

function ReviewsSection() {
  return (
    <section id="reviews" className="mt-12 rounded-3xl border border-border bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">دیدگاه مشتریان</h2>
          <p className="mt-1 text-sm text-foreground-muted">۱۲۶ نظر ثبت شده و میانگین امتیاز ۴.۷ از ۵</p>
        </div>
        <button className="rounded-full border border-accent px-5 py-2 text-sm font-medium text-accent transition hover:bg-surface-muted">
          ثبت نظر جدید
        </button>
      </div>
      <div className="mt-6 space-y-4">
        {reviewData.map((review) => (
          <article key={review.name} className="rounded-3xl border border-border bg-surface-muted p-5">
            <header className="flex flex-wrap items-center gap-3 text-sm text-foreground-muted">
              <span className="font-semibold text-foreground">{review.name}</span>
              <span className="text-foreground-soft">{review.date}</span>
              <span className="flex items-center text-accent">
                {Array.from({ length: Math.floor(review.rating) }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
                {review.rating % 1 ? <StarHalf className="h-4 w-4 fill-current" /> : null}
              </span>
            </header>
            <h3 className="mt-3 text-base font-semibold text-foreground">{review.title}</h3>
            <p className="mt-2 text-sm leading-7 text-foreground-muted">{review.comment}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {review.highlights.map((item) => (
                <li key={item} className="rounded-full bg-surface px-3 py-1 text-xs text-accent">
                  #{item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductPage
