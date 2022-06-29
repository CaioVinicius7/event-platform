import { MonitorPlay } from "phosphor-react";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const [visibility, setVisibility] = useState<"hidden" | "absolute">("hidden");

  const { slug } = useParams<{ slug: string }>();

  function changeSidebarVisibility(visible: boolean) {
    visible ? setVisibility("absolute") : setVisibility("hidden");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header changeSidebarVisibility={changeSidebarVisibility} />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} sidebarVisibility={visibility} />
        ) : (
          <div className="flex-1">
            <div className="flex flex-col h-full items-center justify-center">
              <MonitorPlay size={120} />
              <span className="text-gray-100 text-sm md:text-xl mt-6 flex">
                Ops, Parece que você ainda não escolheu nenhum vídeo!
              </span>
              <span className="text-gray-200 text-xs mt-2">
                Escolha umas das aulas disponíveis para começar
              </span>
            </div>
          </div>
        )}

        <Sidebar visibility={visibility} />
      </main>
    </div>
  );
}
