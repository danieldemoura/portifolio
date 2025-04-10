import { EmailSVG } from "@/components/svgs/EmailSVG";
import { LinkedinSVG } from "@/components/svgs/LinkedinSVG";
import { WhatsappSVG } from "@/components/svgs/WhatsappSVG";

export function CTASection() {
  return (
    <section className="bg-purple-600/20 bg-[url(./bg-cta.svg)] px-5 py-12">
      <header className="space-y-6">
        <h2 className="font-display text-center text-[2.125rem] text-white">
          Vamos trabalhar juntos?
        </h2>
        <p className="font-body text-center text-slate-400">
          Se, após conhecer minhas competências e qualidade, você acredita que
          posso ser a melhor opção para impulsionar seus projetos, entre em
          contato comigo via LinkedIn, e-mail ou WhatsApp.
        </p>
      </header>
      <div className="mt-9 flex flex-col gap-6">
        <a
          className="font-body flex items-center justify-center gap-3.5 rounded-[0.5rem] bg-yellow-400 px-4 py-2 text-center text-xl font-semibold text-black"
          href="https://www.linkedin.com/in/danieldms/"
          target="_blank"
        >
          <LinkedinSVG className="w-7" />
          <span>Linkedin</span>
        </a>
        <a
          className="font-body flex items-center justify-center gap-3.5 rounded-[0.5rem] bg-yellow-400 px-4 py-2 text-center text-xl font-semibold text-black"
          href=""
        >
          <EmailSVG className="w-7" />
          <span>E-mail</span>
        </a>
        <a
          className="font-body flex items-center justify-center gap-3.5 rounded-[0.5rem] bg-yellow-400 px-4 py-2 text-center text-xl font-semibold text-black"
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
