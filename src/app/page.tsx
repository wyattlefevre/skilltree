'use client'
import { Tree } from '@/components/Tree'
import initialTree from '../../data/current_tree.json'
import { SkillTree } from '@/types'
import { useState } from 'react'
export default function Home() {
  // TODO: use zod to ensure clean initial data
  const [treeData, setTreeData] = useState<SkillTree>(initialTree as SkillTree)
  return (
    <main>
      <Tree tree={treeData} onUpdate={(tree) => setTreeData(tree)} />
    </main>
  )
}
