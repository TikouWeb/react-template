import {
  Globe,
  ScanSearch,
  TestTube,
  Ellipsis,
  CloudDownload,
  type LucideProps,
} from "lucide-react";

// All used icons should be declared here
const iconMap = {
  Globe,
  ScanSearch,
  TestTube,
  Ellipsis,
  CloudDownload,
} as const;

type IconName = keyof typeof iconMap;

export interface IconDynamicProps extends Omit<LucideProps, "ref"> {
  iconName: IconName;
}

export const IconDynamic = ({ iconName, ...props }: IconDynamicProps) => {
  const Icon = iconMap[iconName];
  return <Icon {...props} />;
};
