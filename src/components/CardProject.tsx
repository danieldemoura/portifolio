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
    <article className="h-full w-fit space-y-4 overflow-hidden rounded-[2rem] border-2 border-sky-950 bg-[rgba(170,170,170,0.1)] pb-6 backdrop-blur-xl">
      <header className="flex w-full items-center justify-between bg-gray-950 px-6 py-3 text-center transition duration-300 lg:text-2xl">
        <span className="font-display max-w-37 truncate italic peer-hover:text-black">
          {title}
        </span>
        <a
          className="font-body peer rounded-lg border border-yellow-700 bg-yellow-400 px-7 text-lg font-semibold text-black transition hover:bg-yellow-700 hover:text-white"
          href={url}
          target="_blank"
        >
          Deploy
        </a>
      </header>
      <figure className="flex h-full w-full flex-col gap-4 px-6 lg:gap-8">
        <img
          className="w-64 rounded-lg shadow-xl shadow-black/50 lg:w-87.5 lg:shadow-black/70"
          src={photo}
          alt=""
        />
        <figcaption>
          <p className="sr-only">
            Esse projeto foi desenvolvido utilizando as seguintes tecnologias
          </p>
          <ul className="flex gap-[1.125rem]">
            {icons.map((icon) => {
              return (
                <li key={icon.title}>
                  <img
                    className="size-8 drop-shadow-2xl drop-shadow-black/60 lg:size-12 lg:w-14"
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
    </article>
  );
}
