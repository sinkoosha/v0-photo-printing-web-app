import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { amount } = await request.json()

    // When Stripe integration is connected, this will create a real payment intent
    // For now, return a mock response
    const paymentIntent = {
      id: "pi_mock_" + Math.random().toString(36).substr(2, 9),
      client_secret: "mock_secret_" + Math.random().toString(36).substr(2, 9),
      amount: amount,
      currency: "irr",
      status: "requires_payment_method",
    }

    return NextResponse.json(paymentIntent)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 })
  }
}
