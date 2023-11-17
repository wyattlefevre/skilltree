import { Skill, Subcategory } from '@/types'
import { SkillLane } from './SkillLane'

type SubCategoryProps = {
  subcategory: Subcategory
  onChange: (subcategory: Subcategory) => void
}

export const SubcategoryBlock = ({ subcategory, onChange }: SubCategoryProps) => {
  //TODO: update skills and possible change data structure
  return (
    <div className="flex flex-col-reverse justify-start gap-1">
      <div className="flex items-center break-all rounded-md border border-black px-1">
        <p>{subcategory.name}</p>
      </div>
      <div className="flex gap-1">
        {subcategory.skills.map((s) => (
          <SkillLane key={`${s.name}-${s.description}`} rootSkill={s} />
        ))}
      </div>
    </div>
  )
}
