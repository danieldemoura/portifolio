import { GithubSVG } from "./svgs/GithubSVG";

type Image = {
  img: string;
  title: string;
};

type CardProjectProps = {
  photo: string;
  icons: Image[];
  title: string;
  url: string;
};

export function CardProject({ title, photo, icons, url }: CardProjectProps) {
  return (
    <article
      style={{ backgroundImage: `url(${photo})` }}
      className="group/cardp relative overflow-hidden rounded-[2rem] border-2 border-sky-950 bg-size-[75%_70%] bg-center bg-no-repeat"
    >
      <div className="h-full space-y-4 bg-[rgba(170,170,170,0.1)] py-5 backdrop-blur-xl">
        <header className="font-display w-full text-center italic lg:text-2xl">
          {title}
        </header>
        <figure className="flex h-full w-full flex-col items-center gap-4 lg:gap-8">
          <img
            className="w-64 rounded-lg border-2 border-sky-900 shadow-xl shadow-black/50 lg:w-87.5 lg:shadow-black/70"
            src={photo}
            alt=""
          />
          <figcaption>
            <p className="sr-only">
              Esse projeto foi desenvolvido utilizando as seguintes tecnologias
            </p>
            <ul className="flex justify-center gap-[1.125rem]">
              {icons.map((icon) => {
                return (
                  <li key={icon.title}>
                    <img
                      className="w-8 drop-shadow-2xl drop-shadow-black/60 lg:w-14"
                      src={icon.img}
                      alt=""
                    />
                    <span className="sr-only">{icon.title}</span>
                  </li>
                );
              })}
            </ul>
          </figcaption>
        </figure>
      </div>

      <div className="absolute top-0 grid h-full w-full -translate-x-315 place-items-center rounded-[2rem] bg-zinc-900/50 backdrop-blur-lg transition duration-800 group-hover/cardp:translate-x-0">
        <a
          href={url}
          target="_blank"
          className="group/deploy grid place-items-center text-lg drop-shadow-2xl drop-shadow-zinc-900 lg:text-2xl"
        >
          <GithubSVG className="size-20 group-hover/deploy:text-yellow-500" />
          <span className="font-display group-hover/deploy:text-yellow-500">
            Acessar Projeto
          </span>
        </a>
      </div>
    </article>
  );
}
