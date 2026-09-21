import React, { useState } from "react";
import { Menu, X, UtensilsCrossed, LogIn, Sprout } from "lucide-react";
import { UserProfile, getInitialsAvatarUrl } from "../utils/storage";

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
  user: UserProfile;
  onOpenAuth?: () => void;
}

const NAV_LINKS = [
  { to: "/", label: "Saúde em Ação" },
  { to: "/alimentos", label: "Alimentos" },
  { to: "/meu-dia", label: "Meu Dia" },
  { to: "/jogo", label: "Quiz + Mito ou Verdade?" },
  { to: "/informe-se", label: "Informe-se!" },
  { to: "/criancas", label: "Área Kids" }
];

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate, user, onOpenAuth }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const profileImageUrl = user.avatar_url || getInitialsAvatarUrl(user.nome, 72);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <img
            src="/assets/logo.png"
            alt="Saúde em Ação"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl shadow-sm group-hover:scale-105 transition object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/logo.png";
            }}
          />
          <div className="leading-tight">
            <div className="font-display text-lg sm:text-xl font-bold text-primary">
              Saúde em Ação
            </div>
            <div className="text-xs text-muted-foreground -mt-0.5">
              ODS 3 · Alimentação consciente
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = currentRoute === link.to;
            return (
              <button
                key={link.to}
                onClick={() => navigate(link.to)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition cursor-pointer ${
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:bg-secondary/70"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* User / Profile & Mobile Hamburger */}
        <div className="flex items-center gap-2 relative">
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary transition cursor-pointer shadow-sm overflow-hidden"
              aria-label="Menu do perfil"
              title={`Meu perfil (${user.nome})`}
            >
              <img
                src={profileImageUrl}
                alt={`Foto de perfil de ${user.nome}`}
                className="w-full h-full object-cover"
              />
            </button>

            {userDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-56 rounded-2xl border border-border bg-card p-2 text-card-foreground shadow-xl z-50 animate-in fade-in zoom-in-95 duration-100"
                onClick={() => setUserDropdownOpen(false)}
              >
                <div className="px-3 py-2 flex items-center gap-2.5 border-b border-border mb-1">
                  <img
                    src={profileImageUrl}
                    alt={user.nome}
                    className="w-7 h-7 rounded-full object-cover shrink-0"
                  />
                  <div className="text-xs font-semibold text-foreground truncate">
                    {user.nome}
                  </div>
                </div>
                <button
                  onClick={() => navigate("/meu-perfil")}
                  className="w-full text-left flex items-center gap-2.5 px-3 py-2 text-sm rounded-xl hover:bg-secondary/70 transition cursor-pointer font-medium"
                >
                  <Sprout className="w-4 h-4 text-primary" /> Meu Perfil
                </button>
                <button
                  onClick={() => navigate("/meu-dia")}
                  className="w-full text-left flex items-center gap-2.5 px-3 py-2 text-sm rounded-xl hover:bg-secondary/70 transition cursor-pointer font-medium"
                >
                  <UtensilsCrossed className="w-4 h-4 text-primary" /> Meu Dia
                </button>
                {onOpenAuth && (
                  <button
                    onClick={onOpenAuth}
                    className="w-full text-left flex items-center gap-2.5 px-3 py-2 text-sm rounded-xl hover:bg-secondary/70 transition cursor-pointer text-muted-foreground font-medium border-t border-border mt-1 pt-2"
                  >
                    <LogIn className="w-4 h-4" /> {user.logado ? "Alterar dados" : "Identificar-se"}
                  </button>
                )}
              </div>
            )}
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary text-foreground cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-1 shadow-md">
          {NAV_LINKS.map((link) => {
            const active = currentRoute === link.to;
            return (
              <button
                key={link.to}
                onClick={() => {
                  navigate(link.to);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition cursor-pointer ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary/70"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
