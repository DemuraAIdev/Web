/* eslint-disable prettier/prettier */
import Icon from '@/components/SkillIcon'
const Skil = ({ skill, desk, icon, url }) => (
  <ul className="mt-4">
    <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
      <Icon kind={icon} href="/" />

      <div className="flex min-w-0 flex-col justify-center">
        <p className="mb-1 flex items-center">
          <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">{skill}</span>
        </p>
        <p className="flex items-center truncate">
          <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">{desk}</span>
        </p>
      </div>
    </li>
  </ul>
)

export default Skil
