import html from "@assets/svg/HTML.svg";
import css from "@assets/svg/CSS.svg";
import js from "@assets/svg/JS.svg";
import react from "@assets/svg/REACT.svg";
import tailwdind from "@assets/svg/TAILWINDCSS.svg";
import figma from "@assets/svg/FIGMA.svg";
import chatGPT from "@assets/svg/CHATGPT.svg";
import vscode from "@assets/svg/VSCODE.svg";
import git from "@assets/svg/GIT.svg";

export function AboutSection() {
  return (
    <section
      id="sobremim"
      className="bg-linear-30 bg-[url(/bg-about.svg),url(/bg-about.png)] bg-no-repeat bg-cover pt-2.5 bg-fixed"
    >
      <div className="container mx-auto mt-11 space-y-28 px-5 pb-[5.5rem] xl:grid xl:grid-cols-12 xl:justify-items-center">
        <div className="mx-auto max-w-[19rem] space-y-14 xl:col-span-2 xl:space-y-10">
          <header>
            <h2 className="font-body text-center text-[1.75rem] text-slate-400 uppercase xl:text-left">
              Sobre mim
            </h2>
          </header>
          <ul className="grid grid-cols-3 place-items-center gap-x-10 gap-y-6 xl:grid-cols-2">
            <li>
              <img src={html} alt="" />
            </li>
            <li>
              <img src={css} alt="" />
            </li>
            <li>
              <img src={js} alt="" />
            </li>
            <li>
              <img src={react} alt="" />
            </li>
            <li>
              <img src={tailwdind} alt="" />
            </li>
            <li>
              <img src={figma} alt="" />
            </li>
            <li>
              <img src={chatGPT} alt="" />
            </li>
            <li>
              <img src={vscode} alt="" />
            </li>
            <li>
              <img src={git} alt="" />
            </li>
          </ul>
        </div>
        <div className="xl:col-span-10 xl:max-w-[60rem]">
          <h3 className="font-display text-[2.125rem] text-white lg:text-6xl">
            Olá, eu sou o Daniel, desenvolvedor Front-End
          </h3>
          <p className="font-body mt-6 mb-[1.125rem] text-slate-400 lg:text-lg">
            Sou formado em Técnico em Informática pela Etec Dr. Emílio Hernández
            Aguilar e, atualmente, estou cursando Ciência da Computação EaD pela
            Universidade Estácio de Sá.
          </p>
          <p className="font-body text-slate-400 lg:text-lg">
            Sou apaixonado por programação, com foco especial no desenvolvimento
            front-end, e tenho grande interesse em UI Design. Acredito que
            dominar o UI Design é essencial para se destacar nessa área,
            permitindo a criação de interfaces que não só encantam, mas também
            transmitem segurança, profissionalismo e qualidade. Dessa forma,
            garanto que a experiência do usuário seja única e que a marca seja
            percebida como confiável e inovadora.
          </p>
          <section>
            <h3 className="font-display mt-28 mb-6 text-[2.125rem] text-white lg:text-[2.625rem]">
              Formação
            </h3>
            <dl className="font-body grid grid-cols-1 space-y-4 text-white xl:grid-cols-2">
              <div className="space-y-1">
                <dt className="text-slate text-xl lg:text-[1.625rem]">
                  Ciência da Computação
                </dt>
                <dd className="space-y-1">
                  <p className="text-lg text-slate-300 lg:text-xl">
                    Estácio de Sá
                  </p>
                  <p className="text-slate-400 lg:text-lg">2023 - 2027</p>
                </dd>
              </div>
              <div className="space-y-1 xl:ml-30">
                <dt className="text-slate text-xl lg:text-[1.625rem]">
                  Formação Front-End
                </dt>
                <dd className="space-y-1">
                  <p className="text-lg text-slate-300 lg:text-xl">
                    ONE (Oracle Next Education)
                  </p>
                  <p className="text-slate-400 lg:text-lg">2022 - 6 meses</p>
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-slate text-xl lg:text-[1.625rem]">
                  Técnico em Informática
                </dt>
                <dd className="space-y-1">
                  <p className="text-lg text-slate-300 lg:text-xl">
                    Etec Dr. Emílio Hernandez Aguilar
                  </p>
                  <p className="text-slate-400 lg:text-lg">2016 - 2017</p>
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </section>
  );
}
