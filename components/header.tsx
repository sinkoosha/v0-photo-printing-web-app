import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageIcon, ShoppingCart, User } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
            <ImageIcon className="h-6 w-6 text-accent-contrast" />
          </div>
          <span className="text-xl font-bold text-foreground">چاپ‌عکس</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            ویژگی‌ها
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            نحوه کار
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            قیمت‌ها
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">سبد خرید</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/profile">
              <User className="h-5 w-5" />
              <span className="sr-only">حساب کاربری</span>
            </Link>
          </Button>
          <Button className="hidden sm:flex" asChild>
            <Link href="/upload">شروع چاپ</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
