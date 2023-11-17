import { SkillTree } from '@/types'
import { CategoryBlock } from './CategoryBlock'

type TreeProps = {
  tree: SkillTree
}

export const Tree = ({ tree }: TreeProps) => {
  console.log('got tree', tree)
  return (
    <div>
      {tree.categories.map((c) => (
        <CategoryBlock key={c.name} category={c} />
      ))}
    </div>
  )
}
