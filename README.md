# چاپ‌عکس (ChapAks) - Photo Printing Web App

سرویس آنلاین چاپ عکس با کیفیت بالا

## ویژگی‌ها

- 🎨 طراحی مدرن و تاریک با پشتیبانی کامل RTL و فارسی
- 📸 آپلود و ویرایش تصاویر با ابزارهای حرفه‌ای
- 🖼️ انتخاب سایز و متریال چاپ
- 🛒 سبد خرید و سیستم تخفیف
- 💳 پرداخت امن (آماده برای اتصال Stripe)
- 📦 پیگیری سفارش با تایم‌لاین دقیق
- 📱 طراحی ریسپانسیو برای موبایل

## نصب و راه‌اندازی

\`\`\`bash
npm install
npm run dev
\`\`\`

## اتصال Stripe

برای فعال‌سازی پرداخت واقعی:

1. از بخش **Connect** در نوار کناری v0، اتصال Stripe را اضافه کنید
2. متغیرهای محیطی زیر به صورت خودکار اضافه می‌شوند:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

3. کد پرداخت در `app/api/create-payment-intent/route.ts` آماده است و با اتصال Stripe فعال می‌شود

## اتصال دیتابیس (اختیاری)

برای ذخیره‌سازی سفارشات و کاربران:

1. از بخش **Connect**، یکی از موارد زیر را اضافه کنید:
   - Supabase (پیشنهادی)
   - Neon
   
2. اسکریپت‌های SQL برای ایجاد جداول در پوشه `scripts/` قرار دارند

## ساختار پروژه

\`\`\`
app/
├── page.tsx              # صفحه اصلی
├── upload/               # آپلود و ویرایش تصاویر
├── configure/            # تنظیمات چاپ
├── cart/                 # سبد خرید
├── checkout/             # پرداخت
├── orders/[orderId]/     # پیگیری سفارش
└── track/                # جستجوی سفارش

components/
├── header.tsx
├── hero.tsx
├── features.tsx
├── pricing.tsx
├── upload-interface.tsx
├── photo-editor.tsx
├── print-configuration.tsx
├── cart-page.tsx
├── checkout-page.tsx
└── order-tracking.tsx
\`\`\`

## تکنولوژی‌ها

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Font**: Vazirmatn (فونت فارسی)
- **Icons**: Lucide React
- **Payment**: Stripe (آماده برای اتصال)

## یادداشت‌های توسعه

- تمام قیمت‌ها به تومان هستند
- فرمت اعداد فارسی با `Intl.NumberFormat('fa-IR')`
- طراحی کامل RTL با `dir="rtl"` در layout
- رنگ‌بندی و فضا: تمام توکن‌ها در `styles/theme/tokens.ts` تعریف شده‌اند؛ در JSX از رنگ یا فاصله هگز/دلخواه استفاده نکنید.
- ESLint مانع استفاده از مقدارهای هگز در فایل‌های TSX می‌شود تا استایل‌ها فقط از توکن‌ها خوانده شوند.

---

ساخته شده با ❤️ توسط v0
