import type { Metadata } from "next";
import AboutUs from "@/components/AboutUs";

export const metadata: Metadata = {
  title: "About Us — NexloraAI",
  description:
    "Learn about NexloraAI — our mission, values, and the team behind your next AI-powered product.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutUs />
    </div>
  );
}
