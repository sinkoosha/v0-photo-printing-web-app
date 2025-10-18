import Image from "next/image"

const designs = [
  {
    name: "قاب گیاهی مینیمال",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "قاب کارتونی قلبی",
    image: "https://images.unsplash.com/photo-1478476868527-002ae3f3e159?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "پرتره نور طبیعی",
    image: "https://images.unsplash.com/photo-1549388604-817d15aa0110?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "ترکیب‌بندی هنری",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "قاب کلاژ سفر",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "چیدمان سه‌تایی",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
  },
]

export function PopularDesigns() {
  return (
    <section className="mx-auto w-full max-w-container px-4 pb-12 md:px-6">
      <div className="mb-6 flex items-center justify-between gap-4 md:mb-8">
        <h3 className="text-xl font-semibold text-foreground md:text-2xl">پرفروش‌ترین طرح‌ها</h3>
        <button
          type="button"
          className="hidden rounded-full border border-border px-4 py-2 text-sm text-foreground-muted transition hover:border-accent hover:text-foreground md:inline-flex"
        >
          مشاهده همه
        </button>
      </div>
      <div className="grid snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto pb-4 auto-cols-[minmax(220px,1fr)] sm:grid-flow-row sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
        {designs.map((design) => (
          <article
            key={design.name}
            className="group flex h-full snap-center flex-col overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={design.image}
                alt={design.name}
                fill
                sizes="(max-width: 768px) 60vw, 360px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 items-center justify-end px-4 py-4 text-right">
              <h4 className="text-sm font-medium text-foreground">{design.name}</h4>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
