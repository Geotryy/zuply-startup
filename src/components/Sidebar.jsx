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
    <aside
      className="flex flex-col justify-between w-64 p-4 text-slate-200"
      style={{ backgroundColor: "var(--sidebar)" }}
      aria-label="Menu lateral"
    >
      <div>
        {/* LOGO — sem wrapper extra e com espaçamento */}
        <div className="px-2 mt-6 mb-8 flex items-center">
          <img
            src="/images/logo-zuply.png"
            alt="logo da zuply"
            className="h-8 w-auto"
          />
        </div>

        {/* NAV */}
        
        <nav className="mt-10">
          <ul className="flex flex-col gap-2.5"></ul>
          {nav.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  "group flex items-center gap-3 rounded-xl px-3 py-2.5",
                  "transition-colors no-underline hover:no-underline focus:no-underline",
                  isActive ? "bg-slate-700/40" : "hover:bg-[var(--sidebar-hover)]",
                ].join(" ")
              }
              aria-current={pathname === to ? "page" : undefined}
              end
            >
              <Icon className="h-5 w-5 opacity-90" />
              <span className="leading-tight">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* CHAT */}
      <div className="px-1">
        <NavLink
          to="/chat"
          className="flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-5
                     text-white font-medium transition-opacity no-underline hover:opacity-90"
        >
          <MessageSquareText className="h-5 w-5" />
          Chat
        </NavLink>
      </div>
    </aside>
  );
}
