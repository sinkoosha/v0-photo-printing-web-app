import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";

import { MainHeader } from "@/components/home/main-header";
import { NotificationBar } from "@/components/home/notification-bar";
import { SiteFooter } from "@/components/home/site-footer";
import ProductSummary from "./ProductSummary";

const productSpecs = [
  { label: "نوع چاپ", value: "دیجیتال با کیفیت ۳۰۰dpi" },
  { label: "ابعاد هر عکس", value: "۱۰ در ۱۲ سانتی‌متر" },
  { label: "جنس کاغذ", value: "فتویی براق + لمینیت نرم" },
  { label: "زمان آماده‌سازی", value: "۲ تا ۳ روز کاری" },
  { label: "حداقل تیراژ", value: "۱۰ عدد" },
  { label: "قابلیت شخصی‌سازی", value: "فیلتر رنگی و متن پایین عکس" },
  { label: "بسته‌بندی", value: "جعبه مقوایی با روکش مات" },
  { label: "ارسال", value: "پست پیشتاز یا پیک شهری" },
];

const highlightFeatures = [
  {
    title: "کاغذ مخصوص پولاروید",
    description:
      "برش گرد با حاشیه سفید کلاسیک و پوشش ضد اثر انگشت برای ماندگاری بیشتر.",
    icon: Printer,
  },
  {
    title: "ویرایش رنگ پیشرفته",
    description:
      "نور، کنتراست و رنگ‌ها قبل از چاپ تنظیم می‌شود تا بهترین خروجی را داشته باشید.",
    icon: Palette,
  },
  {
    title: "بسته‌بندی هدیه‌ای",
    description:
      "هر سفارش داخل باکس دست‌ساز و روبان‌بندی شده برای هدیه دادن آماده می‌شود.",
    icon: Package,
  },
];

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
];

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
];

const serviceHighlights = [
  {
    icon: ShieldCheck,
    title: "ضمانت کیفیت چاپ",
    description:
      "اگر چاپ‌ها دارای خط یا لکه باشند، بدون قید و شرط مجدد چاپ می‌کنیم.",
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
];

const trustBadges = [
  { label: "نماد اعتماد", description: "در حال بروزرسانی" },
  { label: "ساماندهی", description: "مجوز رسانه‌های دیجیتال" },
  { label: "عضو اتحادیه", description: "عکاسان و چاپخانه‌داران" },
];

const bundleOptions = [
  { label: "۱۰ عدد", price: "۱۹۹٬۰۰۰", saving: "۵٪ تخفیف" },
  { label: "۲۰ عدد", price: "۳۵۹٬۰۰۰", saving: "۱۰٪ تخفیف" },
  { label: "۴۰ عدد", price: "۶۵۹٬۰۰۰", saving: "۱۵٪ تخفیف" },
  { label: "۷۰ عدد", price: "۹۹۹٬۰۰۰", saving: "۲۰٪ تخفیف" },
];

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
];

