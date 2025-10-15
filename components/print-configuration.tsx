"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ImageIcon, Minus, Plus, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface PrintSize {
  id: string
  name: string
  dimensions: string
  price: number
  popular?: boolean
}

interface PrintMaterial {
  id: string
  name: string
  description: string
  priceMultiplier: number
}

interface EnhancementOption {
  id: string
  name: string
  description: string
  priceAdjustment: number
}

interface PackagingOption {
  id: string
  name: string
  description: string
  price: number
}

const printSizes: PrintSize[] = [
  { id: "10x15", name: "۱۰×۱۵ سانتی‌متر", dimensions: "10×15 cm", price: 15000 },
  { id: "13x18", name: "۱۳×۱۸ سانتی‌متر", dimensions: "13×18 cm", price: 25000 },
  { id: "20x30", name: "۲۰×۳۰ سانتی‌متر", dimensions: "20×30 cm", price: 45000, popular: true },
  { id: "30x40", name: "۳۰×۴۰ سانتی‌متر", dimensions: "30×40 cm", price: 85000 },
  { id: "40x60", name: "۴۰×۶۰ سانتی‌متر", dimensions: "40×60 cm", price: 150000 },
]

const printMaterials: PrintMaterial[] = [
  { id: "glossy", name: "کاغذ گلاسه", description: "براق و مقاوم - مناسب آلبوم", priceMultiplier: 1 },
  { id: "matte", name: "کاغذ مات", description: "ضد انعکاس - مناسب قاب", priceMultiplier: 1.2 },
  { id: "canvas", name: "بوم نقاشی", description: "حرفه‌ای - مناسب دکوراسیون", priceMultiplier: 2.5 },
]

const colorCorrections: EnhancementOption[] = [
  {
    id: "none",
    name: "بدون تصحیح",
    description: "اعمال هیچگونه تنظیم خودکار",
    priceAdjustment: 0,
  },
  {
    id: "smart",
    name: "اصلاح هوشمند",
    description: "تنظیم نور و رنگ بر اساس محتوای عکس",
    priceAdjustment: 4000,
  },
  {
    id: "studio",
    name: "ادیت استودیو",
    description: "بازبینی متخصص چاپ برای خروجی پرتره",
    priceAdjustment: 9500,
  },
]

const borderStyles: EnhancementOption[] = [
  {
    id: "borderless",
    name: "بدون حاشیه",
    description: "چاپ لب به لب مناسب آلبوم",
    priceAdjustment: 0,
  },
  {
    id: "classic",
    name: "قاب سفید ۵ میلی‌متری",
    description: "فضای مناسب قاب‌بندی هنری",
    priceAdjustment: 2500,
  },
  {
    id: "gallery",
    name: "فریم گالری مشکی",
    description: "کنتراست بالا برای نمایشگاه",
    priceAdjustment: 6500,
  },
]

const packagingOptions: PackagingOption[] = [
  {
    id: "standard",
    name: "بسته‌بندی استاندارد",
    description: "پاکت مقاوم با پوشش ضد رطوبت",
    price: 0,
  },
  {
    id: "flat",
    name: "پک فلت آرت",
    description: "تخته محافظ و تسمه کاغذی برای چاپ‌های بزرگ",
    price: 18000,
  },
  {
    id: "gift",
    name: "بسته هدیه",
    description: "جعبه سخت، کاغذ کرپ و روبان",
    price: 35000,
  },
]

