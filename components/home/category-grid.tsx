import Image from "next/image"

const categories = [
  {
    name: "قاب عکس",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=400&q=80",
    badge: "۳۰٪",
  },
  {
    name: "چاپ عکس",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "آلبوم عکس",
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
    name: "کتاب پستال",
    image: "https://images.unsplash.com/photo-1520186994231-6ea0019d8d56?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "چاپ تقویم",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
  },
]

export function CategoryGrid() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pb-12 md:px-6">
      <h3 className="mb-6 text-right text-xl font-semibold text-[#3B2F2A] md:mb-8 md:text-2xl">
        دسته‌بندی‌های محبوب
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group relative flex flex-col items-center rounded-3xl border border-[#E9E1DA] bg-white/80 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="96px"
                className="object-cover"
              />
              {category.badge ? (
                <span className="absolute -top-2 -left-2 rounded-full bg-[#C78555] px-2 py-1 text-xs font-semibold text-white">
                  {category.badge}
                </span>
              ) : null}
            </div>
            <span className="text-sm font-medium text-[#3B2F2A]">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
