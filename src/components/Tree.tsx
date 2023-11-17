'use client'
import { Category, Skill, SkillTree } from '@/types'
import { CategoryBlock } from './CategoryBlock'

type TreeProps = {
  tree: SkillTree
  onUpdate: (tree: SkillTree) => void
}

export const Tree = ({ tree, onUpdate }: TreeProps) => {
  const updateCategory = (c: Category, index: number) => {
    const newTree: SkillTree = { ...tree }
    newTree.categories[index] = c
    onUpdate(newTree)
  }

  const addCategory = () => {
    const newCategory: Category = { name: 'new', subcategories: [] }
    const newTree: SkillTree = { categories: [...tree.categories, newCategory] }
    onUpdate(newTree)
  }
  return (
    <div className="">
      {tree.categories.map((c, i) => (
        <CategoryBlock
          key={c.name}
          category={c}
          onChange={(c) => {
            updateCategory(c, i)
          }}
        />
      ))}
      <button className="btn btn-primary btn-sm" onClick={addCategory}>
        New
      </button>
    </div>
  )
}