export function PrintConfiguration() {
  const [selectedSize, setSelectedSize] = useState<string>("20x30")
  const [selectedMaterial, setSelectedMaterial] = useState<string>("glossy")
  const [quantity, setQuantity] = useState<number>(1)
  const [selectedCorrection, setSelectedCorrection] = useState<string>("smart")
  const [selectedBorder, setSelectedBorder] = useState<string>("classic")
  const [selectedPackaging, setSelectedPackaging] = useState<string>("flat")

  const currentSize = printSizes.find((s) => s.id === selectedSize)
  const currentMaterial = printMaterials.find((m) => m.id === selectedMaterial)
  const currentCorrection = colorCorrections.find((c) => c.id === selectedCorrection)
  const currentBorder = borderStyles.find((b) => b.id === selectedBorder)
  const currentPackaging = packagingOptions.find((p) => p.id === selectedPackaging)

  const basePrice = currentSize?.price || 0
  const materialMultiplier = currentMaterial?.priceMultiplier || 1
  const perPrintBase = basePrice * materialMultiplier
  const perPrintExtras = (currentCorrection?.priceAdjustment || 0) + (currentBorder?.priceAdjustment || 0)
  const perPrintTotal = perPrintBase + perPrintExtras
  const packagingPrice = currentPackaging?.price || 0
  const totalPrice = perPrintTotal * quantity + packagingPrice

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price)
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
            <Link href="/upload">بازگشت به آپلود</Link>
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">تنظیمات چاپ</h1>
            <p className="text-muted-foreground">سایز، متریال و تعداد چاپ خود را انتخاب کنید</p>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-8">
            <div className="space-y-8">
              {/* Size Selection */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">انتخاب سایز</h2>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="grid gap-4">
                  {printSizes.map((size) => (
                    <div key={size.id} className="relative">
                      <RadioGroupItem value={size.id} id={size.id} className="peer sr-only" />
                      <Label
                        htmlFor={size.id}
                        className="flex items-center justify-between p-4 rounded-lg border-2 border-border cursor-pointer hover:bg-accent/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <span className="font-semibold">{size.name}</span>
                            <span className="text-sm text-muted-foreground">{size.dimensions}</span>
                          </div>
                          {size.popular && (
                            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                              محبوب
                            </span>
                          )}
                        </div>
                        <span className="font-bold text-lg">{formatPrice(size.price)} تومان</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </Card>

              {/* Material Selection */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">انتخاب متریال</h2>
                <RadioGroup value={selectedMaterial} onValueChange={setSelectedMaterial} className="grid gap-4">
                  {printMaterials.map((material) => (
                    <div key={material.id} className="relative">
                      <RadioGroupItem value={material.id} id={material.id} className="peer sr-only" />
                      <Label
                        htmlFor={material.id}
                        className="flex items-center justify-between p-4 rounded-lg border-2 border-border cursor-pointer hover:bg-accent/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all"
                      >
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold">{material.name}</span>
                          <span className="text-sm text-muted-foreground">{material.description}</span>
                        </div>
                        {material.priceMultiplier > 1 && (
                          <span className="text-sm text-muted-foreground">
                            +{Math.round((material.priceMultiplier - 1) * 100)}%
                          </span>
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </Card>

              {/* Advanced Enhancements */}
              <Card className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">تنظیمات پیشرفته</h2>
                  <p className="text-sm text-muted-foreground">گزینه‌های حرفه‌ای چاپ برای کنترل بیشتر خروجی</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-semibold mb-2">تصحیح رنگ</h3>
                    <RadioGroup
                      value={selectedCorrection}
                      onValueChange={setSelectedCorrection}
                      className="grid gap-3"
                    >
                      {colorCorrections.map((option) => (
                        <div key={option.id} className="relative">
                          <RadioGroupItem value={option.id} id={`correction-${option.id}`} className="peer sr-only" />
                          <Label
                            htmlFor={`correction-${option.id}`}
                            className="flex items-center justify-between gap-4 rounded-lg border-2 border-border p-4 transition-all hover:bg-accent/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                          >
                            <div>
                              <p className="font-medium">{option.name}</p>
                              <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                            </div>
                            {option.priceAdjustment > 0 ? (
                              <span className="text-xs text-muted-foreground">
                                +{formatPrice(option.priceAdjustment)} تومان / هر چاپ
                              </span>
                            ) : (
                              <span className="text-xs text-muted-foreground">بدون هزینه اضافه</span>
                            )}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-2">حاشیه چاپ</h3>
                    <RadioGroup value={selectedBorder} onValueChange={setSelectedBorder} className="grid gap-3">
                      {borderStyles.map((option) => (
                        <div key={option.id} className="relative">
                          <RadioGroupItem value={option.id} id={`border-${option.id}`} className="peer sr-only" />
                          <Label
                            htmlFor={`border-${option.id}`}
                            className="flex items-center justify-between gap-4 rounded-lg border-2 border-border p-4 transition-all hover:bg-accent/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                          >
                            <div>
                              <p className="font-medium">{option.name}</p>
                              <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                            </div>
                            {option.priceAdjustment > 0 ? (
                              <span className="text-xs text-muted-foreground">
                                +{formatPrice(option.priceAdjustment)} تومان / هر چاپ
                              </span>
                            ) : (
                              <span className="text-xs text-muted-foreground">بدون هزینه اضافه</span>
                            )}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-2">نوع بسته‌بندی</h3>
                    <RadioGroup value={selectedPackaging} onValueChange={setSelectedPackaging} className="grid gap-3">
                      {packagingOptions.map((option) => (
                        <div key={option.id} className="relative">
                          <RadioGroupItem value={option.id} id={`packaging-${option.id}`} className="peer sr-only" />
                          <Label
                            htmlFor={`packaging-${option.id}`}
                            className="flex items-center justify-between gap-4 rounded-lg border-2 border-border p-4 transition-all hover:bg-accent/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                          >
                            <div>
                              <p className="font-medium">{option.name}</p>
                              <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                            </div>
                            {option.price > 0 ? (
                              <span className="text-xs text-muted-foreground">
                                +{formatPrice(option.price)} تومان / سفارش
                              </span>
                            ) : (
                              <span className="text-xs text-muted-foreground">شامل در قیمت پایه</span>
                            )}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </Card>

              {/* Quantity Selection */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">تعداد</h2>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 text-center">
                    <span className="text-3xl font-bold">{quantity}</span>
                    <span className="text-muted-foreground mr-2">عدد</span>
                  </div>
                  <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-24 h-fit">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">خلاصه سفارش</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">سایز:</span>
                    <span className="font-medium">{currentSize?.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">متریال:</span>
                    <span className="font-medium">{currentMaterial?.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">تعداد:</span>
                    <span className="font-medium">{quantity} عدد</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">تصحیح رنگ:</span>
                    <span className="font-medium">{currentCorrection?.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">حاشیه:</span>
                    <span className="font-medium">{currentBorder?.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">بسته‌بندی:</span>
                    <span className="font-medium">{currentPackaging?.name}</span>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">قیمت پایه هر چاپ:</span>
                      <span>{formatPrice(perPrintBase)} تومان</span>
                    </div>
                    {perPrintExtras > 0 && (
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">افزودنی‌های هر چاپ:</span>
                        <span>{formatPrice(perPrintExtras)} تومان</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">تعداد چاپ:</span>
                      <span>×{quantity}</span>
                    </div>
                    {packagingPrice > 0 && (
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">بسته‌بندی ویژه:</span>
                        <span>{formatPrice(packagingPrice)} تومان</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">جمع کل:</span>
                      <span className="text-2xl font-bold text-primary">{formatPrice(totalPrice)} تومان</span>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full gap-2" asChild>
                  <Link href="/cart">
                    <ShoppingCart className="h-5 w-5" />
                    افزودن به سبد خرید
                  </Link>
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  هزینه ارسال در مرحله پرداخت محاسبه می‌شود
                </p>
              </Card>

              <Card className="p-6 mt-4 bg-primary/5 border-primary/20">
                <h3 className="font-semibold mb-3 text-sm">تخفیف ویژه</h3>
                <p className="text-sm text-muted-foreground">با سفارش بیش از ۱۰ عدد، از ۱۵٪ تخفیف ویژه بهره‌مند شوید!</p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
