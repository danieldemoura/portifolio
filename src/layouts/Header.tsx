export function Header() {
  return (
    <header className="min-h-screen bg-[url(./bg-header.svg)] bg-cover bg-center bg-no-repeat px-5 pt-8">
      <div className="container mx-auto">
        <ul className="font-body flex justify-center gap-8 rounded-full border border-gray-700 bg-white/5 px-[2.875rem] py-6 font-medium text-slate-300 shadow-[0px_4px_30px_1px_rgba(0,0,0,0.4)] backdrop-blur-sm">
          <li>
            <a href="#sobremim" className="text-lg uppercase">
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#projetos" className="text-lg uppercase">
              Projetos
            </a>
          </li>
        </ul>
        <h1 className="font-display mt-24 text-center text-[2rem] text-white">
          Desenvolvedor Front-End apaixonado por UI Design
        </h1>
        <p className="font-body mt-14 text-slate-400">
          A interface é a vitrine da sua empresa na internet. Uma UI bem
          projetada transmite segurança, profissionalismo e a qualidade do seu
          produto ou serviço, gerando uma experiência única para o usuário.
        </p>
        <div className="mt-28 flex flex-col items-center gap-4">
          <img src="./arrow-down-broken.svg" alt="" />
          <span className="font-body text-white uppercase">Scroll</span>
        </div>
      </div>
    </header>
  );
}
