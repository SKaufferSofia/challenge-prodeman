import { Spiner } from "@/components/UI/Spiner";
import ViewSections from "@/components/View/ViewSections";
import { Suspense } from "react";

export default function Landing() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Spiner />
        </div>
      }
    >
      <ViewSections />
    </Suspense>
  );
}
