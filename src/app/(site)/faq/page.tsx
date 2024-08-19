import Faq from "@/components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Page | Saveox",
  description: "This is contact page description",
};

const FAQPage = () => {
  return (
    <>
      <Faq />
    </>
  );
};

export default FAQPage;
