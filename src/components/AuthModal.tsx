import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { UserProfile, salvarUsuario, getInitialsAvatarUrl, getInitials } from "../utils/storage";

interface AuthModalProps {
  user: UserProfile;
  onSalvar: (user: UserProfile) => void;
  onFechar: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ user, onSalvar, onFechar }) => {
  const [nome, setNome] = useState(user.nome === "Visitante Consciente" ? "" : user.nome);
  const [email, setEmail] = useState(user.email === "visitante@saudeemacao.org" ? "" : user.email);

  const nomeExibicao = nome.trim() || "Consumidor Consciente";
  const avatarUrlAtual = getInitialsAvatarUrl(nomeExibicao, 128);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novoUsuario: UserProfile = {
      id: user.id,
      nome: nome.trim() || "Consumidor Consciente",
      email: email.trim() || "usuario@saudeemacao.org",
      avatar_url: avatarUrlAtual,
      logado: true
    };
    salvarUsuario(novoUsuario);
    onSalvar(novoUsuario);
    onFechar();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌱</span>
            <h3 className="font-display text-xl font-bold text-primary">
              Identificação no Saúde em Ação
            </h3>
          </div>
          <button
            onClick={onFechar}
            className="p-1.5 rounded-xl hover:bg-secondary text-muted-foreground cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Seu progresso e pontos ficam salvos diretamente no seu dispositivo com total privacidade. Preencha seus dados para personalizar sua jornada.
        </p>

        {/* Foto de perfil gerada com as iniciais */}
        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-secondary/30 border border-border">
          <img
            src={avatarUrlAtual}
            alt={`Foto de perfil com as iniciais de ${nomeExibicao}`}
            className="w-14 h-14 rounded-full shadow-sm object-cover border-2 border-primary shrink-0"
          />
          <div className="text-xs space-y-0.5">
            <div className="font-bold text-foreground flex items-center gap-1.5">
              Foto de Perfil ({getInitials(nomeExibicao)})
            </div>
            <p className="text-muted-foreground leading-snug">
              Sua foto de perfil é gerada automaticamente com as iniciais do seu nome.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-foreground mb-1">
              Seu nome ou apelido
            </label>
            <input
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Alessandra, Lara, Pedro..."
              className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-foreground mb-1">
              E-mail de contato
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
              className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full rounded-full bg-primary text-primary-foreground font-bold py-3 text-sm hover:opacity-90 transition cursor-pointer shadow-md"
            >
              Salvar Perfil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
