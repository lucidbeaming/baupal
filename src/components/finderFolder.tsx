import React from 'react'
import FolderContents from '../components/finderFolderContents'
import Button from 'react-bootstrap/Button'
import { FolderPlus, CaretRightFill, Trash } from 'react-bootstrap-icons'
import lodash from 'lodash'
import deepdash from 'deepdash-es'
const _ = deepdash(lodash)

interface FolderPropTypes {
  item: any
  allFolders: any
  onRemove: Function
  onAdd: Function
  setActive: Function
  active: string[] | null
}


function Folder({ item, allFolders, onRemove, onAdd, active, setActive }: FolderPropTypes) {

  const activate = (event: any) => {
    event.stopPropagation()
    setActive(item.id)
    let allParents: any = []
    let ancestors: any = []
    _.eachDeep(allFolders, (value, key, parentObj, ctx) => {
      if (value === item.id) {
        allParents = ctx?.parents
      }
    })
    allParents.forEach((parent: any) => {
      let innerId = _.get(allFolders, parent.path)
      if (Array.isArray(innerId) === false && innerId !== undefined) {
        ancestors.push(innerId?.id)
      }
    })
    setActive(ancestors)
  }

  const isCurrent = () => {
    if (active && active.indexOf(item.id) !== -1) {
      return true
    }
    return false
  }

  return (
    <li onClick={activate} className={isCurrent() ? 'active-folder' : ''}>
      <span>{item.name}</span>
      <Button className="right-button" variant="outline-success" size="sm" onClick={() => onAdd(item.id)}>
        <FolderPlus />
      </Button>
      <Button variant="outline-danger" size="sm" onClick={() => onRemove(item.id)}>
        <Trash />
      </Button>
      {(item?.children?.length > 0) ? <CaretRightFill /> : <CaretRightFill className="hidden" /> }
      {(item?.children?.length > 0) && isCurrent() ? <FolderContents items={item.children} allFolders={allFolders} onAdd={onAdd} onRemove={onRemove} active={active} setActive={setActive} /> : ''}
    </li>
  )
}

export default Folder
