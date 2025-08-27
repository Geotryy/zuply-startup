import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Solicitacoes from "./pages/Solicitacoes.jsx";
import Aprovacoes from "./pages/Aprovacoes.jsx";
import Cotacoes from "./pages/Cotacoes.jsx";
import Estoque from "./pages/Estoque.jsx";
import Usuarios from "./pages/Usuarios.jsx";
import Fornecedores from "./pages/Fornecedores.jsx";
import Chat from "./pages/Chat.jsx";

export default function App() {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-6xl p-6">
          <Routes>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/solicitacoes" element={<Solicitacoes />} />
            <Route path="/aprovacoes" element={<Aprovacoes />} />
            <Route path="/cotacoes" element={<Cotacoes />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/fornecedores" element={<Fornecedores />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<div>Página não encontrada.</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
