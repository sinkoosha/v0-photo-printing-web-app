"use client";

import { useMemo, useState } from "react";

import {
  ProfileEditForm,
  type ProfileFormData,
} from "@/components/profile-edit-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BadgeCheck,
  Camera,
  CreditCard,
  Download,
  Globe,
  Mail,
  MapPin,
  Package,
  PencilLine,
  Phone,
  Settings,
  ShieldCheck,
  Star,
} from "lucide-react";

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
];

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
];

const defaultProfile: ProfileFormData = {
  fullName: "فاطمه رضایی",
  studioName: "استودیو فریم طلایی",
  jobTitle: "عکاس پرتره و مستند",
  memberSince: "۱۴۰۱",
  plan: "پلن حرفه‌ای چاپ عکس",
  bio: "عکاس پرتره با تمرکز بر چاپ‌های هنری و آلبوم‌های شخصی‌سازی‌شده برای مشتریان وفادار.",
  email: "fatemeh@example.com",
  phone: "۰۹۱۲۱۲۳۴۵۶۷",
  secondaryPhone: "۰۹۳۵۴۳۲۱۱۹۸",
  location: "تهران، ایران",
  website: "fatemehphoto.ir",
  shippingNote: "در صورت عدم حضور با واحد کناری هماهنگ شود.",
  colorProfile: "پروفایل زنده (Vivid)",
  borderStyle: "قاب سفید ۸ میلی‌متری",
  autoEnhance: "بهینه‌سازی چهره فعال",
  packaging: "بسته هدیه با روبان",
  printNotes: "قبل از ارسال، هر سفارش از نظر لکه و کج‌شدن بررسی شود.",
  notifications: {
    emailUpdates: true,
    smsUpdates: true,
    promoOffers: false,
  },
};

