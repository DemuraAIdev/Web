import prisma from "@/lib/prisma";
import Guestbook from "@/components/Guestbook";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
export default function GuestbookPage({
  fallbackData,
  locale,
  availableLocales,
}) {
  return (
    <>
      <PageSEO
        title={`GuestBook - ${siteMetadata.title}`}
        description={siteMetadata.description}
        availableLocales={availableLocales}
      />
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Guestbook
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Leave a comment below. It could be anything – appreciation,
          information, wisdom, or even humor. Surprise me!
        </p>
        <Guestbook fallbackData={fallbackData} />
      </div>
    </>
  );
}

export async function getStaticProps({ locale, locales }) {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: "desc",
    },
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString(),
  }));

  return {
    props: {
      fallbackData,
      locale,
      availableLocales: locales,
    },
    revalidate: 60,
  };
}
