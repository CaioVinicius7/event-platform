import { FormEvent, useState } from "react";

import { Logo } from "../components/Logo";
import imgUrl from "../assets/code-mockup.png";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email
      }
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row items-center justify-between mt-20 sm:px-8 md:px-4">
        <div className="flex flex-col items-center lg:items-start justify-center max-w-[640px] lg:max-w-[610px] text-center md:text-start md:pr-1">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight px-4 sm:px-0">
            Construa uma
            <strong className="text-blue-500"> aplicação completa</strong>, do
            zero, com <strong className="text-blue-500"> React </strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed px-4 sm:px-0">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded mt-10 w-full md:w-[480px] lg:w-[355px]">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              placeholder="Seu nome completo"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(event) => setName(event.target.value)}
            />

            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src={imgUrl} alt="code-mockup" className="mt-4 lg:mt-10" />
    </div>
  );
}
