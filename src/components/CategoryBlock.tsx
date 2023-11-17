import { Category } from '@/types'
import { SubcategoryBlock } from './SubcategoryBlock'

export const CategoryBlock = ({ category }: { category: Category }) => {
  return (
    <div className="flex justify-start">
      <div className="flex items-center border border-black px-1">
        <p>{category.name}</p>
      </div>
      <div>
        {category.subcategories.map((s) => (
          <SubcategoryBlock key={`${s.name}`} subcategory={s} />
        ))}
      </div>
    </div>
  )
}
