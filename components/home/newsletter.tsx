export function Newsletter() {
  return (
    <section className="mx-auto w-full max-w-container px-4 pb-12 md:px-6">
      <div className="flex flex-col items-end gap-4 rounded-3xl border border-border/70 bg-surface p-6 text-right shadow-soft md:flex-row md:items-center md:justify-between md:p-10">
        <div className="max-w-xl space-y-2">
          <h3 className="text-xl font-semibold text-foreground md:text-2xl">برای شما پیشنهادهای هیجان‌انگیزی داریم…</h3>
          <p className="text-sm text-foreground-muted">
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
            className="w-full rounded-full border border-border/70 bg-surface px-4 py-3 text-sm text-foreground-muted shadow-soft placeholder:text-foreground-soft focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast shadow-soft transition hover:bg-accent-strong"
          >
            عضویت
          </button>
        </form>
      </div>
    </section>
  )
}
