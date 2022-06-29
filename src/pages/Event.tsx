import classNames from "classnames";
import { MonitorPlay } from "phosphor-react";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const [visibility, setVisibility] = useState(false);

  const { slug } = useParams<{ slug: string }>();

  function changeSidebarVisibility(visible: boolean) {
    visible ? setVisibility(true) : setVisibility(false);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header changeSidebarVisibility={changeSidebarVisibility} />
      <main
        className={classNames("flex flex-1", {
          "bg-gray-700": visibility
        })}
      >
        {slug ? (
          <Video lessonSlug={slug} sidebarVisibility={visibility} />
        ) : (
          <div
            className={classNames("flex-1", {
              hidden: visibility
            })}
          >
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
