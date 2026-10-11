import { ErrorPage } from "@/components/dom/ErrorPage";

export default function NotFoundPage() {
  return (
    <ErrorPage
      code={404}
      heading="Page not found"
      message="This page does not exist. The link may be old, or the address may have a typo."
    />
  );
}
