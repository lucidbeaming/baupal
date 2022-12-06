import React, { useState } from 'react'


function FinderWindow() {
  const [folders, setFolders] = useState(null)

  function removeItem(obj: any, id: string) {

  }

  function addItem(obj: any, id: string) {

  }

  function handleRemove(id: string) {
    const reducedFolderList = removeItem(folders, id)
    setFolders(reducedFolderList)
  }

  function handleAdd(parent: string) {
    const updatedFolderList = addItem(folders, parent, id)
    setFolders(updatedFolderList)
  }

  return (
    <div className="finder-window">
      <Row>
        <FolderContents />
      </Row>
    </div>
  )

}

export default FinderWindow
