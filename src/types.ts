export type SkillTree = {
  categories: Category[]
}

export type Category = {
  name: string
  subcategories: Subcategory[]
}

export type Subcategory = {
  name: string
  skills: Skill[]
}

export type Skill = {
  name: string
  active: boolean
  description: string
  next: Skill | null
}
