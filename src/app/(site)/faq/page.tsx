import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Page | Saveox",
  description: "This is contact page description",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="FAQ Page" />

      <Faq />
    </>
  );
};

export default ContactPage;
