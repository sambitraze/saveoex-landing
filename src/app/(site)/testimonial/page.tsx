import Breadcrumb from "@/components/Common/Breadcrumb";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Page | Saveox",
  description: "This is contact page description",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="FAQ Page" />

      <Testimonials />
    </>
  );
};

export default ContactPage;
