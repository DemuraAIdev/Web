import Html from "./html5";
import Javascript from "./Javascript";
import NextJS from "./Nextdotjs";
import NodeJS from "./Nodedotjs";
import React from "./React";
import TailwindCss from "./Tailwind";
// Icons taken from: https://simpleicons.org/

const components = {
  html: Html,
  javas: Javascript,
  next: NextJS,
  node: NodeJS,
  react: React,
  tailwind: TailwindCss,
};

const SkillIcon = ({ kind, href, size = 10 }) => {
  const SkillSvg = components[kind];
  return (
    <a
      className="text-sm transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SkillSvg
        className={`rounded-md fill-current dark:text-white h-${size} w-${size}`}
      />
    </a>
  );
};

export default SkillIcon;
