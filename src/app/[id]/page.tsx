import { Spiner } from "@/components/UI/Spiner";
import DetailsSection from "@/components/View/Sections/DetailsSection";
import React, { Suspense } from "react";

const DetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Spiner />
        </div>
      }
    >
      <DetailsSection id={params.id} />
    </Suspense>
  );
};

export default DetailsPage;
