"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageIcon, Search } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function TrackOrderPage() {
  const [orderId, setOrderId] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (orderId.trim()) {
      router.push(`/orders/${orderId.trim()}`)
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
            <Link href="/">بازگشت به صفحه اصلی</Link>
          </Button>
        </div>
      </header>

      <main className="container py-16 md:py-24">
        <div className="mx-auto max-w-md">
          <Card className="p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                  <Search className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-2">پیگیری سفارش</h1>
              <p className="text-foreground-muted">کد پیگیری سفارش خود را وارد کنید</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="orderId">کد سفارش</Label>
                <Input
                  id="orderId"
                  placeholder="مثال: CH-123456"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <Search className="h-5 w-5" />
                پیگیری سفارش
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-foreground-muted text-center">
                کد پیگیری سفارش در ایمیل تایید برای شما ارسال شده است
              </p>
            </div>
          </Card>

          <Card className="p-6 mt-6 bg-accent/5 border-accent/20">
            <h3 className="font-semibold mb-2 text-sm">نیاز به کمک دارید؟</h3>
            <p className="text-sm text-foreground-muted mb-4">
              در صورت بروز مشکل در پیگیری سفارش، با پشتیبانی ما تماس بگیرید
            </p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              تماس با پشتیبانی
            </Button>
          </Card>
        </div>
      </main>
    </div>
  )
}
