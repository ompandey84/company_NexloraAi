import { NextResponse } from "next/server";
import { Cashfree, CFEnvironment } from "cashfree-pg";

const cashfree = new Cashfree(
  CFEnvironment.PRODUCTION,
  process.env.CASHFREE_APP_ID || "",
  process.env.CASHFREE_SECRET_KEY || ""
);

export async function POST(req: Request) {
  try {
    const { planName, amount, currency = "INR", customerPhone = "9999999999", customerEmail = "customer@example.com" } = await req.json();

    const orderId = `order_${Date.now()}`;
    
    const request = {
      order_amount: amount,
      order_currency: currency,
      order_id: orderId,
      customer_details: {
        customer_id: `cust_${Date.now()}`,
        customer_phone: customerPhone,
        customer_email: customerEmail,
        customer_name: "NexloraAI Customer"
      },
      order_meta: {
        return_url: "https://auronetics.com/nexloraai/about?payment_status=success", // Update with actual URL if different
        notify_url: "https://auronetics.com/nexloraai/api/payment/webhook" // Optional webhook
      },
      order_note: `Payment for ${planName}`
    };

    const response = await cashfree.PGCreateOrder(request);
    
    return NextResponse.json({ 
      paymentSessionId: response.data.payment_session_id,
      orderId: response.data.order_id 
    });
  } catch (error: any) {
    console.error("Cashfree Order Error:", error.response?.data || error);
    return NextResponse.json(
      { error: "Failed to create payment session" },
      { status: 500 }
    );
  }
}
