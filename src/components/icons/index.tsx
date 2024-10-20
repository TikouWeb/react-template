import { lazy, Suspense } from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import type { LucideProps } from "lucide-react";

const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

export const IconDynamic = ({ name, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
};