export function ProductPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6EFE9]">
      <NotificationBar />
      <MainHeader />
      <main className="flex-1 pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
          <nav
            className="flex items-center gap-2 text-sm text-[#9C8C7F]"
            aria-label="مسیر صفحه"
          >
            <Link href="/" className="hover:text-[#3B2F2A]">
              خانه
            </Link>
            <span className="text-[#C78555]">/</span>
            <Link href="#" className="hover:text-[#3B2F2A]">
              محصولات چاپ عکس
            </Link>
            <span className="text-[#C78555]">/</span>
            <span className="text-[#3B2F2A]">چاپ عکس پولاروید</span>
          </nav>

          <section className="mt-6 grid gap-6 lg:grid-cols-2 items-start">
            {/* ستون مدیا */}
            <div className="lg:self-stretch">
              {/* هم‌قد ردیف گرید */}
              <div className="lg:sticky lg:top-24">
                <ProductMedia />
              </div>
            </div>

            {/* ستون سامری */}
            <div className="lg:self-start">
              <ProductSummary />
            </div>
          </section>

          <section className="mt-12 grid gap-6 lg:grid-cols-3">
            {highlightFeatures.map((feature) => (
              <article
                key={feature.title}
                className="flex flex-col gap-4 rounded-3xl border border-[#E9E1DA] bg-white p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1E4D7] text-[#C78555]">
                  <feature.icon className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#3B2F2A]">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#5A4A40]">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-12 rounded-3xl border border-[#E9E1DA] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#3B2F2A]">
              جزئیات فنی محصول
            </h2>
            <dl className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {productSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex flex-col gap-1 rounded-2xl bg-[#F9F3ED] p-4"
                >
                  <dt className="text-xs font-medium uppercase tracking-[0.2em] text-[#C78555]">
                    {spec.label}
                  </dt>
                  <dd className="text-sm text-[#3B2F2A]">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-12 grid gap-6 lg:grid-cols-[0.65fr_0.35fr]">
            <div className="space-y-6 rounded-3xl border border-[#E9E1DA] bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[#3B2F2A]">
                آماده‌سازی و ارسال
              </h2>
              <ul className="space-y-4 text-sm leading-7 text-[#5A4A40]">
                <li className="flex gap-3">
                  <Truck className="mt-1 h-5 w-5 text-[#C78555]" />
                  <span>
                    سفارش‌های داخل تهران به‌صورت پیک ویژه و شهرستان با پست
                    پیشتاز ارسال می‌شود. بسته‌بندی چندلایه مانع آسیب در مسیر
                    خواهد شد.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Camera className="mt-1 h-5 w-5 text-[#C78555]" />
                  <span>
                    قبل از چاپ، تیم ادیت تصویر روشنایی و کنتراست عکس‌ها را بهینه
                    کرده و در صورت نیاز با شما هماهنگی انجام می‌شود.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Brush className="mt-1 h-5 w-5 text-[#C78555]" />
                  <span>
                    امکان چاپ سیاه‌وسفید یا فیلترهای رنگی اختصاصی در مرحله آپلود
                    فعال است.
                  </span>
                </li>
              </ul>
            </div>
            <aside className="space-y-4 rounded-3xl border border-[#E9E1DA] bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#3B2F2A]">
                سرویس مشتریان
              </h3>
              <ul className="space-y-4 text-sm text-[#5A4A40]">
                <li className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#C78555]" />
                  <span>پشتیبانی ۷ روز هفته از ساعت ۹ تا ۲۱</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-[#C78555]" />
                  <span>مشاوره انتخاب سایز و چیدمان رایگان</span>
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-[#C78555]" />
                  <span>باشگاه مشتریان با امتیاز و هدیه تولد</span>
                </li>
              </ul>
              <Link
                href="/track"
                className="inline-flex items-center justify-center rounded-full bg-[#C78555] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#B97447]"
              >
                پیگیری سفارش‌های قبلی
              </Link>
            </aside>
          </section>

          <ReviewsSection />

          <section className="mt-12 rounded-3xl border border-[#E9E1DA] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#3B2F2A]">
              سؤالات متداول
            </h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-[#E9E1DA] bg-[#F9F3ED] p-4"
                >
                  <h3 className="text-sm font-semibold text-[#3B2F2A]">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5A4A40]">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#E9E1DA] bg-white p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1E4D7] text-[#C78555]">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#3B2F2A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5A4A40]">
                  {item.description}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-12 rounded-3xl border border-[#E9E1DA] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#3B2F2A]">
              گواهی‌ها و مجوزها
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-[#E9E1DA] bg-[#F9F3ED] p-6 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <ShieldCheck className="h-8 w-8 text-[#C78555]" />
                  </div>
                  <p className="text-sm font-semibold text-[#3B2F2A]">
                    {badge.label}
                  </p>
                  <p className="text-xs text-[#5A4A40]">{badge.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProductMedia() {
  return (
    <div className="space-y-4 rounded-3xl border border-[#E9E1DA] bg-white p-4 shadow-sm">
      <div className="relative overflow-hidden rounded-3xl bg-[#F9F3ED] p-6">
        <span className="absolute right-4 top-4 rounded-full bg-[#C78555] px-4 py-1 text-xs font-semibold text-white shadow-lg">
          ۱۰٪ تخفیف ویژه
        </span>
        <Image
          src="https://images.unsplash.com/photo-1510822739207-928d5433b05e?auto=format&fit=crop&w=900&q=80"
          alt="چاپ‌های پولاروید در دست"
          width={720}
          height={720}
          className="mx-auto h-auto max-w-full rounded-[2rem] object-cover shadow-xl"
        />
      </div>
      <div className="grid grid-cols-3 gap-3 text-xs text-[#5A4A40]">
        <div className="flex items-center gap-2 rounded-2xl bg-[#F9F3ED] px-3 py-2">
          <ShieldCheck className="h-4 w-4 text-[#C78555]" />
          ضمانت کیفیت چاپ
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-[#F9F3ED] px-3 py-2">
          <Truck className="h-4 w-4 text-[#C78555]" />
          ارسال به سراسر کشور
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-[#F9F3ED] px-3 py-2">
          <Camera className="h-4 w-4 text-[#C78555]" />
          ادیت تخصصی رایگان
        </div>
      </div>
    </div>
  );
}

// function ProductSummary() {
//   return (
//     <section
//       className="space-y-5 rounded-3xl border border-[#E9E1DA] bg-white p-6 shadow-sm"
//       aria-labelledby="product-heading"
//     >
//       <header className="space-y-3">
//         <div className="flex items-center justify-between gap-4 text-sm text-[#9C8C7F]">
//           <span className="flex items-center gap-2">
//             <Printer className="h-4 w-4 text-[#C78555]" />
//             کد محصول: AX-PL01
//           </span>
//           <div className="flex items-center gap-3">
//             <button
//               type="button"
//               className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E1DA] text-[#C78555] transition hover:bg-[#F1E4D7]"
//               aria-label="اشتراک گذاری"
//             >
//               <MessageCircle className="h-4 w-4" />
//             </button>
//             <button
//               type="button"
//               className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E1DA] text-[#C78555] transition hover:bg-[#F1E4D7]"
//               aria-label="افزودن به لیست علاقه‌مندی"
//             >
//               <Heart className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//         <h1 id="product-heading" className="text-2xl font-bold text-[#3B2F2A]">
//           چاپ عکس پولاروید با کیفیت استودیویی
//         </h1>
//         <div className="flex items-center gap-3 text-sm text-[#5A4A40]">
//           <div className="flex items-center text-[#C78555]">
//             {[...Array(4)].map((_, index) => (
//               <Star key={index} className="h-4 w-4 fill-current" />
//             ))}
//             <StarHalf className="h-4 w-4 fill-current" />
//           </div>
//           <span>۴.۷ امتیاز از ۱۲۶ نظر</span>
//           <Link href="#reviews" className="text-[#C78555] hover:underline">
//             مشاهده دیدگاه‌ها
//           </Link>
//         </div>
//         <p className="text-sm leading-7 text-[#5A4A40]">
//           عکس‌های خاطره‌انگیز خود را در قالب کارت‌های پولاروید با حاشیه سفید
//           کلاسیک چاپ کنید. مناسب هدیه، دفتر خاطرات و دکور دیواری با امکان افزودن
//           متن کوتاه.
//         </p>
//       </header>

//       <div className="rounded-3xl bg-[#F9F3ED] p-5">
//         <div className="flex flex-col gap-3 text-sm">
//           <span className="text-[#9C8C7F]">شروع قیمت از</span>
//           <div className="flex items-baseline gap-3 text-[#3B2F2A]">
//             <span className="text-2xl font-bold">۳۵۹٬۰۰۰ تومان</span>
//             <span className="rounded-full bg-white px-3 py-1 text-xs text-[#C78555]">
//               پکیج ۲۰ عددی
//             </span>
//           </div>
//           <div className="flex items-center gap-3 text-xs text-[#9C8C7F]">
//             <span className="line-through">۳۹۹٬۰۰۰ تومان</span>
//             <span className="font-medium text-[#C78555]">
//               ۱۰٪ تخفیف خرید آنلاین
//             </span>
//           </div>
//         </div>
//       </div>

//       <section aria-label="انتخاب تیراژ" className="space-y-3">
//         <div className="flex items-center justify-between">
//           <h2 className="text-sm font-semibold text-[#3B2F2A]">انتخاب تیراژ</h2>
//           <span className="text-xs text-[#9C8C7F]">
//             بیشتر بخرید، بیشتر تخفیف بگیرید
//           </span>
//         </div>
//         <div className="grid gap-2 sm:grid-cols-2">
//           {bundleOptions.map((option, index) => (
//             <button
//               key={option.label}
//               type="button"
//               className={`flex flex-col items-start rounded-2xl border px-4 py-3 text-right transition hover:border-[#C78555] hover:bg-[#F9F3ED] ${
//                 index === 1
//                   ? "border-[#C78555] bg-[#F9F3ED] shadow-sm"
//                   : "border-[#E9E1DA] bg-white"
//               }`}
//             >
//               <span className="text-sm font-semibold text-[#3B2F2A]">
//                 {option.label}
//               </span>
//               <span className="text-xs text-[#5A4A40]">
//                 {option.price} تومان
//               </span>
//               <span className="text-xs text-[#C78555]">{option.saving}</span>
//             </button>
//           ))}
//         </div>
//       </section>

//       <section aria-label="افزودنی‌ها" className="space-y-3">
//         <h2 className="text-sm font-semibold text-[#3B2F2A]">
//           افزودنی‌های چاپ
//         </h2>
//         <ul className="space-y-3">
//           {printAddons.map((addon) => (
//             <li
//               key={addon.title}
//               className="flex items-center justify-between rounded-2xl bg-[#F9F3ED] px-4 py-3 text-sm text-[#3B2F2A]"
//             >
//               <div>
//                 <p className="font-medium">{addon.title}</p>
//                 <p className="text-xs text-[#5A4A40]">{addon.description}</p>
//               </div>
//               <span className="text-xs font-semibold text-[#C78555]">
//                 {addon.price}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </section>

//       <div className="flex flex-col gap-3 sm:flex-row">
//         <button className="flex-1 rounded-full bg-[#C78555] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#B97447]">
//           افزودن به سبد خرید
//         </button>
//         <button className="flex-1 rounded-full border border-[#C78555] px-6 py-3 text-sm font-semibold text-[#C78555] transition hover:bg-[#F9F3ED]">
//           خرید فوری
//         </button>
//       </div>

//       <ul className="grid gap-3 text-sm text-[#5A4A40] sm:grid-cols-2">
//         <li className="flex items-center gap-2 rounded-2xl bg-[#F9F3ED] px-3 py-2">
//           <ShieldCheck className="h-4 w-4 text-[#C78555]" />
//           ضمانت بازگشت ۷ روزه
//         </li>
//         <li className="flex items-center gap-2 rounded-2xl bg-[#F9F3ED] px-3 py-2">
//           <Truck className="h-4 w-4 text-[#C78555]" />
//           ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان
//         </li>
//         <li className="flex items-center gap-2 rounded-2xl bg-[#F9F3ED] px-3 py-2">
//           <CheckCircle2 className="h-4 w-4 text-[#C78555]" />
//           بررسی کیفیت توسط تیم کنترل نهایی
//         </li>
//         <li className="flex items-center gap-2 rounded-2xl bg-[#F9F3ED] px-3 py-2">
//           <Package className="h-4 w-4 text-[#C78555]" />
//           بسته‌بندی اختصاصی قابل هدیه دادن
//         </li>
//       </ul>
//     </section>
//   );
// }

function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="mt-12 rounded-3xl border border-[#E9E1DA] bg-white p-6 shadow-sm"
    >
      <div className="flex flex-col gap-4 border-b border-[#E9E1DA] pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#3B2F2A]">
            دیدگاه مشتریان
          </h2>
          <p className="mt-1 text-sm text-[#5A4A40]">
            ۱۲۶ نظر ثبت شده و میانگین امتیاز ۴.۷ از ۵
          </p>
        </div>
        <button className="rounded-full border border-[#C78555] px-5 py-2 text-sm font-medium text-[#C78555] transition hover:bg-[#F9F3ED]">
          ثبت نظر جدید
        </button>
      </div>
      <div className="mt-6 space-y-4">
        {reviewData.map((review) => (
          <article
            key={review.name}
            className="rounded-3xl border border-[#E9E1DA] bg-[#F9F3ED] p-5"
          >
            <header className="flex flex-wrap items-center gap-3 text-sm text-[#5A4A40]">
              <span className="font-semibold text-[#3B2F2A]">
                {review.name}
              </span>
              <span className="text-[#9C8C7F]">{review.date}</span>
              <span className="flex items-center text-[#C78555]">
                {Array.from({ length: Math.floor(review.rating) }).map(
                  (_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  )
                )}
                {review.rating % 1 ? (
                  <StarHalf className="h-4 w-4 fill-current" />
                ) : null}
              </span>
            </header>
            <h3 className="mt-3 text-base font-semibold text-[#3B2F2A]">
              {review.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#5A4A40]">
              {review.comment}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {review.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white px-3 py-1 text-xs text-[#C78555]"
                >
                  #{item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductPage;
