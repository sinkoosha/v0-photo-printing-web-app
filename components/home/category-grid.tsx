import Image from "next/image"

const categories = [
  {
    name: "مگنت چوبی",
    image: "https://images.unsplash.com/photo-1612810806695-30ba01b803c9?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "قاب عکس",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=400&q=80",
    badge: "۳۰٪",
  },
  {
    name: "شاسی عکس",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "چاپ عکس",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "آلبوم مجلسی",
    image: "https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "چاپ پولاروید",
    image: "https://images.unsplash.com/photo-1530026116913-93c3d0a310f7?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "چاپ دیجیتال",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "قاب دیواری",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "تابلو نقاشی",
    image: "https://images.unsplash.com/photo-1520697830682-bbb6d33c92c2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "کارت پستال",
    image: "https://images.unsplash.com/photo-1520186994231-6ea0019d8d56?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "آلبوم عکس",
    image: "https://images.unsplash.com/photo-1586281380386-001caa7d0475?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "چاپ تقویم",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
  },
]

export function CategoryGrid() {
  return (
    <section className="mx-auto w-full max-w-container px-4 pb-12 md:px-6">
      <h3 className="mb-8 text-right text-xl font-semibold text-foreground md:mb-10 md:text-2xl">
        دسته‌بندی‌های محبوب
      </h3>
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <article key={category.name} className="group flex flex-col items-center text-center">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-border/70 bg-surface shadow-soft transition-transform duration-200 before:absolute before:inset-[12%] before:-z-10 before:rounded-full before:bg-[radial-gradient(circle_at_top,hsl(var(--color-surface)/1),hsl(var(--color-surface-muted)/1)_65%,hsl(var(--color-surface-soft)/1))] before:opacity-0 before:transition-opacity before:duration-200 group-hover:-translate-y-1 group-hover:before:opacity-100">
              <span
                className="pointer-events-none absolute -bottom-8 left-1/2 h-3 w-20 -translate-x-1/2 rounded-full bg-accent-muted/60 blur-[8px] transition duration-200 group-hover:scale-110 group-hover:bg-accent-soft/50"
                aria-hidden="true"
              />
              <div className="relative h-24 w-24">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 96px, 120px"
                  className="object-contain"
                />
              </div>
              {category.badge ? (
                <span className="absolute -top-3 -left-3 inline-flex min-w-[3rem] -rotate-6 items-center justify-center rounded-full bg-accent px-2 py-1 text-xs font-semibold text-accent-contrast shadow-soft">
                  {category.badge}
                </span>
              ) : null}
            </div>
            <span className="mt-6 text-sm font-semibold text-foreground md:text-base">
              {category.name}
            </span>
            <span className="mt-2 h-[2px] w-10 rounded-full bg-border" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
