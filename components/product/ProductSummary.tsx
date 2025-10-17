"use client";

import React from "react";
import Link from "next/link";
import {
  Heart,
  MessageCircle,
  Printer,
  Star,
  StarHalf,
  ShieldCheck,
  CheckCircle2,
  Truck,
  Package,
} from "lucide-react";

const MATERIALS = {
  matte: { label: "مات (لنستر)", delta: 2000 },
  glossy: { label: "براق (گلاسه)", delta: 0 },
  luster: { label: "لنستر", delta: 3000 },
} as const;
type MaterialKey = keyof typeof MATERIALS;

type SizeOption = { key: string; label: string; delta: number };
const SIZE_OPTIONS: SizeOption[] = [
  { key: "s10", label: "۱۰×۱۰ مربعی", delta: 0 },
  { key: "s10w", label: "۱۰×۱۰ مربعی (حاشیه سفید)", delta: 1500 },
  { key: "s13", label: "۱۳×۱۳ مربعی", delta: 3500 },
  { key: "s13w", label: "۱۳×۱۳ مربعی (حاشیه سفید)", delta: 5000 },
  { key: "s15", label: "۱۵×۱۵ مربعی", delta: 7000 },
  { key: "s15w", label: "۱۵×۱۵ مربعی (حاشیه سفید)", delta: 8500 },
  { key: "r20", label: "۲۰×۲۰ عکس", delta: 13000 },
  { key: "r2030", label: "۲۰×۳۰ عکس", delta: 21000 },
] as const;

const BASE_UNIT = 17500;
const toman = (n: number) => Number(n || 0).toLocaleString("fa-IR");
const sizeDelta = (k: string) =>
  SIZE_OPTIONS.find((s) => s.key === k)?.delta ?? 0;

