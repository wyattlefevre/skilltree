import { SkillTree } from '@/types'
import { SubcategoryBlock } from './SubcategoryBlock'

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
            <SubcategoryBlock key={sc.name} subcategory={sc} />
          ))}
        </div>
      ))}
    </div>
  )
}
