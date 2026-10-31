import {
  AirplaneTilt,
  Armchair,
  ArrowsClockwise,
  CalendarCheck,
  Car,
  Clock,
  CreditCard,
  GlobeHemisphereEast,
  MagnifyingGlass,
  MapPin,
  MoonStars,
  QrCode,
  RoadHorizon,
  Seat,
  ShieldCheck,
  SteeringWheel,
  Taxi,
  Timer,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

/** Icons for feature cards, tabs and field labels (Phosphor, duotone). */
const ICONS = {
  calendar: CalendarCheck,
  car: Car,
  card: CreditCard,
  clock: Clock,
  comfort: Armchair,
  driver: SteeringWheel,
  globe: GlobeHemisphereEast,
  night: MoonStars,
  pin: MapPin,
  plane: AirplaneTilt,
  qr: QrCode,
  repeat: ArrowsClockwise,
  road: RoadHorizon,
  search: MagnifyingGlass,
  seat: Seat,
  shield: ShieldCheck,
  stopwatch: Timer,
  taxi: Taxi,
  wrench: Wrench,
} satisfies Record<string, Icon>;

export type FeatureIconName = keyof typeof ICONS;

const TILE = {
  brand: "bg-gradient-to-br from-[#4f7dff] via-brand to-brand-darker shadow-brand/30",
  accent: "bg-gradient-to-br from-[#ffa14f] via-accent to-accent-dark shadow-accent/30",
  muted: "bg-gradient-to-br from-slate-300 to-slate-400 shadow-slate-400/20",
};

/**
 * A white duotone icon on a glossy gradient tile (`tone`), or just the icon in brand blue (`plain`, for small labels).
 * `className` sizes the tile; the icon takes about half of it.
 */
export default function FeatureIcon({
  name,
  tone = "brand",
  plain = false,
  className = "h-12 w-12",
}: {
  name: FeatureIconName;
  tone?: keyof typeof TILE;
  plain?: boolean;
  className?: string;
}) {
  const Glyph = ICONS[name];
  if (plain) return <Glyph weight="duotone" className={`shrink-0 text-brand ${className}`} aria-hidden />;
  return (
    <span className={`relative grid shrink-0 place-items-center overflow-hidden rounded-[30%] text-white shadow-lg ring-1 ring-white/20 ring-inset ${TILE[tone]} ${className}`}>
      {/* soft top highlight for a glossy look */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent" aria-hidden />
      <Glyph weight="duotone" className="relative h-1/2 w-1/2" aria-hidden />
    </span>
  );
}
