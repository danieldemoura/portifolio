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
      className="flex flex-col bg-[url(./bg-project.svg)] bg-size-[92rem] bg-position-[97%_20%] bg-no-repeat px-5 pb-32"
      id="projetos"
    >
      <header className="order-2">
        <h2 className="font-body text-center text-[1.75rem] text-gray-400 uppercase">
          Projetos
        </h2>
      </header>
      <div className="order-1">
        <h3 className="font-display text-[2.125rem] text-white">
          Meus melhores projetos de Front-End
        </h3>
        <p className="font-body mt-9 mb-[4.5rem] text-slate-400">
          Explore uma seleção de projetos que demonstram minha expertise em
          desenvolvimento front-end. Aqui você encontrará soluções desenvolvidas
          desde JavaScript puro até aplicações construídas com ReactJS e
          estilizadas com Tailwind CSS. Nos projetos marcados com o ícone do
          Figma, você verá os designs originais criados por mim, evidenciando o
          meu cuidado e a atenção aos detalhes na experiência do usuário.
        </p>
      </div>
      <div className="order-3 space-y-18 text-white mt-16">
        <CardProject
          photo={photo1}
          title="Dongflix - 2022"
          icons={[
            { url: js, title: "javascript" },
            { url: react, title: "ReactJS" },
            { url: figma, title: "Figma" },
          ]}
        />

        <CardProject
          photo={photo2}
          title="Otaku China - 2023"
          icons={[
            { url: react, title: "ReactJS" },
            { url: figma, title: "Figma" },
          ]}
        />

        <CardProject
          photo={photo3}
          title="Otaku China - 2023"
          icons={[{ url: js, title: "javascript" }]}
        />
      </div>
    </section>
  );
}
