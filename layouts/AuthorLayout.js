import SocialIcon from "@/components/social-icons";
import Image from "@/components/Image";
import { PageSEO } from "@/components/SEO";
import Comments from "@/components/comments";
import ScrollTopAndComment from "@/components/ScrollTopAndComment";
import Skil from "@/components/skil";

export default function AuthorLayout({
  children,
  frontMatter,
  availableLocales,
}) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
  } = frontMatter;

  return (
    <>
      <PageSEO
        title={`About - ${name}`}
        description={`About me - ${name}`}
        availableLocales={availableLocales}
      />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-4 xl:sticky xl:top-20 xl:mt-5">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-xl xl:mt-10"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
      <h1 className="mt-20 text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9">
        Skill & Tools
      </h1>
      <Skil skill={"HTML"} desk={"Programming Language"} icon="html" />
      <Skil skill={"Javascript"} desk={"Programming Language"} icon="javas" />
      <Skil skill={"Next.JS"} desk={"React Framework"} icon="next" />
    </>
  );
}
