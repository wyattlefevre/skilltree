import { Skill } from '@/types'

export const SkillLane = ({ rootSkill }: { rootSkill: Skill }) => {
  const flattened = flattenSkills(rootSkill)
  return (
    <div className="flex justify-start">
      {flattened.map((skill) => (
        <div key={`${skill.name}-${skill.description}`} className="border border-black p-2">
          <p>
            <b>{skill.name}</b>
          </p>
          <p>{skill.description}</p>
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
      console.error('circular skill lane detected')
      break
    }
    flattened.push(currentSkill)
    currentSkill = currentSkill.next
  }
  return flattened
}
