import { Category, Subcategory } from '@/types'
import { SubcategoryBlock } from './SubcategoryBlock'

type CategoryProps = {
  category: Category
  onChange: (category: Category) => void
}

export const CategoryBlock = ({ category, onChange }: CategoryProps) => {
  const updateSubCategory = (sc: Subcategory, index: number) => {
    const newCategory = { ...category }
    newCategory.subcategories[index] = sc
    onChange(newCategory)
  }

  return (
    <div className="flex flex-col-reverse justify-start gap-1 p-1">
      <div className="flex items-center rounded-md border border-black px-1">
        <p>{category.name}</p>
      </div>
      <div className="flex gap-1">
        {category.subcategories.map((s, i) => (
          <SubcategoryBlock
            key={`${s.name}`}
            subcategory={s}
            onChange={(sc) => updateSubCategory(sc, i)}
          />
        ))}
      </div>
    </div>
  )
}
