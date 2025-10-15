"use client"

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent as ReactChangeEvent,
  type FormEvent,
} from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MessageSquareText,
  Palette,
  Phone,
  Printer,
  Sparkles,
  TimerReset,
  X,
} from "lucide-react"

export type ProfileFormData = {
  fullName: string
  studioName: string
  jobTitle: string
  memberSince: string
  plan: string
  bio: string
  email: string
  phone: string
  secondaryPhone: string
  location: string
  website: string
  shippingNote: string
  colorProfile: string
  borderStyle: string
  autoEnhance: string
  packaging: string
  printNotes: string
  notifications: {
    emailUpdates: boolean
    smsUpdates: boolean
    promoOffers: boolean
  }
}

const sections = [
  { id: "personal", label: "اطلاعات شخصی" },
  { id: "contact", label: "راه‌های ارتباطی" },
  { id: "preferences", label: "تنظیمات چاپ" },
  { id: "notifications", label: "اعلان‌ها" },
] as const

type SectionId = (typeof sections)[number]["id"]

type ProfileEditFormProps = {
  initialData: ProfileFormData
  onCancel: () => void
  onSave: (data: ProfileFormData) => void
}

type ChangeEvent = ReactChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export function ProfileEditForm({ initialData, onCancel, onSave }: ProfileEditFormProps) {
  const [activeSection, setActiveSection] = useState<SectionId>("personal")
  const [formData, setFormData] = useState<ProfileFormData>(initialData)
  const [isSaving, setIsSaving] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setFormData(initialData)
  }, [initialData])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const hasChanges = useMemo(() => {
    return JSON.stringify(initialData) !== JSON.stringify(formData)
  }, [initialData, formData])

  const handleInputChange = (field: keyof ProfileFormData) => (event: ChangeEvent) => {
    const value = event.target.value
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNotificationChange = (field: keyof ProfileFormData["notifications"]) =>
    (event: ReactChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked
      setFormData((prev) => ({
        ...prev,
        notifications: {
          ...prev.notifications,
          [field]: checked,
        },
      }))
    }

  const resetForm = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsSaving(false)
    setFormData(initialData)
    setStatusMessage(null)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSaving || !hasChanges) return

    setIsSaving(true)
    setStatusMessage(null)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      onSave(formData)
      setIsSaving(false)
      setStatusMessage("تغییرات با موفقیت ذخیره شد")
      timeoutRef.current = null
    }, 400)
  }

  const renderPersonalSection = () => (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="fullName">نام و نام خانوادگی</Label>
        <Input
          id="fullName"
          value={formData.fullName}
          onChange={handleInputChange("fullName")}
          placeholder="مثال: فاطمه رضایی"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="jobTitle">عنوان شغلی</Label>
        <Input
          id="jobTitle"
          value={formData.jobTitle}
          onChange={handleInputChange("jobTitle")}
          placeholder="عکاس پرتره"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="studioName">نام استودیو یا برند</Label>
        <Input
          id="studioName"
          value={formData.studioName}
          onChange={handleInputChange("studioName")}
          placeholder="استودیو فریم طلایی"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="plan">پلن فعال چاپ</Label>
        <Input id="plan" value={formData.plan} onChange={handleInputChange("plan")} placeholder="پلن حرفه‌ای" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="memberSince" className="flex items-center gap-2">
          <TimerReset className="h-4 w-4 text-primary" /> عضو از سال
        </Label>
        <Input
          id="memberSince"
          value={formData.memberSince}
          onChange={handleInputChange("memberSince")}
          placeholder="۱۴۰۱"
        />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="bio">معرفی کوتاه</Label>
        <Textarea
          id="bio"
          value={formData.bio}
          onChange={handleInputChange("bio")}
          placeholder="زمینه فعالیت، سبک کاری و نیازهای چاپ شما"
          rows={4}
        />
      </div>
    </div>
  )

  const renderContactSection = () => (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" /> ایمیل اصلی
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange("email")}
          placeholder="example@email.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" /> شماره موبایل
        </Label>
        <Input id="phone" value={formData.phone} onChange={handleInputChange("phone")} placeholder="۰۹۱۲۱۲۳۴۵۶۷" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="secondaryPhone">شماره پشتیبان</Label>
        <Input
          id="secondaryPhone"
          value={formData.secondaryPhone}
          onChange={handleInputChange("secondaryPhone")}
          placeholder="۰۹۳۵۴۳۲۱۱۹۸"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="website">وب‌سایت یا شبکه اجتماعی</Label>
        <Input id="website" value={formData.website} onChange={handleInputChange("website")} placeholder="fatemehphoto.ir" />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="location">آدرس کوتاه</Label>
        <Input id="location" value={formData.location} onChange={handleInputChange("location")} placeholder="تهران، سعادت‌آباد" />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="shippingNote" className="flex items-center gap-2">
          <MessageSquareText className="h-4 w-4 text-primary" /> یادداشت ارسال پیش‌فرض
        </Label>
        <Textarea
          id="shippingNote"
          value={formData.shippingNote}
          onChange={handleInputChange("shippingNote")}
          placeholder="مثال: در صورت عدم حضور با همسایه هماهنگ شود."
          rows={3}
        />
      </div>
    </div>
  )

  const renderPreferencesSection = () => (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="colorProfile" className="flex items-center gap-2">
          <Palette className="h-4 w-4 text-primary" /> پروفایل رنگی ترجیحی
        </Label>
        <Input
          id="colorProfile"
          value={formData.colorProfile}
          onChange={handleInputChange("colorProfile")}
          placeholder="پروفایل زنده (Vivid)"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="borderStyle">حاشیه دلخواه</Label>
        <Input
          id="borderStyle"
          value={formData.borderStyle}
          onChange={handleInputChange("borderStyle")}
          placeholder="قاب سفید ۸ میلی‌متری"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="autoEnhance">بهینه‌سازی خودکار</Label>
        <Input
          id="autoEnhance"
          value={formData.autoEnhance}
          onChange={handleInputChange("autoEnhance")}
          placeholder="بهینه‌سازی چهره فعال"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="packaging" className="flex items-center gap-2">
          <Printer className="h-4 w-4 text-primary" /> نوع بسته‌بندی
        </Label>
        <Input
          id="packaging"
          value={formData.packaging}
          onChange={handleInputChange("packaging")}
          placeholder="بسته هدیه با روبان"
        />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="printNotes">یادداشت ثابت برای تیم چاپ</Label>
        <Textarea
          id="printNotes"
          value={formData.printNotes}
          onChange={handleInputChange("printNotes")}
          placeholder="مثال: چاپ‌ها را قبل از بسته‌بندی بررسی رنگ کنید."
          rows={3}
        />
      </div>
    </div>
  )

  const renderNotificationsSection = () => (
    <div className="space-y-4">
      <div className="rounded-lg border border-dashed border-border/60 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <div>
              <p className="text-sm font-medium">به‌روزرسانی وضعیت سفارش</p>
              <p className="text-xs text-muted-foreground">ارسال جزئیات از آماده‌سازی تا تحویل</p>
            </div>
          </div>
          <input
            id="emailUpdates"
            type="checkbox"
            className="h-4 w-4 rounded border border-input accent-primary"
            checked={formData.notifications.emailUpdates}
            onChange={handleNotificationChange("emailUpdates")}
          />
        </div>
      </div>
      <div className="rounded-lg border border-dashed border-border/60 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-medium">پیامک لحظه‌ای</p>
              <p className="text-xs text-muted-foreground">اطلاع‌رسانی آماده‌سازی و ارسال از طریق پیامک</p>
            </div>
          </div>
          <input
            id="smsUpdates"
            type="checkbox"
            className="h-4 w-4 rounded border border-input accent-primary"
            checked={formData.notifications.smsUpdates}
            onChange={handleNotificationChange("smsUpdates")}
          />
        </div>
      </div>
      <div className="rounded-lg border border-dashed border-border/60 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-amber-500" />
            <div>
              <p className="text-sm font-medium">پیشنهادها و تخفیف‌ها</p>
              <p className="text-xs text-muted-foreground">اطلاع از کمپین‌های ویژه چاپ عکس</p>
            </div>
          </div>
          <input
            id="promoOffers"
            type="checkbox"
            className="h-4 w-4 rounded border border-input accent-primary"
            checked={formData.notifications.promoOffers}
            onChange={handleNotificationChange("promoOffers")}
          />
        </div>
      </div>
    </div>
  )

  const renderSection = () => {
    switch (activeSection) {
      case "personal":
        return renderPersonalSection()
      case "contact":
        return renderContactSection()
      case "preferences":
        return renderPreferencesSection()
      case "notifications":
        return renderNotificationsSection()
      default:
        return null
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {sections.map((section) => (
          <Button
            key={section.id}
            type="button"
            variant={section.id === activeSection ? "default" : "outline"}
            size="sm"
            className={cn("rounded-full px-4", section.id === activeSection ? "shadow-sm" : "")}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </Button>
        ))}
      </div>

      <Card className="space-y-6 border border-dashed border-border/60 bg-background/70 p-6">
        {renderSection()}

        <div className="flex flex-col gap-3 border-t border-border/60 pt-4 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-muted-foreground">
            {statusMessage ? statusMessage : hasChanges ? "پس از اعمال تغییرات، ذخیره را بزنید" : "بدون تغییر جدید"}
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                resetForm()
                onCancel()
              }}
            >
              <X className="h-4 w-4" />
              انصراف
            </Button>
            <Button type="submit" size="sm" disabled={isSaving || !hasChanges}>
              {isSaving ? "در حال ذخیره..." : "ذخیره تغییرات"}
            </Button>
          </div>
        </div>
      </Card>
    </form>
  )
}
