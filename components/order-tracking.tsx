"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageIcon, Package, Truck, CheckCircle2, Clock, MapPin } from "lucide-react"
import Link from "next/link"

interface OrderTrackingProps {
  orderId: string
}

interface OrderStatus {
  id: string
  label: string
  description: string
  timestamp: string
  completed: boolean
  icon: React.ElementType
}

const orderStatuses: OrderStatus[] = [
  {
    id: "placed",
    label: "ثبت سفارش",
    description: "سفارش شما با موفقیت ثبت شد",
    timestamp: "۱۴۰۳/۱۲/۱۵ - ۱۴:۳۰",
    completed: true,
    icon: CheckCircle2,
  },
  {
    id: "processing",
    label: "در حال پردازش",
    description: "سفارش شما در حال چاپ است",
    timestamp: "۱۴۰۳/۱۲/۱۶ - ۱۰:۱۵",
    completed: true,
    icon: Package,
  },
  {
    id: "shipped",
    label: "ارسال شده",
    description: "سفارش شما به پست تحویل داده شد",
    timestamp: "۱۴۰۳/۱۲/۱۷ - ۰۹:۰۰",
    completed: true,
    icon: Truck,
  },
  {
    id: "delivered",
    label: "تحویل داده شده",
    description: "سفارش به دست شما رسید",
    timestamp: "تخمین: ۱۴۰۳/۱۲/۱۹",
    completed: false,
    icon: MapPin,
  },
]

const mockOrder = {
  id: "CH-123456",
  date: "۱۴۰۳/۱۲/۱۵",
  total: 210000,
  items: [
    {
      id: "1",
      imageUrl: "/placeholder.svg?height=200&width=200",
      size: "۲۰×۳۰ سانتی‌متر",
      material: "کاغذ گلاسه",
      quantity: 2,
    },
    {
      id: "2",
      imageUrl: "/placeholder.svg?height=200&width=200",
      size: "۱۰×۱۵ سانتی‌متر",
      material: "کاغذ مات",
      quantity: 5,
    },
  ],
  shippingAddress: "تهران، خیابان ولیعصر، پلاک ۱۲۳",
  trackingNumber: "۱۲۳۴۵۶۷۸۹۰",
}

export function OrderTracking({ orderId }: OrderTrackingProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price)
  }

  const currentStatusIndex = orderStatuses.findIndex((status) => !status.completed)

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <ImageIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">چاپ‌عکس</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/">بازگشت به صفحه اصلی</Link>
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">پیگیری سفارش</h1>
            <p className="text-muted-foreground">
              کد سفارش: <span className="font-mono font-bold">{mockOrder.id}</span>
            </p>
          </div>

          <div className="space-y-6">
            {/* Order Status Timeline */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">وضعیت سفارش</h2>
              <div className="space-y-6">
                {orderStatuses.map((status, index) => {
                  const Icon = status.icon
                  const isLast = index === orderStatuses.length - 1

                  return (
                    <div key={status.id} className="relative">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-full ${
                              status.completed
                                ? "bg-primary text-primary-foreground"
                                : index === currentStatusIndex
                                  ? "bg-primary/20 text-primary"
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <Icon className="h-6 w-6" />
                          </div>
                          {!isLast && (
                            <div className={`w-0.5 h-16 mt-2 ${status.completed ? "bg-primary" : "bg-border"}`} />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex items-start justify-between mb-1">
                            <h3 className="font-semibold">{status.label}</h3>
                            {status.completed ? (
                              <span className="text-sm text-muted-foreground">{status.timestamp}</span>
                            ) : index === currentStatusIndex ? (
                              <span className="flex items-center gap-1 text-sm text-primary">
                                <Clock className="h-4 w-4" />
                                در حال انجام
                              </span>
                            ) : (
                              <span className="text-sm text-muted-foreground">{status.timestamp}</span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{status.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            {/* Shipping Info */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">اطلاعات ارسال</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">آدرس تحویل:</span>
                  <span className="text-left">{mockOrder.shippingAddress}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">کد رهگیری پست:</span>
                  <span className="font-mono">{mockOrder.trackingNumber}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">تاریخ سفارش:</span>
                  <span>{mockOrder.date}</span>
                </div>
              </div>
            </Card>

            {/* Order Items */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">محصولات سفارش</h2>
              <div className="space-y-4">
                {mockOrder.items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.imageUrl || "/placeholder.svg"}
                        alt="پیش‌نمایش"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.size}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{item.material}</p>
                      <p className="text-sm text-muted-foreground">تعداد: {item.quantity} عدد</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">جمع کل:</span>
                  <span className="text-2xl font-bold text-primary">{formatPrice(mockOrder.total)} تومان</span>
                </div>
              </div>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="flex-1 bg-transparent" asChild>
                <Link href="/">سفارش جدید</Link>
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                دانلود فاکتور
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                تماس با پشتیبانی
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
