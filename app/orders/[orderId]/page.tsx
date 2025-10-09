import { OrderTracking } from "@/components/order-tracking"

export default function OrderPage({ params }: { params: { orderId: string } }) {
  return (
    <div className="min-h-screen">
      <OrderTracking orderId={params.orderId} />
    </div>
  )
}
