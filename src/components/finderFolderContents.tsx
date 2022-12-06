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

function FolderContents() {
  return (
    <div className="folder-column">
         <ul>
            {items.map((item: any) => (
              <Folder />
            ))}
        </ul>
      </div>
  )
}

export default FolderContents
