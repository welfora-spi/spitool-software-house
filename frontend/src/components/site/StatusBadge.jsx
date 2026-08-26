import { STATUS_LABEL } from "@/data/products";
import { CheckCircle2, Loader, FlaskConical } from "lucide-react";

const STYLES = {
  disponibile: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/25",
  beta: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/25",
  sviluppo: "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/25",
};

const ICONS = {
  disponibile: CheckCircle2,
  beta: FlaskConical,
  sviluppo: Loader,
};

export const StatusBadge = ({ status, className = "" }) => {
  const Icon = ICONS[status] || Loader;
  return (
    <span
      data-testid={`status-badge-${status}`}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${STYLES[status]} ${className}`}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      {STATUS_LABEL[status]}
    </span>
  );
};
