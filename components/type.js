/* eslint-disable prettier/prettier */
import React from 'react'
import Typed from 'typed.js'
import { Twemoji } from './Twemoji'

export function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I live in <b className="font-medium">Indonesia</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">HTML</b>.
        </li>
        <li>I love NODEJS.</li>
        <li>I work mostly with NextJS/Node and pure JS.</li>
        <li>I love EDM music.</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
