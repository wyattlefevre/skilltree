import { Skill } from '@/types'

export const SkillLane = ({ rootSkill }: { rootSkill: Skill }) => {
  // TODO: should the data come pre-flattened? array of arrays instead of recursive
  // yes.
  const flattened = flattenSkills(rootSkill)
  return (
    <div className="flex flex-col-reverse justify-start gap-1">
      {flattened.map((skill) => (
        <div
          key={`${skill.name}-${skill.description}`}
          className="h-24 w-32 rounded-md border border-black p-2"
        >
          <p>
            <b>{skill.name}</b>
          </p>
        </div>
      ))}
    </div>
  )
}

const flattenSkills = (rootSkill: Skill): Skill[] => {
  const flattened: Skill[] = []
  let currentSkill: Skill | null = rootSkill
  while (currentSkill != null) {
    if (flattened.includes(currentSkill)) {
      console.error('circular skill lane detected', currentSkill)
      break
    }
    flattened.push(currentSkill)
    currentSkill = currentSkill.next
  }
  return flattened
}
