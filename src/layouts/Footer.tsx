import { GithubSVG } from "@/components/svgs/GithubSVG";
import { LinkedinSVG } from "@/components/svgs/LinkedinSVG";
import { YoutubeSVG } from "@/components/svgs/YoutubeSVG";

export function Footer() {
  return (
    <footer className="relative z-10 bg-slate-950 px-5">
      <div className="container mx-auto flex flex-col gap-12 py-16 lg:flex-row-reverse lg:items-center lg:justify-between">
        <div className="mx-auto w-fit lg:mx-0">
          <ul className="flex gap-8 lg:gap-12">
            <li>
              <a
                className="grid size-11 place-items-center rounded-lg border border-sky-500 bg-sky-600 text-white transition duration-300 hover:border-sky-800 hover:bg-sky-700/30 lg:size-19"
                href="https://github.com/danieldemoura"
                target="_blank"
              >
                <GithubSVG className="w-5 lg:w-9" />
              </a>
            </li>
            <li>
              <a
                className="grid size-11 place-items-center rounded-lg border border-sky-500 bg-sky-600 text-white transition duration-300 hover:border-sky-800 hover:bg-sky-700/30 lg:size-19"
                href="https://www.linkedin.com/in/danieldms/"
                target="_blank"
              >
                <LinkedinSVG className="w-5 lg:w-9" />
              </a>
            </li>
            <li>
              <a
                className="grid size-11 place-items-center rounded-lg border border-sky-500 bg-sky-600 text-white transition duration-300 hover:border-sky-800 hover:bg-sky-700/30 lg:size-19"
                href="https://www.youtube.com/@danielx5453/videos"
                target="_blank"
              >
                <YoutubeSVG className="w-5 lg:w-9" />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-body text-center lg:text-left">
          <strong className="text-lg font-normal text-slate-300 lg:text-xl">
            Portfolio Front-End - Daniel
          </strong>
          <p className="text-slate-400 lg:text-xl">
            Todos os direitos reservados
          </p>
          <p className="text-slate-500 lg:text-xl">2023 - 2025</p>
        </div>
      </div>
    </footer>
  );
}
