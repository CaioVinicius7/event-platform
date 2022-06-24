import { gql, useQuery } from "@apollo/client";
import { Calendar } from "phosphor-react";

import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      lessonType
      availableAt
    }
  }
`;

interface GEtLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

interface SidebarProps {
  visibility: "hidden" | "absolute";
}

export function Sidebar({ visibility }: SidebarProps) {
  const { data } = useQuery<GEtLessonsQueryResponse>(GET_LESSONS_QUERY);

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
      className={`${visibility} w-full lg:relative lg:block lg:w-[348px] bg-gray-700 p-6 border-l border-gray-600`}
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
