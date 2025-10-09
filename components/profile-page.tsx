"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  BadgeCheck,
  Camera,
  CreditCard,
  Download,
  Mail,
  MapPin,
  Package,
  Phone,
  Settings,
  ShieldCheck,
  Star,
} from "lucide-react"

const recentOrders = [
  {
    id: "ORD-9824",
    date: "۲۳ اردیبهشت ۱۴۰۳",
    items: "۴ چاپ ۲۰×۳۰ + آلبوم",
    status: "در حال آماده‌سازی",
    eta: "ارسال تا ۲ روز کاری",
  },
  {
    id: "ORD-9651",
    date: "۱۲ فروردین ۱۴۰۳",
    items: "۱۰ چاپ ۱۳×۱۸",
    status: "تحویل داده شد",
    eta: "تحویل به پیک در ۲۱ فروردین",
  },
]

const savedAddresses = [
  {
    label: "منزل",
    details: "تهران، سعادت‌آباد، کوچه ۲۱، پلاک ۸، واحد ۴",
    contact: "۰۹۱۲۱۲۳۴۵۶۷",
  },
  {
    label: "دفتر کار",
    details: "تهران، ولیعصر، خیابان پارسا، پلاک ۴۳، طبقه ۳",
    contact: "۰۹۳۵۴۳۲۱۱۹۸",
  },
]

export function ProfilePage() {
  return (
    <div className="min-h-screen bg-muted/10">
      <div className="bg-gradient-to-b from-primary/10 via-primary/5 to-transparent border-b border-border/40">
        <div className="container py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  ف
                </div>
                <div>
                  <h1 className="text-3xl font-bold">فاطمه رضایی</h1>
                  <p className="text-muted-foreground">عضو از ۱۴۰۱ · پلن حرفه‌ای چاپ عکس</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="default" className="gap-2">
                  <Settings className="h-4 w-4" />
                  مدیریت حساب
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  دانلود فاکتورهای اخیر
                </Button>
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  <BadgeCheck className="h-4 w-4" />
                  تأیید شده
                </div>
              </div>
            </div>
            <Card className="p-5 bg-background/80 backdrop-blur-sm shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  fatemeh@example.com
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  ۰۹۱۲۱۲۳۴۵۶۷
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  تهران، ایران
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <main className="container py-10 space-y-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          <div className="space-y-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">جزییات حساب</h2>
                  <p className="text-sm text-muted-foreground">پیکربندی اطلاعات شخصی و تنظیمات امنیتی حساب</p>
                </div>
                <Button variant="outline" size="sm">
                  ویرایش پروفایل
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-dashed border-border/60 p-4">
                  <p className="text-xs text-muted-foreground mb-1">آخرین ورود</p>
                  <p className="font-medium">۱۲ خرداد ۱۴۰۳ · تهران</p>
                </div>
                <div className="rounded-lg border border-dashed border-border/60 p-4">
                  <p className="text-xs text-muted-foreground mb-1">روش ورود فعال</p>
                  <p className="font-medium">رمز یکبارمصرف پیامکی + رمز عبور</p>
                </div>
                <div className="rounded-lg border border-dashed border-border/60 p-4">
                  <p className="text-xs text-muted-foreground mb-1">فضای گالری</p>
                  <p className="font-medium">۱٫۸ گیگابایت از ۵ گیگابایت</p>
                </div>
                <div className="rounded-lg border border-dashed border-border/60 p-4">
                  <p className="text-xs text-muted-foreground mb-1">اشتراک فعال</p>
                  <p className="font-medium">پلن حرفه‌ای تا ۲۹ اسفند ۱۴۰۳</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">سفارش‌های اخیر</h2>
                  <p className="text-sm text-muted-foreground">پیگیری وضعیت تولید و ارسال چاپ‌ها</p>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Package className="h-4 w-4" />
                  مشاهده همه
                </Button>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="rounded-lg border border-border/60 p-4">
                    <div className="flex flex-wrap items-center gap-3 justify-between">
                      <div>
                        <p className="font-semibold">{order.id}</p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                      </div>
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                        {order.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{order.items}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{order.eta}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">ترجیحات چاپ</h2>
                  <p className="text-sm text-muted-foreground">پیش‌فرض‌های اعمال‌شده روی سفارش‌های شما</p>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Camera className="h-4 w-4" />
                  مدیریت پریست‌ها
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border/60 p-4 space-y-1">
                  <p className="text-xs text-muted-foreground">تصحیح رنگ</p>
                  <p className="font-medium">پروفایل زنده (Vivid)</p>
                  <p className="text-xs text-muted-foreground">مناسب چاپ‌های گلاسه و آلبوم</p>
                </div>
                <div className="rounded-lg border border-border/60 p-4 space-y-1">
                  <p className="text-xs text-muted-foreground">حاشیه دلخواه</p>
                  <p className="font-medium">قاب سفید ۸ میلی‌متری</p>
                  <p className="text-xs text-muted-foreground">جهت قاب‌بندی هنری آماده ارسال</p>
                </div>
                <div className="rounded-lg border border-border/60 p-4 space-y-1">
                  <p className="text-xs text-muted-foreground">ویرایش خودکار</p>
                  <p className="font-medium">بهینه‌سازی چهره فعال</p>
                  <p className="text-xs text-muted-foreground">نویزگیری و تنظیم نور پرتره</p>
                </div>
                <div className="rounded-lg border border-border/60 p-4 space-y-1">
                  <p className="text-xs text-muted-foreground">نوع بسته‌بندی</p>
                  <p className="font-medium">بسته هدیه با روبان</p>
                  <p className="text-xs text-muted-foreground">اضافه به صورت پیش‌فرض برای مناسبت‌ها</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <div>
                  <h2 className="text-lg font-semibold">باشگاه مشتریان</h2>
                  <p className="text-sm text-muted-foreground">امتیازهای قابل استفاده برای سفارش بعدی</p>
                </div>
              </div>
              <div className="rounded-lg border border-dashed border-border/60 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">امتیاز فعلی</span>
                  <span className="text-xl font-bold">۳٬۸۵۰</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">تخفیف در دسترس</span>
                  <span className="font-medium text-primary">۱۵٪ روی چاپ‌های بعدی</span>
                </div>
                <Button size="sm" className="w-full">
                  تبدیل به کد تخفیف
                </Button>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h2 className="text-lg font-semibold">آدرس‌های ذخیره‌شده</h2>
                    <p className="text-sm text-muted-foreground">برای ارسال سریع‌تر سفارش‌ها</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  افزودن آدرس
                </Button>
              </div>
              <div className="space-y-3">
                {savedAddresses.map((address) => (
                  <div key={address.label} className="rounded-lg border border-border/60 p-4 space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{address.label}</span>
                      <span className="text-xs text-muted-foreground">{address.contact}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{address.details}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-primary" />
                <div>
                  <h2 className="text-lg font-semibold">روش‌های پرداخت</h2>
                  <p className="text-sm text-muted-foreground">کارت‌های تایید شده برای پرداخت سریع</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg border border-border/60 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">کارت بانک ملت</span>
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">**** **** **** ۵۴۳۲ · اعتبار تا ۰۴/۱۴۰۵</p>
                </div>
                <div className="rounded-lg border border-dashed border-border/60 p-4 text-center text-xs text-muted-foreground">
                  کارت جدیدی اضافه کنید تا پرداخت‌های بعدی سریع‌تر انجام شود
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

