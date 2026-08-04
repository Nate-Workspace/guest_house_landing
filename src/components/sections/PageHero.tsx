import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  priority = true,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[42vh] items-end overflow-hidden md:min-h-[48vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-text/70 via-text/40 to-text/25" />

      <div className="relative z-10 container-content w-full pb-12 pt-28 md:pb-16 md:pt-32">
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-surface/80">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 font-display text-4xl text-surface md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface/90 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
