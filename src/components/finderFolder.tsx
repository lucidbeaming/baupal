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

function Folder() {


  const isCurrent = () => {

  }

  return (
    <li>
    </li>
  )
}

export default Folder

