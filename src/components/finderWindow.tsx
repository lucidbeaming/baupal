import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Row from 'react-bootstrap/Row'
import FolderContents from '../components/finderFolderContents'
import lodash from 'lodash'
import deepdash from 'deepdash-es'
const _ = deepdash(lodash)

const initialValues = [{
    id: uuid(),
    name: "folder",
    children: [],
  },
  {
    id: uuid(),
    name: "folder",
    children: [],
  },
  {
    id: uuid(),
    name: "folder",
    children: [{
      id: uuid(),
      name: "folder",
      children: [],
    }],
  },
]

function FinderWindow() {
  const [folders, setFolders] = useState(initialValues)
  const [activeFolder, setActiveFolder] = useState(null)

  useEffect(() => {
    console.log(activeFolder)
  }, [activeFolder])

  function removeItem(obj: any, id: string) {
    let collection = _.cloneDeep(obj)
    _.eachDeep(collection, (value, key, parentObj, ctx) => {
      if (value === id) {
        const itemParents: any = ctx?.parents
        const parentArray: any = itemParents[itemParents.length - 2]
        let itemArray: any = []
        let itemPath: string = ''
        if (parentArray.depth === 0) {
          itemArray = collection
          _.remove(itemArray, { id: id })
          collection = itemArray
        } else {
          itemArray = _.get(collection, parentArray.path)
          itemPath = parentArray.path
          _.remove(itemArray, { id: id })
          _.set(collection, itemPath, itemArray)
        }
        return collection
      }
    })
    return collection
  }

  function addItem(obj: any, parent: string, id: string) {
    let collection = _.cloneDeep(obj)
    const emptyChildArray: any = []
    _.eachDeep(collection, (value, key, parentObj, ctx) => {
      if (parentObj.id === parent && parentObj.children && key === 'children') {
        const childPath: any = ctx.path
        let childArray = parentObj.children
        childArray = childArray.concat([{ id: id, name: 'folder', children: [...emptyChildArray] }])
        _.set(collection, childPath, childArray)
      }
    })
    return collection
  }

  function handleRemove(id: string) {
    const reducedFolderList = removeItem(folders, id)
    setFolders(reducedFolderList)
  }

  function handleAdd(parent: string) {
    const id: string = uuid()
    const updatedFolderList = addItem(folders, parent, id)
    setFolders(updatedFolderList)
  }

  return (
    <div className="finder-window">
      <Row>
        <FolderContents items={folders} allFolders={folders} onAdd={handleAdd} onRemove={handleRemove} active={activeFolder} setActive={setActiveFolder}/>
      </Row>
    </div>
  )

}

export default FinderWindow
