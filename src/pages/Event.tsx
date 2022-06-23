import { MonitorPlay } from "phosphor-react";

import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1">
            <div className="flex flex-col h-full items-center justify-center">
              <MonitorPlay size={120} />
              <span className="text-gray-100 text-xl mt-6">
                Ops, Parece que você ainda não escolheu nenhum vídeo!
              </span>
              <span className="text-gray-200 text-sm mt-2">
                Clique em um dos cards da barra lateral da direita para escolher
                um vídeo.
              </span>
            </div>
          </div>
        )}

        <Sidebar />
      </main>
    </div>
  );
}
