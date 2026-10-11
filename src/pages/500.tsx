import { ErrorPage } from "@/components/dom/ErrorPage";

export default function ServerErrorPage() {
  return (
    <ErrorPage
      code={500}
      heading="Server error"
      message="Something went wrong on our side. Please try again in a moment."
    />
  );
}
