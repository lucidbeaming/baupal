import React from 'react'
import Folder from '../components/finderFolder'

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
