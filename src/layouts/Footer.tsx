import { GithubSVG } from "@/components/svgs/GithubSVG";
import { LinkedinSVG } from "@/components/svgs/LinkedinSVG";
import { YoutubeSVG } from "@/components/svgs/YoutubeSVG";

export function Footer() {
  return (
    <footer className="flex flex-col gap-12 py-16">
      <div className="mx-auto w-fit">
        <ul className="flex gap-8">
          <li>
            <a
              className="grid h-11 w-11 place-items-center rounded-lg border border-sky-500 bg-sky-600 text-white"
              href="https://github.com/danieldemoura"
              target="_blank"
            >
              <GithubSVG className="w-5" />
            </a>
          </li>
          <li>
            <a
              className="grid h-11 w-11 place-items-center rounded-lg border border-sky-500 bg-sky-600 text-white"
              href="https://www.linkedin.com/in/danieldms/"
              target="_blank"
            >
              <LinkedinSVG className="w-5" />
            </a>
          </li>
          <li>
            <a
              className="grid h-11 w-11 place-items-center rounded-lg border border-sky-500 bg-sky-600 text-white"
              href="https://www.youtube.com/@danielx5453/videos"
              target="_blank"
            >
              <YoutubeSVG className="w-5" />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-body text-center">
        <strong className="text-lg font-normal text-slate-300">
          Portfolio Front-End - Daniel
        </strong>
        <p className="text-slate-400">Todos os direitos reservados</p>
        <p className="text-slate-500">2023 - 2025</p>
      </div>
    </footer>
  );
}
