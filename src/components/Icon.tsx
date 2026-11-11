import {
  ArrowLeftRight,
  Car,
  CircleCheck,
  Clock,
  FileText,
  MapPin,
  MessageSquareText,
  RefreshCw,
  RectangleHorizontal,
  ScanSearch,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  car: Car,
  swap: ArrowLeftRight,
  plate: RectangleHorizontal,
  refresh: RefreshCw,
  file: FileText,
  user: UserRound,
  clock: Clock,
  shield: ShieldCheck,
  map: MapPin,
  check: CircleCheck,
  mensagem: MessageSquareText,
  lupa: ScanSearch,
};

export function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const C = icons[name] ?? FileText;
  return <C aria-hidden size={size} strokeWidth={1.75} />;
}
