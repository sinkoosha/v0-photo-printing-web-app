import Image from "next/image"
import Link from "next/link"

const promos = [
  {
    title: "طراحی و چاپ آلبوم عکس",
    action: "مشاهده بیشتر",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "چیدمان و چاپ عکس‌ها",
    action: "مشاهده بیشتر",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
]

export function PromoTiles() {
  return (
    <section className="mx-auto w-full max-w-container px-4 pb-12 md:px-6">
      <div className="grid gap-6 md:grid-cols-2">
        {promos.map((promo) => (
          <article
            key={promo.title}
            className="flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-border/70 bg-surface-soft/80 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft sm:flex-row"
          >
            <div className="flex flex-col items-start gap-4 text-right sm:text-right">
              <h3 className="text-xl font-semibold text-foreground">{promo.title}</h3>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/90 px-4 py-2 text-sm font-medium text-accent transition hover:border-accent/30 hover:bg-surface"
              >
                {promo.action}
                <span aria-hidden>↗</span>
              </Link>
            </div>
            <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-border/60 bg-surface/70 sm:h-32 sm:w-40">
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                sizes="(max-width: 768px) 60vw, 260px"
                className="object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
