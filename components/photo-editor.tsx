"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { ArrowRight, RotateCw, Sun, Contrast, Droplets, X } from "lucide-react"

interface PhotoEditorProps {
  photo: {
    id: string
    file: File
    preview: string
  }
  onBack: () => void
}

export function PhotoEditor({ photo, onBack }: PhotoEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [saturation, setSaturation] = useState(100)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = photo.preview

    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height

      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`
      ctx.drawImage(img, -img.width / 2, -img.height / 2)
      ctx.restore()
    }
  }, [photo.preview, brightness, contrast, saturation, rotation])

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360)
  }

  const handleReset = () => {
    setBrightness(100)
    setContrast(100)
    setSaturation(100)
    setRotation(0)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold">ویرایش تصویر</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={onBack}>
              <X className="h-5 w-5 ml-2" />
              انصراف
            </Button>
            <Button onClick={onBack}>
              ذخیره و بازگشت
              <ArrowRight className="h-5 w-5 mr-2" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          <Card className="p-4 flex items-center justify-center bg-surface-muted/30 min-h-[500px]">
            <canvas ref={canvasRef} className="max-w-full max-h-[600px] object-contain" />
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">ابزارهای ویرایش</h2>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4 text-foreground-muted" />
                      <label className="text-sm font-medium">روشنایی</label>
                    </div>
                    <span className="text-sm text-foreground-muted">{brightness}%</span>
                  </div>
                  <Slider
                    value={[brightness]}
                    onValueChange={(value) => setBrightness(value[0])}
                    min={0}
                    max={200}
                    step={1}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Contrast className="h-4 w-4 text-foreground-muted" />
                      <label className="text-sm font-medium">کنتراست</label>
                    </div>
                    <span className="text-sm text-foreground-muted">{contrast}%</span>
                  </div>
                  <Slider
                    value={[contrast]}
                    onValueChange={(value) => setContrast(value[0])}
                    min={0}
                    max={200}
                    step={1}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-foreground-muted" />
                      <label className="text-sm font-medium">اشباع رنگ</label>
                    </div>
                    <span className="text-sm text-foreground-muted">{saturation}%</span>
                  </div>
                  <Slider
                    value={[saturation]}
                    onValueChange={(value) => setSaturation(value[0])}
                    min={0}
                    max={200}
                    step={1}
                  />
                </div>

                <div className="pt-4 border-t border-border">
                  <Button variant="outline" className="w-full gap-2 bg-transparent" onClick={handleRotate}>
                    <RotateCw className="h-4 w-4" />
                    چرخش ۹۰ درجه
                  </Button>
                </div>

                <Button variant="outline" className="w-full bg-transparent" onClick={handleReset}>
                  بازنشانی تنظیمات
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-accent/5 border-accent/20">
              <h3 className="font-semibold mb-2">نکات مهم</h3>
              <ul className="text-sm text-foreground-muted space-y-2">
                <li>• برای بهترین کیفیت چاپ، از تصاویر با رزولوشن بالا استفاده کنید</li>
                <li>• تنظیمات روشنایی و کنتراست را با دقت انجام دهید</li>
                <li>• پس از ویرایش، تصویر را ذخیره کنید</li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
