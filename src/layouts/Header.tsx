export function Header() {
  return (
    <header className="min-h-screen bg-[url(/bg-header.svg)] bg-auto bg-fixed bg-center bg-no-repeat px-5 xl:bg-size-[106%]">
      <div className="container mx-auto flex min-h-[103vh] flex-col pt-8 pb-13">
        <ul className="font-body mx-auto flex max-w-[25.5rem] justify-center gap-8 rounded-full border border-gray-700 bg-white/5 px-[2.875rem] py-6 font-medium text-slate-300 shadow-[0px_4px_30px_1px_rgba(0,0,0,0.4)] backdrop-blur-sm">
          <li>
            <a
              href="#sobremim"
              className="text-lg uppercase hover:text-yellow-500"
            >
              Sobre mim
            </a>
          </li>
          <li>
            <a
              href="#projetos"
              className="text-lg uppercase hover:text-yellow-500"
            >
              Projetos
            </a>
          </li>
        </ul>
        <div className="flex flex-grow flex-col justify-between">
          <div className="mx-auto sm:mt-[6.5rem]">
            <h1 className="font-display mt-24 max-w-[63rem] text-center text-[2rem] text-white sm:text-5xl xl:text-[5rem]">
              Desenvolvedor Front-End apaixonado por UI Design
            </h1>
            <p className="font-body mt-14 max-w-[63rem] text-slate-400 sm:text-center lg:text-2xl">
              A interface é a vitrine da sua empresa na internet. Uma UI bem
              projetada transmite segurança, profissionalismo e a qualidade do
              seu produto ou serviço, gerando uma experiência única para o
              usuário.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img
              className="animate-bounce"
              src="./arrow-down-broken.svg"
              alt=""
            />
            <span className="font-body text-white uppercase xl:font-[300]">
              Role a página
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
