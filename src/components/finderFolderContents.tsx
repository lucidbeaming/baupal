import React from 'react'
import Folder from '../components/finderFolder'

interface ContentsTypes {
  items: any
  allFolders: any
  onRemove: Function
  onAdd: Function
  setActive: Function
  active: string[] | null
}

function FolderContents({ items, allFolders, onRemove, onAdd, active, setActive }: ContentsTypes) {
  return (
    <div className="folder-column">
         <ul>
            {items.map((item: any) => (
              <Folder key={item.id} item={item} allFolders={allFolders} onRemove={onRemove} onAdd={onAdd} active={active} setActive={setActive}/>
            ))}
        </ul>
      </div>
  )
}

export default FolderContents
