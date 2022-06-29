import classNames from "classnames";
import { Calendar } from "phosphor-react";

import { useGetLessonsQuery } from "../graphql/generated";

import { Lesson } from "./Lesson";

interface SidebarProps {
  visibility: boolean;
}

export function Sidebar({ visibility }: SidebarProps) {
  const { data } = useGetLessonsQuery();

  if (!data) {
    return (
      <aside className="hidden lg:block w-[348px] bg-gray-700 p-6 border-l border-gray-600">
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
          Cronograma de aulas
        </span>

        <div className="flex-1">
          <div className="flex flex-col  items-center justify-center">
            <Calendar size={60} />
            <span className="text-gray-100 text-sm mt-6 text-center">
              Ainda não deixamos nenhum conteúdo disponível, aguarde até a data
              de lançamento.
            </span>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className={classNames(
        " w-full lg:relative lg:block lg:w-[348px] bg-gray-700 p-6 border-l border-gray-600",
        {
          absolute: visibility,
          hidden: !visibility
        }
      )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
