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
    <section className="mt-11 space-y-28 px-5 pb-[5.5rem]" id="sobremim">
      <div className="space-y-14">
        <header>
          <h2 className="font-body text-center text-[1.75rem] text-slate-400 uppercase">
            Sobre mim
          </h2>
        </header>
        <ul className="grid grid-cols-3 place-items-center gap-x-10 gap-y-6">
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
      <div>
        <h3 className="font-display text-[2.125rem] text-white">
          Olá, eu sou o Daniel, desenvolvedor Front-End
        </h3>
        <p className="font-body mt-6 mb-[1.125rem] text-slate-400">
          Sou formado em Técnico em Informática pela Etec Dr. Emílio Hernández
          Aguilar e, atualmente, estou cursando Ciência da Computação EaD pela
          Universidade Estácio de Sá.
        </p>
        <p className="font-body text-slate-400">
          Sou apaixonado por programação, com foco especial no desenvolvimento
          front-end, e tenho grande interesse em UI Design. Acredito que dominar
          o UI Design é essencial para se destacar nessa área, permitindo a
          criação de interfaces que não só encantam, mas também transmitem
          segurança, profissionalismo e qualidade. Dessa forma, garanto que a
          experiência do usuário seja única e que a marca seja percebida como
          confiável e inovadora.
        </p>
        <section>
          <h3 className="font-display mt-28 mb-6 text-[2.125rem] text-white">
            Formação
          </h3>
          <dl className="font-body grid grid-cols-1 space-y-4 text-white">
            <div className="space-y-1">
              <dt className="text-slate text-xl">Ciência da Computação</dt>
              <dd className="space-y-1">
                <p className="text-lg text-slate-300">Estácio de Sá</p>
                <p className="text-slate-400">2023 - 2027</p>
              </dd>
            </div>
            <div className="space-y-1">
              <dt className="text-slate text-xl">Formação Front-End</dt>
              <dd className="space-y-1">
                <p className="text-lg text-slate-300">
                  ONE (Oracle Next Education)
                </p>
                <p className="text-slate-400">2022 - 6 meses</p>
              </dd>
            </div>
            <div className="space-y-1">
              <dt className="text-slate text-xl">Técnico em Informática</dt>
              <dd className="space-y-1">
                <p className="text-lg text-slate-300">
                  Etec Dr. Emílio Hernandez Aguilar
                </p>
                <p className="text-slate-400">2016 - 2017</p>
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </section>
  );
}
