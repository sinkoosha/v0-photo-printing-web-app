"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, X, ArrowRight, ImageIcon } from "lucide-react"
import Link from "next/link"
import { PhotoEditor } from "@/components/photo-editor"

interface UploadedPhoto {
  id: string
  file: File
  preview: string
}

export function UploadInterface() {
  const [photos, setPhotos] = useState<UploadedPhoto[]>([])
  const [selectedPhoto, setSelectedPhoto] = useState<UploadedPhoto | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return

    const newPhotos: UploadedPhoto[] = Array.from(files)
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        preview: URL.createObjectURL(file),
      }))

    setPhotos((prev) => [...prev, ...newPhotos])
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    handleFileSelect(e.dataTransfer.files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const removePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((photo) => photo.id !== id))
    if (selectedPhoto?.id === id) {
      setSelectedPhoto(null)
    }
  }

  if (selectedPhoto) {
    return <PhotoEditor photo={selectedPhoto} onBack={() => setSelectedPhoto(null)} />
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

      <main className="container py-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">آپلود تصاویر</h1>
            <p className="text-foreground-muted">عکس‌های خود را برای چاپ آپلود کنید</p>
          </div>

          <Card
            className={`p-8 mb-8 border-2 border-dashed transition-colors ${
              isDragging ? "border-accent bg-accent/5" : "border-border"
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <Upload className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">فایل‌های خود را اینجا بکشید</h3>
              <p className="text-sm text-foreground-muted mb-6">یا روی دکمه زیر کلیک کنید</p>
              <Button
                onClick={() => {
                  const input = document.createElement("input")
                  input.type = "file"
                  input.multiple = true
                  input.accept = "image/*"
                  input.onchange = (e) => handleFileSelect((e.target as HTMLInputElement).files)
                  input.click()
                }}
              >
                انتخاب فایل‌ها
              </Button>
              <p className="text-xs text-foreground-muted mt-4">فرمت‌های پشتیبانی شده: JPG, PNG, HEIC</p>
            </div>
          </Card>

          {photos.length > 0 && (
            <>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  تصاویر آپلود شده ({photos.length} {photos.length === 1 ? "عکس" : "عکس"})
                </h2>
                <Button variant="outline" size="sm" onClick={() => setPhotos([])}>
                  پاک کردن همه
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {photos.map((photo) => (
                  <Card key={photo.id} className="group relative overflow-hidden">
                    <div className="aspect-square relative">
                      <img
                        src={photo.preview || "/placeholder.svg"}
                        alt="پیش‌نمایش"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button size="sm" onClick={() => setSelectedPhoto(photo)}>
                          ویرایش
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => removePhoto(photo.id)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex justify-end">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/configure">
                    ادامه به تنظیمات چاپ
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
