"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageIcon, Trash2, ShoppingBag, Tag } from "lucide-react"
import Link from "next/link"

interface CartItem {
  id: string
  imageUrl: string
  size: string
  material: string
  quantity: number
  price: number
}

const mockCartItems: CartItem[] = [
  {
    id: "1",
    imageUrl: "/placeholder.svg?height=200&width=200",
    size: "۲۰×۳۰ سانتی‌متر",
    material: "کاغذ گلاسه",
    quantity: 2,
    price: 45000,
  },
  {
    id: "2",
    imageUrl: "/placeholder.svg?height=200&width=200",
    size: "۱۰×۱۵ سانتی‌متر",
    material: "کاغذ مات",
    quantity: 5,
    price: 18000,
  },
]

export function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems)
  const [discountCode, setDiscountCode] = useState("")
  const [appliedDiscount, setAppliedDiscount] = useState(0)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = subtotal > 200000 ? 0 : 30000
  const discount = (subtotal * appliedDiscount) / 100
  const total = subtotal + shippingCost - discount

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price)
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const applyDiscount = () => {
    if (discountCode === "WELCOME10") {
      setAppliedDiscount(10)
    } else if (discountCode === "SUMMER20") {
      setAppliedDiscount(20)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <ImageIcon className="h-6 w-6 text-accent-contrast" />
            </div>
            <span className="text-xl font-bold text-foreground">چاپ‌عکس</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/configure">بازگشت به تنظیمات</Link>
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">سبد خرید</h1>
            <p className="text-foreground-muted">بررسی و تکمیل سفارش شما</p>
          </div>

          {cartItems.length === 0 ? (
            <Card className="p-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-surface-muted">
                  <ShoppingBag className="h-10 w-10 text-foreground-muted" />
                </div>
                <h2 className="text-xl font-semibold">سبد خرید شما خالی است</h2>
                <p className="text-foreground-muted">برای شروع، عکس‌های خود را آپلود کنید</p>
                <Button asChild className="mt-4">
                  <Link href="/upload">شروع چاپ</Link>
                </Button>
              </div>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-[1fr_400px] gap-8">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="p-4">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-surface-muted flex-shrink-0">
                        <img
                          src={item.imageUrl || "/placeholder.svg"}
                          alt="پیش‌نمایش"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">{item.size}</h3>
                            <p className="text-sm text-foreground-muted">{item.material}</p>
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-foreground-muted">تعداد: {item.quantity} عدد</span>
                          <span className="font-bold">{formatPrice(item.price * item.quantity)} تومان</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="lg:sticky lg:top-24 h-fit space-y-4">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-6">خلاصه سفارش</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground-muted">جمع جزء:</span>
                      <span>{formatPrice(subtotal)} تومان</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground-muted">هزینه ارسال:</span>
                      <span>{shippingCost === 0 ? "رایگان" : `${formatPrice(shippingCost)} تومان`}</span>
                    </div>
                    {appliedDiscount > 0 && (
                        <div className="flex justify-between text-sm text-success">
                        <span>تخفیف ({appliedDiscount}%):</span>
                        <span>-{formatPrice(discount)} تومان</span>
                      </div>
                    )}
                    <div className="pt-3 border-t border-border">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">جمع کل:</span>
                        <span className="text-2xl font-bold text-accent">{formatPrice(total)} تومان</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <Label htmlFor="discount">کد تخفیف</Label>
                    <div className="flex gap-2">
                      <Input
                        id="discount"
                        placeholder="کد تخفیف خود را وارد کنید"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                      />
                      <Button variant="outline" onClick={applyDiscount} className="bg-transparent">
                        <Tag className="h-4 w-4" />
                      </Button>
                    </div>
                    {appliedDiscount > 0 && <p className="text-xs text-success">کد تخفیف با موفقیت اعمال شد!</p>}
                  </div>

                  <Button size="lg" className="w-full" asChild>
                    <Link href="/checkout">ادامه به پرداخت</Link>
                  </Button>

                  {shippingCost > 0 && (
                    <p className="text-xs text-foreground-muted text-center mt-4">
                      با خرید بیش از ۲۰۰,۰۰۰ تومان، ارسال رایگان!
                    </p>
                  )}
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