export default function ProductSummary() {
  const [material, setMaterial] = React.useState<MaterialKey>("glossy");
  const [size, setSize] = React.useState<string>("s10");

  const unitPrice = React.useMemo(
    () => BASE_UNIT + (MATERIALS[material]?.delta ?? 0) + sizeDelta(size),
    [material, size]
  );

  return (
    <section
      dir="rtl"
      className="space-y-5 rounded-3xl border border-[#E9E1DA] bg-white p-6 shadow-sm"
      aria-labelledby="product-heading"
    >
      {/* اکشن‌های سریع + کد محصول */}
      <div className="flex items-center justify-between gap-4 text-sm text-[#9C8C7F]">
        <span className="flex items-center gap-2">
          <Printer className="h-4 w-4 text-[#C78555]" />
          کد محصول: AX-PL01
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[#E9E1DA] text-[#C78555] transition hover:bg-[#F1E4D7]"
            aria-label="اشتراک گذاری"
          >
            <MessageCircle className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[#E9E1DA] text-[#C78555] transition hover:bg-[#F1E4D7]"
            aria-label="افزودن به علاقه‌مندی"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* عنوان + امتیاز + بج اعتماد */}
      <header className="space-y-2 text-right">
        <h1 id="product-heading" className="text-2xl font-bold text-[#3B2F2A]">
          چاپ عکس ابعاد مربعی
        </h1>

        <div className="flex items-center gap-3 text-sm text-[#5A4A40]">
          <div className="flex items-center text-[#C78555]">
            {Array.from({ length: 3 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
            <StarHalf className="h-4 w-4 fill-current" />
          </div>
          <span>۳٫۶ از ۵</span>
          <span className="text-[#9C8C7F]">| ۷۸ دیدگاه</span>
          <Link href="#reviews" className="text-[#C78555] hover:underline">
            مشاهده دیدگاه‌ها
          </Link>
        </div>

        <div className="inline-flex items-center gap-2 rounded-2xl border border-[#E9E1DA] bg-[#F9F3ED] px-3 py-1 text-xs text-[#3B2F2A]">
          <span className="text-[#C78555]">♥</span>
          ضمانت چاپ عکس‌پرینت
        </div>
      </header>

      {/* توضیح کوتاه / نکات کلیدی */}
      <div className="space-y-2 text-right text-sm leading-7 text-[#5A4A40]">
        <p>
          در عکس‌های مربعی سایزها دارای نسبت یکسان هستند و نیاز به چرخش عکس
          نیست.
        </p>
        <p>سایزهای قابل سفارش: ۱۰×۱۰ | ۱۳×۱۳ | ۱۵×۱۵</p>
        <p>در دو مدل بدون حاشیه و با حاشیه سفید</p>
        <p>نوع کاغذ: مات (Luster) و براق (Glossy)</p>
      </div>

      {/* قیمت */}
      <div className="rounded-2xl bg-[#F9F3ED] p-5">
        <div className="flex flex-col gap-2 text-right text-sm">
          <span className="text-[#9C8C7F]">هزینه چاپ (بر اساس انتخاب شما)</span>
          <div className="flex items-baseline justify-end gap-3 text-[#3B2F2A]">
            <span className="text-2xl font-bold">{toman(unitPrice)}</span>
            <span className="text-sm text-[#5A4A40]">تومان</span>
          </div>
          <p className="text-xs text-[#9C8C7F]">
            جنس: {MATERIALS[material].label} • ابعاد:{" "}
            {SIZE_OPTIONS.find((s) => s.key === size)?.label ?? ""}
          </p>
        </div>
      </div>

      {/* انتخاب جنس کاغذ */}
      <section aria-label="انتخاب جنس کاغذ" className="space-y-3 text-right">
        <h2 className="text-sm font-semibold text-[#3B2F2A]">
          انتخاب جنس (گلاسه/لنستر/مات)
        </h2>
        <div
          role="radiogroup"
          aria-label="جنس کاغذ"
          className="grid grid-cols-3 gap-2"
        >
          {(Object.keys(MATERIALS) as MaterialKey[]).map((key) => {
            const selected = key === material;
            return (
              <button
                key={key}
                role="radio"
                aria-checked={selected}
                onClick={() => setMaterial(key)}
                className={`rounded-2xl border px-3 py-2 text-sm transition ${
                  selected
                    ? "border-[#C78555] bg-[#F9F3ED] shadow-sm"
                    : "border-[#E9E1DA] bg-white hover:border-[#C78555]"
                }`}
              >
                <span className="text-[#3B2F2A]">{MATERIALS[key].label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* انتخاب ابعاد */}
      <section aria-label="انتخاب ابعاد" className="space-y-3 text-right">
        <h2 className="text-sm font-semibold text-[#3B2F2A]">
          انتخاب ابعاد (سانتی‌متر)
        </h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {SIZE_OPTIONS.map((opt) => {
            const selected = size === opt.key;
            return (
              <button
                key={opt.key}
                role="radio"
                aria-checked={selected}
                onClick={() => setSize(opt.key)}
                className={`rounded-2xl border px-4 py-2 text-sm transition ${
                  selected
                    ? "border-[#C78555] bg-[#F9F3ED] shadow-sm"
                    : "border-[#E9E1DA] bg-white hover:border-[#C78555]"
                }`}
              >
                <span className="text-[#3B2F2A]">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* اطلاعات و بولت‌ها داخل باکس هزینه (نمونه) */}
      <section className="rounded-2xl border border-[#E9E1DA] bg-white p-4 text-right">
        <h3 className="text-base font-semibold text-[#3B2F2A]">جزئیات سفارش</h3>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-[#5A4A40]">
          <li className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#C78555]" />
            ضمانت کیفیت بالای چاپ + ۷ روز تضمین بازگشت
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#C78555]" />
            آماده‌سازی پس از نهایی‌سازی طراحی، ۱ روز کاری
          </li>
          <li className="flex items-center gap-2">
            <Package className="h-4 w-4 text-[#C78555]" />
            بسته‌بندی ایمن برای ارسال
          </li>
        </ul>
      </section>

      {/* CTAها – با radius یکنواخت */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button className="flex-1 rounded-2xl bg-[#F1E4D7] px-6 py-3 text-sm font-semibold text-[#3B2F2A] shadow-sm transition hover:bg-[#E9D7C7] text-right">
          <span>عکس پلاس A+ (آسان)</span>
          <span className="block text-xs font-normal text-[#9C8C7F]">
            چیدمان و روتوش توسط سرویس عکس پلاس
          </span>
        </button>
        <button className="flex-1 rounded-2xl bg-[#0f0f0f] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black/80 text-right">
          <span>ادیتور آنلاین (پیشرفته)</span>
          <span className="block text-xs font-normal text-white/70">
            طراحی و چیدمان توسط خودم در ادیتور
          </span>
        </button>
      </div>

      {/* بولت‌های اعتماد پایانی */}
      <ul className="grid gap-3 text-right text-sm text-[#5A4A40] sm:grid-cols-2">
        <li className="flex items-center gap-2 rounded-2xl bg-[#F9F3ED] px-3 py-2">
          <ShieldCheck className="h-4 w-4 text-[#C78555]" />
          ضمانت بازگشت ۷ روزه
        </li>
        <li className="flex items-center gap-2 rounded-2xl bg-[#F9F3ED] px-3 py-2">
          <Truck className="h-4 w-4 text-[#C78555]" />
          ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان
        </li>
      </ul>
    </section>
  );
}
