import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/policies/privacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Saveoex",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb pageName="Privacy Policy" />

      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;
