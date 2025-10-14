export function Newsletter() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pb-12 md:px-6">
      <div className="flex flex-col items-end gap-4 rounded-[32px] border border-[#E9E1DA] bg-white/90 p-6 text-right shadow-sm md:flex-row md:items-center md:justify-between md:p-10">
        <div className="max-w-xl space-y-2">
          <h3 className="text-xl font-semibold text-[#3B2F2A] md:text-2xl">برای شما پیشنهادهای هیجان‌انگیزی داریم…</h3>
          <p className="text-sm text-[#5A4A40]">
            با عضویت در خبرنامه، اولین نفری باش که از تخفیف‌ها و محصولات جدید باخبر می‌شود.
          </p>
        </div>
        <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row" action="#" method="post">
          <label htmlFor="newsletter-email" className="sr-only">
            ایمیل شما
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="ایمیل شما…"
            className="w-full rounded-full border border-[#E9E1DA] bg-white px-4 py-3 text-sm text-[#5A4A40] placeholder:text-[#9C8C7F] focus:border-[#C78555] focus:outline-none focus:ring-2 focus:ring-[#C78555]/30"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-full bg-[#C78555] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#B87445]"
          >
            عضویت
          </button>
        </form>
      </div>
    </section>
  )
}
