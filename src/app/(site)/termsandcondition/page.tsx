import Breadcrumb from "@/components/Common/Breadcrumb";
import TnC from "@/components/policies/terms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TnC | Saveoex",
};

const TnCPage = () => {
  return (
    <>
      <Breadcrumb pageName="Terms And Condtition" />

      <TnC />
    </>
  );
};

export default TnCPage;
