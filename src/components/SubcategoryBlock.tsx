import { Subcategory } from '@/types'
import { SkillLane } from './SkillLane'

export const SubcategoryBlock = ({ subcategory }: { subcategory: Subcategory }) => {
  return (
    <div className="flex justify-start">
      <div className="flex items-center border border-black px-1">
        <p>{subcategory.name}</p>
      </div>
      <div>
        {subcategory.skills.map((s) => (
          <SkillLane key={`${s.name}-${s.description}`} rootSkill={s} />
        ))}
      </div>
    </div>
  )
}
