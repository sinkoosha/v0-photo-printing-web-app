"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageIcon, CreditCard, Truck, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function CheckoutPage() {
  const [step, setStep] = useState<"info" | "payment" | "success">("info")
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [isProcessing, setIsProcessing] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price)
  }

  const handleSubmitInfo = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handleSubmitPayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 210000 }),
      })

      const paymentIntent = await response.json()

      if (paymentIntent.id) {
        // Simulate payment processing
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setStep("success")
      }
    } catch (error) {
      console.error("[v0] Payment error:", error)
    } finally {
      setIsProcessing(false)
    }
  }

  if (step === "success") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircle2 className="h-10 w-10 text-green-500" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">سفارش شما ثبت شد!</h1>
          <p className="text-muted-foreground mb-6">
            کد پیگیری سفارش شما: <span className="font-mono font-bold">CH-۱۲۳۴۵۶</span>
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            سفارش شما با موفقیت ثبت شد و در حال پردازش است. لینک پیگیری سفارش به ایمیل شما ارسال شد.
          </p>
          <div className="space-y-3">
            <Button className="w-full" asChild>
              <Link href="/orders/CH-123456">مشاهده وضعیت سفارش</Link>
            </Button>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/">بازگشت به صفحه اصلی</Link>
            </Button>
          </div>
        </Card>
      </div>
    )
  }

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
            <Link href="/cart">بازگشت به سبد خرید</Link>
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">تکمیل خرید</h1>
            <div className="flex items-center gap-4 mt-4">
              <div className={`flex items-center gap-2 ${step === "info" ? "text-primary" : "text-muted-foreground"}`}>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step === "info" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  ۱
                </div>
                <span className="text-sm font-medium">اطلاعات ارسال</span>
              </div>
              <div className="flex-1 h-px bg-border" />
              <div
                className={`flex items-center gap-2 ${step === "payment" ? "text-primary" : "text-muted-foreground"}`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step === "payment" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  ۲
                </div>
                <span className="text-sm font-medium">پرداخت</span>
              </div>
            </div>
          </div>

          {step === "info" && (
            <form onSubmit={handleSubmitInfo}>
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-6">اطلاعات تماس</h2>
                  <div className="grid gap-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">نام</Label>
                        <Input id="firstName" placeholder="نام خود را وارد کنید" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">نام خانوادگی</Label>
                        <Input id="lastName" placeholder="نام خانوادگی خود را وارد کنید" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">شماره تماس</Label>
                      <Input id="phone" type="tel" placeholder="۰۹۱۲۳۴۵۶۷۸۹" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">ایمیل</Label>
                      <Input id="email" type="email" placeholder="example@email.com" required />
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-6">آدرس ارسال</h2>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">آدرس کامل</Label>
                      <Textarea id="address" placeholder="آدرس کامل خود را وارد کنید" rows={3} required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">شهر</Label>
                        <Input id="city" placeholder="تهران" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">کد پستی</Label>
                        <Input id="postalCode" placeholder="۱۲۳۴۵۶۷۸۹۰" required />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-6">روش ارسال</h2>
                  <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                    <div className="space-y-3">
                      <div className="relative">
                        <RadioGroupItem value="standard" id="standard" className="peer sr-only" />
                        <Label
                          htmlFor="standard"
                          className="flex items-center justify-between p-4 rounded-lg border-2 border-border cursor-pointer hover:bg-accent/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                        >
                          <div className="flex items-center gap-3">
                            <Truck className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <div className="font-semibold">ارسال عادی</div>
                              <div className="text-sm text-muted-foreground">۳ تا ۵ روز کاری</div>
                            </div>
                          </div>
                          <span className="font-bold">{formatPrice(30000)} تومان</span>
                        </Label>
                      </div>
                      <div className="relative">
                        <RadioGroupItem value="express" id="express" className="peer sr-only" />
                        <Label
                          htmlFor="express"
                          className="flex items-center justify-between p-4 rounded-lg border-2 border-border cursor-pointer hover:bg-accent/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                        >
                          <div className="flex items-center gap-3">
                            <Truck className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <div className="font-semibold">ارسال سریع</div>
                              <div className="text-sm text-muted-foreground">۱ تا ۲ روز کاری</div>
                            </div>
                          </div>
                          <span className="font-bold">{formatPrice(60000)} تومان</span>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </Card>

                <Button type="submit" size="lg" className="w-full">
                  ادامه به پرداخت
                </Button>
              </div>
            </form>
          )}

          {step === "payment" && (
            <form onSubmit={handleSubmitPayment}>
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-6">اطلاعات پرداخت</h2>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">شماره کارت</Label>
                      <Input id="cardNumber" placeholder="۱۲۳۴-۵۶۷۸-۹۰۱۲-۳۴۵۶" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">تاریخ انقضا</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV2</Label>
                        <Input id="cvv" placeholder="۱۲۳" type="password" maxLength={4} required />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">خلاصه سفارش</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">جمع جزء:</span>
                      <span>{formatPrice(180000)} تومان</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">هزینه ارسال:</span>
                      <span>{formatPrice(30000)} تومان</span>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">جمع کل:</span>
                        <span className="text-2xl font-bold text-primary">{formatPrice(210000)} تومان</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Button type="submit" size="lg" className="w-full gap-2" disabled={isProcessing}>
                  <CreditCard className="h-5 w-5" />
                  {isProcessing ? "در حال پردازش..." : "پرداخت نهایی"}
                </Button>

                <Card className="p-4 bg-muted/50 border-muted">
                  <p className="text-xs text-muted-foreground text-center">
                    برای فعال‌سازی پرداخت واقعی، اتصال Stripe را از بخش Connect در نوار کناری اضافه کنید
                  </p>
                </Card>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  )
}
