import Link from "@/components/Link";
import { PageSEO } from "@/components/SEO";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import formatDate from "@/lib/utils/formatDate";
import { TypedBios } from "@/components/type";
import { BlogNewsletterForm } from "@/components/NewsletterForm";
import Analy from "@/components/Analys";
import useTranslation from "next-translate/useTranslation";

const MAX_DISPLAY = 2;

export async function getStaticProps({ locale, defaultLocale, locales }) {
  const otherLocale = locale !== defaultLocale ? locale : "";
  const posts = await getAllFilesFrontMatter("blog", otherLocale);

  return { props: { posts, locale, availableLocales: locales } };
}

export default function Home({ posts, locale, availableLocales }) {
  const { t } = useTranslation("common");
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
        availableLocales={availableLocales}
      />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div
            className="animate-text bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA]
            bg-clip-text
            text-transparent
            "
          >
            <h1 className="sm:text-8.5xl tracking-tightest my-28 select-none text-center text-7xl font-extrabold leading-none sm:my-10">
              Abdul Vaiz Vahry Iskandar
            </h1>
          </div>
          <div>
            <TypedBios />
            <p className="text-lg leading-7 text-black dark:text-gray-400">
              {t("description")}
              <Link
                className=" bg-cust1 umami--home--navigation ml-2 font-medium leading-6"
                href="/menu"
              >
                Navigation →
              </Link>
            </p>
          </div>
        </div>
        <h2 className="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9">
          Latest blog posts
        </h2>
        <ul className="grid grid-cols-1 divide-y">
          {!posts.length && "No posts found."}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter;
            return (
              <li
                key={slug}
                className="mt-8 transform animate-text rounded-xl bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA] p-[5px] shadow-xl transition-all hover:scale-[1.01]  dark:shadow-none "
              >
                <div className="flex h-full flex-col justify-between  rounded-lg bg-white p-8 transition dark:bg-black ">
                  <article>
                    <div className="space-y-2  xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="mt-5 flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}

      {siteMetadata.newsletter.provider !== "" && (
        <div className="flex items-center justify-center pt-4 transition-all hover:scale-[1.01]">
          <BlogNewsletterForm />
        </div>
      )}

      <Analy />
    </>
  );
}