export function ProfilePage() {
  const [profileData, setProfileData] =
    useState<ProfileFormData>(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [lastSavedMessage, setLastSavedMessage] = useState<string | null>(null);

  const notificationSummary = useMemo(() => {
    const channels: string[] = [];
    if (profileData.notifications.emailUpdates) channels.push("ایمیل");
    if (profileData.notifications.smsUpdates) channels.push("پیامک");
    if (profileData.notifications.promoOffers) channels.push("پیشنهادهای ویژه");
    return channels.length ? channels.join("، ") : "هیچ‌کدام";
  }, [profileData.notifications]);

  const handleProfileSave = (updated: ProfileFormData) => {
    setProfileData(updated);
    const timeLabel = new Date().toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setLastSavedMessage(`آخرین بروزرسانی در ساعت ${timeLabel}`);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-muted/10">
      <div className="border-b border-border/40 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent">
        <div className="container py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {profileData.fullName.charAt(0)}
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{profileData.fullName}</h1>
                  <p className="text-muted-foreground">
                    عضو از {profileData.memberSince} · {profileData.plan}
                  </p>
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
              <p className="max-w-2xl text-sm text-muted-foreground">
                {profileData.bio}
              </p>
            </div>
            <Card className="p-5 shadow-sm backdrop-blur-sm">
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 text-foreground">
                  <Camera className="h-4 w-4 text-primary" />
                  <span>
                    {profileData.jobTitle} · {profileData.studioName}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {profileData.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {profileData.phone}
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Phone className="h-3 w-3 text-primary/70" />
                  <span className="text-muted-foreground">
                    پشتیبان: {profileData.secondaryPhone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {profileData.location}
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  {profileData.website}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <main className="container space-y-8 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          <div className="space-y-6">
            <Card className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">جزییات حساب</h2>
                  <p className="text-sm text-muted-foreground">
                    پیکربندی اطلاعات شخصی و تنظیمات امنیتی حساب
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => setIsEditing((prev) => !prev)}
                >
                  <PencilLine className="h-4 w-4" />
                  {isEditing ? "بستن فرم" : "ویرایش پروفایل"}
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-dashed border-border/60 p-4">
                  <p className="mb-1 text-xs text-muted-foreground">
                    آخرین ورود
                  </p>
                  <p className="font-medium">۱۲ خرداد ۱۴۰۳ · تهران</p>
                </div>
                <div className="rounded-lg border border-dashed border-border/60 p-4">
                  <p className="mb-1 text-xs text-muted-foreground">
                    روش ورود فعال
                  </p>
                  <p className="font-medium">رمز یکبارمصرف پیامکی + رمز عبور</p>
                </div>
                <div className="rounded-lg border border-dashed border-border/60 p-4">
                  <p className="mb-1 text-xs text-muted-foreground">
                    فضای گالری
                  </p>
                  <p className="font-medium">۱٫۸ گیگابایت از ۵ گیگابایت</p>
                </div>
                <div className="rounded-lg border border-dashed border-border/60 p-4">
                  <p className="mb-1 text-xs text-muted-foreground">
                    اشتراک فعال
                  </p>
                  <p className="font-medium">{profileData.plan}</p>
                </div>
                <div className="rounded-lg border border-dashed border-border/60 p-4">
                  <p className="mb-1 text-xs text-muted-foreground">
                    کانال‌های اعلان فعال
                  </p>
                  <p className="font-medium">{notificationSummary}</p>
                </div>
              </div>
              {lastSavedMessage ? (
                <div className="rounded-lg border border-dashed border-border/60 bg-muted/30 p-3 text-xs text-muted-foreground">
                  {lastSavedMessage}
                </div>
              ) : null}
              {isEditing ? (
                <div className="border-t border-dashed border-border/60 pt-6">
                  <ProfileEditForm
                    initialData={profileData}
                    onCancel={() => setIsEditing(false)}
                    onSave={handleProfileSave}
                  />
                </div>
              ) : null}
            </Card>

            <Card className="space-y-5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">سفارش‌های اخیر</h2>
                  <p className="text-sm text-muted-foreground">
                    پیگیری وضعیت تولید و ارسال چاپ‌ها
                  </p>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Package className="h-4 w-4" />
                  مشاهده همه
                </Button>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="rounded-lg border border-border/60 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold">{order.id}</p>
                        <p className="text-xs text-muted-foreground">
                          {order.date}
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                        {order.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {order.items}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {order.eta}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">ترجیحات چاپ</h2>
                  <p className="text-sm text-muted-foreground">
                    پیش‌فرض‌های اعمال‌شده روی سفارش‌های شما
                  </p>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Camera className="h-4 w-4" />
                  مدیریت پریست‌ها
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1 rounded-lg border border-border/60 p-4">
                  <p className="text-xs text-muted-foreground">تصحیح رنگ</p>
                  <p className="font-medium">{profileData.colorProfile}</p>
                  <p className="text-xs text-muted-foreground">
                    این پروفایل روی تمامی چاپ‌های جدید اعمال می‌شود.
                  </p>
                </div>
                <div className="space-y-1 rounded-lg border border-border/60 p-4">
                  <p className="text-xs text-muted-foreground">حاشیه دلخواه</p>
                  <p className="font-medium">{profileData.borderStyle}</p>
                  <p className="text-xs text-muted-foreground">
                    انتخاب مناسب برای قاب‌بندی هنری و آلبوم.
                  </p>
                </div>
                <div className="space-y-1 rounded-lg border border-border/60 p-4">
                  <p className="text-xs text-muted-foreground">ویرایش خودکار</p>
                  <p className="font-medium">{profileData.autoEnhance}</p>
                  <p className="text-xs text-muted-foreground">
                    تنظیم روشنایی و نویزگیری خودکار برای پرتره‌ها.
                  </p>
                </div>
                <div className="space-y-1 rounded-lg border border-border/60 p-4">
                  <p className="text-xs text-muted-foreground">نوع بسته‌بندی</p>
                  <p className="font-medium">{profileData.packaging}</p>
                  <p className="text-xs text-muted-foreground">
                    برای تحویل هدیه و تجربه بازگشایی جذاب.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-dashed border-border/60 bg-muted/30 p-4 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  یادداشت ثابت برای تیم چاپ:
                </span>{" "}
                {profileData.printNotes}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="space-y-4 p-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <div>
                  <h2 className="text-lg font-semibold">باشگاه مشتریان</h2>
                  <p className="text-sm text-muted-foreground">
                    امتیازهای قابل استفاده برای سفارش بعدی
                  </p>
                </div>
              </div>
              <div className="space-y-3 rounded-lg border border-dashed border-border/60 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    امتیاز فعلی
                  </span>
                  <span className="text-xl font-bold">۳٬۸۵۰</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    تخفیف در دسترس
                  </span>
                  <span className="font-medium text-primary">
                    ۱۵٪ روی چاپ‌های بعدی
                  </span>
                </div>
                <Button size="sm" className="w-full">
                  تبدیل به کد تخفیف
                </Button>
              </div>
            </Card>

            <Card className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h2 className="text-lg font-semibold">آدرسهای ذخیره‌شده</h2>
                    <p className="text-sm text-muted-foreground">
                      برای ارسال سریع‌تر سفارش‌ها
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  افزودن آدرس
                </Button>
              </div>
              <div className="space-y-3">
                {savedAddresses.map((address) => (
                  <div
                    key={address.label}
                    className="space-y-1 rounded-lg border border-border/60 p-4"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{address.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {address.contact}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {address.details}
                    </p>
                  </div>
                ))}
                <div className="space-y-1 rounded-lg border border-dashed border-border/60 bg-muted/30 p-4 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">
                    یادداشت پیش‌فرض ارسال:
                  </span>{" "}
                  {profileData.shippingNote}
                </div>
              </div>
            </Card>

            <Card className="space-y-4 p-6">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-primary" />
                <div>
                  <h2 className="text-lg font-semibold">روش‌های پرداخت</h2>
                  <p className="text-sm text-muted-foreground">
                    کارت‌های تایید شده برای پرداخت سریع
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg border border-border/60 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">کارت بانک ملت</span>
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    **** **** **** ۵۴۳۲ · اعتبار تا ۰۴/۱۴۰۵
                  </p>
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
  );
}
