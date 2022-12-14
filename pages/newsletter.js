import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import { BlogNewsletterForm } from "@/components/NewsletterForm";

export async function getStaticProps({ locale, locales }) {
  return { props: { locale, availableLocales: locales } };
}

export default function Newsletter({ locale, availableLocales }) {
  return (
    <>
      <PageSEO
        title={`Newsletter - ${siteMetadata.title}`}
        description={"Subscribe now"}
        availableLocales={availableLocales}
      />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Newsletter
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My newsletter provides a behind-the-scenes look into what I'm
            working on and writing about. I frequently share some of my favorite
            articles I've read, as well as anything fascinating about
            technology.
          </p>
        </div>
      </div>
      {siteMetadata.newsletter.provider !== "" && (
        <div className="flex items-center justify-center pt-4">
          <BlogNewsletterForm />
        </div>
      )}
    </>
  );
}
