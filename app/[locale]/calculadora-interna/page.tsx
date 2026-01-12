"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { InternalCalculator } from "@/components/InternalCalculator";

export default function InternalCalculatorPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const correctPassword = process.env.NEXT_PUBLIC_CALCULATOR_PASSWORD;

    if (correctPassword && password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Senha incorreta");
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Calculadora Interna
            </h1>
            <p className="text-slate-600">
              Acesso restrito para equipe CodaCrew
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Senha de Acesso
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Digite a senha"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
            >
              Acessar Calculadora
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">
              💡 Dica: Use esta calculadora para estimar projetos internamente
              antes da call com o cliente
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-1">
                  Calculadora Interna de Projetos
                </h1>
                <p className="text-slate-600">
                  Ferramenta para estimativa rápida - não compartilhar com
                  clientes
                </p>
              </div>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
              >
                🔒 Sair
              </button>
            </div>
          </div>

          <InternalCalculator />

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Instruções de Uso
            </h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>
                  Esta calculadora usa os <strong>preços base</strong> do nosso
                  documento de referência
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>
                  Use-a para ter uma <strong>noção rápida</strong> antes da call
                  de discovery
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>
                  Na call, <strong>ajuste os valores</strong> baseado em:
                  complexidade, urgência, stack específica
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>
                  <strong>Nunca</strong> mencione estes valores exatos ao
                  cliente - use ranges e converse sobre escopo
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>
                  Senha atual:{" "}
                  <code className="bg-blue-200 px-2 py-1 rounded">
                    codacrew2024
                  </code>{" "}
                  (alterar no código se necessário)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
