"use client";
import { Spiner } from "@/components/UI/Spiner";
import DetailsSection from "@/components/View/Sections/DetailsSection";
import { Suspense, use } from "react";

// Este tipo viene de next y asegura compatibilidad con rutas dinámicas
type PageProps = {
  params: Promise<{ id: string }>;
};

const DetailsPage = ({ params }: PageProps) => {
  const { id } = use(params);
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Spiner />
        </div>
      }
    >
      <DetailsSection id={id} />
    </Suspense>
  );
};

export default DetailsPage;
