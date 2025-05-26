import SingularCommandPage from "@/components/core/SingularCommandPage";
import { use } from "react";

// Type for async params
type PageParams = Promise<{ id: string }>;

interface CommandPageProps {
  params: PageParams;
}

export default function CommandPage({ params }: CommandPageProps) {
  const { id } = use(params);

  return <SingularCommandPage id={id} />;
}
