import { use } from "react";

import SingularDistroPage from "@/components/core/SingularDistroPage";

// Define async params type
type PageParams = Promise<{ id: string }>;

interface DistroPageProps {
  params: PageParams;
}

export default function DistroPage({ params }: DistroPageProps) {
  const { id } = use(params); // unwrap async params

  return <SingularDistroPage id={id} />;
}
