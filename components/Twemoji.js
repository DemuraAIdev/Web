/* eslint-disable prettier/prettier */
import { kebabCase } from '@/lib/cases'

export function Twemoji({ emoji, size = 'twa-lg', className }) {
  let cls = `inline-block twa ${size} twa-${kebabCase(emoji)} ${className || ''}`
  return <i className={cls.trim()} />
}

export default Twemoji
