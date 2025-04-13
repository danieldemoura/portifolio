import photo1 from "@assets/png/1.png";
import photo2 from "@assets/png/2.png";
import photo3 from "@assets/png/3.png";
import js from "@assets/svg/JS.svg";
import react from "@assets/svg/REACT.svg";
import figma from "@assets/svg/FIGMA.svg";
import { CardProject } from "@/components/CardProject";

export function ProjectsSection() {
  return (
    <section
      className="container mx-auto flex flex-col bg-[url(/bg-project.svg)] bg-size-[92rem] bg-fixed bg-position-[97%_20%] bg-no-repeat px-5 pb-32 lg:grid lg:grid-cols-12 lg:bg-top lg:pt-15"
      id="projetos"
    >
      <header className="order-2 lg:col-span-5">
        <h2 className="font-body text-center text-[1.75rem] text-gray-400 uppercase">
          Projetos
        </h2>
      </header>
      <div className="order-1 lg:col-span-7">
        <h3 className="font-display text-[2.125rem] text-white lg:max-w-[46.125rem] lg:text-6xl">
          Meus melhores projetos de Front-End
        </h3>
        <p className="font-body mt-9 mb-[4.5rem] text-slate-400 lg:text-lg">
          Explore uma seleção de projetos que demonstram minha expertise em
          desenvolvimento front-end. Aqui você encontrará soluções desenvolvidas
          desde JavaScript puro até aplicações construídas com ReactJS e
          estilizadas com Tailwind CSS. Nos projetos marcados com o ícone do
          Figma, você verá os designs originais criados por mim, evidenciando o
          meu cuidado e a atenção aos detalhes na experiência do usuário.
        </p>
      </div>
      <div className="order-3 mt-16 space-y-18 text-white lg:col-span-12 lg:grid lg:grid-cols-3 lg:gap-16 lg:space-y-0">
        <CardProject
          photo={photo1}
          title="Dongflix - 2022"
          icons={[
            { img: js, title: "javascript" },
            { img: react, title: "ReactJS" },
            { img: figma, title: "Figma" },
          ]}
          url="https://github.com/danieldemoura/dongflix"
        />

        <CardProject
          photo={photo2}
          title="Learning Target - 2023"
          icons={[
            { img: js, title: "javascript" },
            { img: figma, title: "Figma" },
          ]}
          url="https://github.com/danieldemoura/learning-target"
        />

        <CardProject
          photo={photo3}
          title="Otaku China - 2023"
          icons={[{ img: js, title: "javascript" }]}
          url="https://github.com/danieldemoura/challange-one-sprint-03"
        />
      </div>
    </section>
  );
}
