import Features from "@/components/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Page | Saveox",
  description: "This is contact page description",
};

const HowItWorksPage = () => {
  return (
    <>
      <Features />
    </>
  );
};

export default HowItWorksPage;
