import Breadcrumb from "@/components/Common/Breadcrumb";
import RefundPolicy from "@/components/policies/refund";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Saveoex",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="Refund Policy" />

      <RefundPolicy />
    </>
  );
};

export default ErrorPage;
