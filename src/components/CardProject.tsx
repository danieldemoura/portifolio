type Image = {
  url: string;
  title: string;
};

type CardProjectProps = {
  photo: string;
  icons: Image[];
  title: string;
};

export function CardProject({ title, photo, icons }: CardProjectProps) {
  return (
    <article
      style={{ backgroundImage: `url(${photo})` }}
      className="overflow-hidden rounded-[2rem] border-2 border-sky-950 bg-size-[75%_70%] bg-center bg-no-repeat"
    >
      <div className="h-full space-y-4 bg-[rgba(170,170,170,0.1)] py-5 backdrop-blur-xl">
        <header className="font-display w-full text-center italic">
          {title}
        </header>
        <figure className="flex h-full w-full flex-col items-center gap-4">
          <img
            className="w-64 rounded-lg border-2 border-sky-900 shadow-xl shadow-black/50"
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
                    <img className="w-8" src={icon.url} alt="" />
                    <span className="sr-only">{icon.title}</span>
                  </li>
                );
              })}
            </ul>
          </figcaption>
        </figure>
      </div>
    </article>
  );
}
