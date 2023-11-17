import { Tree } from '@/components/Tree'
import initialTree from '../../data/current_tree.json'
import { SkillTree } from '@/types'
export default function Home() {
  return (
    <main>
      <Tree tree={initialTree as SkillTree} />
    </main>
  )
}
