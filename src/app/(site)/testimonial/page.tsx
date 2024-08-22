import Breadcrumb from "@/components/Common/Breadcrumb";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Page | Saveoex",
  description: "This is contact page description",
};

const TestimonialPage = () => {
  return (
    <>
      <Testimonials />
    </>
  );
};

export default TestimonialPage;
