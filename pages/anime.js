import siteMetadata from "@/data/siteMetadata";
import AnimeFav from "@/data/AnimeFav";
import Card from "@/components/Card";
import { PageSEO } from "@/components/SEO";

export async function getStaticProps({ locale, locales }) {
  return { props: { locale, availableLocales: locales } };
}

export default function Projects({ locale, availableLocales }) {
  return (
    <>
      <PageSEO
        title={`Anime - ${siteMetadata.title}`}
        description={siteMetadata.description}
        availableLocales={availableLocales}
      />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Anime
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My Favorite Anime
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {AnimeFav.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
