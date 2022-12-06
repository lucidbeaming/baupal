import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Row from 'react-bootstrap/Row'
import FolderContents from '../components/finderFolderContents'
import lodash from 'lodash'
import deepdash from 'deepdash-es'
const _ = deepdash(lodash)

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
