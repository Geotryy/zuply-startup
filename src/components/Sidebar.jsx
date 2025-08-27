import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  ClipboardList,
  ShieldCheck,
  Tags,
  Boxes,
  Users,
  Building2,
  MessageSquareText,
} from "lucide-react";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: Home },
  { to: "/solicitacoes", label: "Solicitações de compras", icon: ClipboardList },
  { to: "/aprovacoes", label: "Aprovações", icon: ShieldCheck },
  { to: "/cotacoes", label: "Cotações", icon: Tags },
  { to: "/estoque", label: "Estoque", icon: Boxes },
  { to: "/usuarios", label: "Usuários", icon: Users },
  { to: "/fornecedores", label: "Fornecedores", icon: Building2 },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="flex flex-col justify-between w-64 p-4"
      style={{ backgroundColor: "var(--sidebar)" }}
      aria-label="Menu lateral"
    >
      <div>
        <div className="px-2 py-3 mb-2 flex items-center gap-2">
          <div className="logo-header-sidebar"><img src="/images/logo-zuply.png" alt="logo da zuply"/></div>
        </div>

        <nav className="mt-2 space-y-1">
          {nav.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  "group flex items-start gap-3 rounded-xl px-3 py-3 text-slate-200 transition-colors",
                  isActive ? "bg-slate-700/40" : "hover:bg-[var(--sidebar-hover)]",
                ].join(" ")
              }
              aria-current={pathname === to ? "page" : undefined}
            >
              <Icon className="mt-0.5 h-5 w-5 opacity-90" />
              <span className="leading-tight">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="px-1 pt-4">
        <NavLink
          to="/chat"
          className="flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] py-3 text-white font-medium hover:opacity-90 transition-opacity"
        >
          <MessageSquareText className="h-5 w-5" />
          Chat
        </NavLink>
      </div>
    </aside>
  );
}
