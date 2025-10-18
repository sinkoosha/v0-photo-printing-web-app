import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    title: "راهنمای ژست عکاسی پرتره",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "چک‌لیست عکاسی عروسی",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "ایده‌های چاپ سفر",
    image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "راهنمای انتخاب قاب",
    image: "https://images.unsplash.com/photo-1526481280695-3c469fca31ab?auto=format&fit=crop&w=600&q=80",
  },
]

export function BlogSection() {
  return (
    <section className="mx-auto w-full max-w-container px-4 pb-12 md:px-6">
      <div className="mb-6 flex items-center justify-between gap-4 md:mb-8">
        <h3 className="text-xl font-semibold text-foreground md:text-2xl">آخرین مقالات بلاگ</h3>
        <Link
          href="#"
          className="hidden rounded-full border border-border px-4 py-2 text-sm text-foreground-muted transition hover:border-accent hover:text-foreground md:inline-flex"
        >
          مشاهده همه
        </Link>
      </div>
      <div className="grid snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto pb-4 auto-cols-[minmax(240px,1fr)] sm:grid-flow-row sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
        {posts.map((post) => (
          <article
            key={post.title}
            className="group flex h-full snap-center flex-col overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 65vw, 300px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col items-end gap-3 px-4 py-4 text-right">
              <h4 className="text-sm font-semibold text-foreground">{post.title}</h4>
              <Link href="#" className="text-xs font-medium text-accent transition hover:text-accent-strong">
                مطالعه بیشتر
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
