import { SkillTree } from '@/types'
import { SkillLane } from './SkillLane'

type TreeProps = {
  tree: SkillTree
}

export const Tree = ({ tree }: TreeProps) => {
  console.log('got tree', tree)
  return (
    <div>
      {tree.categories.map((c) => (
        <div key={c.name}>
          <p>{c.name}</p>
          {c.subcategories.map((sc) => (
            <div key={sc.name}>
              <p>{sc.name}</p>
              {sc.skills.map((skill) => (
                <SkillLane key={`${skill.name}-${skill.description}`} rootSkill={skill} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
