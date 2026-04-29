import { type PropsWithChildren, type Ref, forwardRef, useRef } from "react";
import { mergeRefs } from "react-merge-refs";

const Layout = forwardRef(({ children }: PropsWithChildren, ref: Ref<HTMLDivElement>) => {
  const localRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className="absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom"
    >
      {children}
    </div>
  );
});
Layout.displayName = "Layout";

export default Layout;
