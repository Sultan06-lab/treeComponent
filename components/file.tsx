import React from 'react'
import Image from 'next/image'
import vector from '../public/Vector.svg'
import file from '../public/file.png'
import arrow from '../public/arrow.svg'
import { IFile } from '../types/file'
import { useState } from 'react'
import styles from '../styles/file.module.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { dataTree } from '../data/dataTree';


const File: React.FC<IFile> = ({ name, children, parentId, id, isFolder }: IFile) => {

  console.log(parentId, id);
  const [visibleChildren, setVisibleChildren] = useState<boolean>(false);
  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const addFile = () => {
    children.push({ name: 'Hello', id: 1, parentId: 3, isFolder: false, children: [] })
  }

  const addFolder = () => {
    children.push({ name: 'Hello', id: 1, parentId: 3, isFolder: true, children: [] })
  }

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
          mouseX: event.clientX - 2,
          mouseY: event.clientY - 4,
        }
        :
        null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <div className={styles.file}>
      <div onClick={() => setVisibleChildren(!visibleChildren)} onContextMenu={handleContextMenu} className={styles.file__item}>
        <Image src={arrow} alt={arrow} width={12} height={20} />
        {isFolder
          ?
          <Image src={vector} alt={vector} width={24} height={24} />
          :
          <Image src={file} alt={file} width={24} height={24} />
        }
        <span className={styles.file__name}>{name}</span>
      </div>
      {
        visibleChildren && (children ?? []).map(child => (
          <File key={child.id} {...child} parentId={child.parentId} id={child.id} isFolder={child.isFolder} />
        ))
      }
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={() => addFolder()}>Create folder</MenuItem>
        <MenuItem onClick={() => addFile()}>Create file</MenuItem>
        <MenuItem >Rename</MenuItem>
      </Menu>
    </div>
  )
}

export default File;