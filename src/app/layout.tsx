import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexloraAI — AI Solutions That Scale Businesses",
  description:
    "NexloraAI is a premium AI development agency building AI Automation, Custom Software, Intelligent Chatbots, and Modern Web Applications for startups and enterprises.",
  keywords:
    "AI agency, AI automation, chatbot development, web development, SaaS development, API integration, business process automation, NexloraAI",
  robots: "index, follow",
  openGraph: {
    title: "NexloraAI — AI Solutions That Scale Businesses",
    description:
      "AI Automation, Custom Software, Intelligent Chatbots, and Modern Web Applications.",
    url: "https://nexloraai.com",
    siteName: "NexloraAI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexloraAI — AI Solutions That Scale Businesses",
    description:
      "AI Automation, Custom Software, Intelligent Chatbots, and Modern Web Applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
