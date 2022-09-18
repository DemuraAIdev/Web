/* eslint-disable prettier/prettier */
import Html from './html5.svg'
import Javascript from './javascript.svg'
import NextJS from './nextdotjs.svg'
import NodeJS from './nodedotjs.svg'
import React from './react.svg'
// Icons taken from: https://simpleicons.org/

const components = {
  html: Html,
  javas: Javascript,
  next: NextJS,
  node: NodeJS,
  react: React,
}

const SkillIcon = ({ kind, href, size = 10 }) => {
  const SkillSvg = components[kind]
  return (
    <a
      className="text-sm transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SkillSvg className={`rounded-md fill-current dark:text-white h-${size} w-${size}`} />
    </a>
  )
}

export default SkillIcon
