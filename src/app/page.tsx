import { Tree } from '@/components/Tree'
import initialTree from '../../data/current_tree.json'
import { SkillTree } from '@/types'
export default function Home() {
  // TODO: use zod to ensure clean initial data
  return (
    <main>
      <Tree tree={initialTree as SkillTree} />
    </main>
  )
}
