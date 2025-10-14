import Image from "next/image"
import Link from "next/link"

export function WhyUs() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pb-12 md:px-6">
      <div className="grid gap-8 rounded-[32px] border border-[#E9E1DA] bg-white/90 p-6 shadow-sm md:grid-cols-[1.05fr_1fr] md:p-10">
        <div className="relative order-2 h-64 overflow-hidden rounded-[28px] bg-[#F3E6D9] md:order-1 md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1529429617124-aee11184611f?auto=format&fit=crop&w=1000&q=80"
            alt="دستگاهی برای چاپ حرفه‌ای عکس"
            fill
            sizes="(max-width: 768px) 100vw, 520px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-end gap-4 text-right md:order-2">
          <h3 className="text-2xl font-semibold text-[#3B2F2A]">چون مهم هستیم…</h3>
          <p className="text-sm leading-7 text-[#5A4A40] md:text-base">
            از لحظه انتخاب تصویر تا لحظه تحویل، همراهت هستیم. تیم ما با استفاده از چاپگرهای حرفه‌ای، کنترل کیفیت دقیق و بسته‌بندی
            هنرمندانه، تجربه‌ای لذت‌بخش از چاپ عکس را خلق می‌کند.
          </p>
          <Link
            href="#"
            className="rounded-full bg-[#3B2F2A] px-6 py-2 text-sm font-medium text-white transition hover:bg-[#2F241F]"
          >
            بیشتر بخوانید
          </Link>
        </div>
      </div>
    </section>
  )
}
