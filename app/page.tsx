import { AlbumBanner } from "@/components/home/album-banner"
import { BlogSection } from "@/components/home/blog-section"
import { CategoryGrid } from "@/components/home/category-grid"
import { HeroBanner } from "@/components/home/hero-banner"
import { MainHeader } from "@/components/home/main-header"
import { Newsletter } from "@/components/home/newsletter"
import { NotificationBar } from "@/components/home/notification-bar"
import { PopularDesigns } from "@/components/home/popular-designs"
import { PromoTiles } from "@/components/home/promo-tiles"
import { SiteFooter } from "@/components/home/site-footer"
import { WhyUs } from "@/components/home/why-us"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <NotificationBar />
      <MainHeader />
      <main className="flex-1 space-y-12 pb-16">
        <HeroBanner />
        <CategoryGrid />
        <PromoTiles />
        <WhyUs />
        <PopularDesigns />
        <BlogSection />
        <AlbumBanner />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  )
}
