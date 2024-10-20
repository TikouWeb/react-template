import { Header } from "@/components/features/header";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useRef } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: LayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const newPaddingY = `${Math.max(1, 2 - latest / 100)}rem`;
    containerRef.current?.style.setProperty("padding-top", newPaddingY);
    containerRef.current?.style.setProperty("padding-bottom", newPaddingY);
  });

  return (
    <div className="container size-full max-w-screen-lg">
      <motion.div
        ref={containerRef}
        className="sticky top-0 z-20 p-8 backdrop-blur-md"
      >
        <Header />
      </motion.div>
      <div className="w-full px-4 lg:px-8">{children}</div>
    </div>
  );
};
