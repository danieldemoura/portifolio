import { EmailSVG } from "@/components/svgs/EmailSVG";
import { LinkedinSVG } from "@/components/svgs/LinkedinSVG";
import { WhatsappSVG } from "@/components/svgs/WhatsappSVG";

export function CTASection() {
  return (
    <section className="bg-purple-600/20 bg-[url(/bg-cta.svg)] bg-fixed px-5 py-12 lg:py-36">
      <header className="space-y-6">
        <h2 className="font-display text-center text-[2.125rem] text-white lg:text-6xl">
          Vamos trabalhar juntos?
        </h2>
        <p className="font-body mx-auto text-center text-slate-400 lg:max-w-[56.625rem] lg:text-lg">
          Se, após conhecer minhas competências e qualidade, você acredita que
          posso ser a melhor opção para impulsionar seus projetos, entre em
          contato comigo via LinkedIn, e-mail ou WhatsApp.
        </p>
      </header>
      <div className="mt-9 flex flex-col gap-6 lg:flex-row lg:justify-center lg:gap-11">
        <a
          className="font-body flex items-center justify-center gap-3.5 rounded-[0.5rem] border border-yellow-700 bg-yellow-400 px-4 py-2 text-center text-xl font-semibold text-black transition duration-300 hover:bg-black/30 hover:text-white"
          href="https://www.linkedin.com/in/danieldms/"
          target="_blank"
        >
          <LinkedinSVG className="w-7" />
          <span>Linkedin</span>
        </a>
        <a
          className="font-body h flex items-center justify-center gap-3.5 rounded-[0.5rem] border border-yellow-700 bg-yellow-400 px-4 py-2 text-center text-xl font-semibold text-black transition duration-300 hover:bg-black/30 hover:text-white"
          href=""
        >
          <EmailSVG className="w-7" />
          <span>E-mail</span>
        </a>
        <a
          className="font-body flex items-center justify-center gap-3.5 rounded-[0.5rem] border border-yellow-700 bg-yellow-400 px-4 py-2 text-center text-xl font-semibold text-black transition duration-300 hover:bg-black/30 hover:text-white"
          href="https://api.whatsapp.com/send?phone=11990131215"
          target="_blank"
        >
          <WhatsappSVG className="w-7" />
          <span>Whatsapp</span>
        </a>
      </div>
    </section>
  );
}
