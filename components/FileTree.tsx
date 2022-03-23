import React from 'react'
import Image from 'next/image'
import { IFileTree } from '../types/file'
import { useState } from 'react'
import styles from '../styles/file.module.css'


const FileTree: React.FC<IFileTree> = ({ name, children, icon, arrow, id, isFolder, }: IFileTree) => {

  const [visibleChildren, setVisibleChildren] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);


  return (
    <div className={styles.file}>
      <div
        onClick={() => {
          setVisibleChildren(!visibleChildren)
          setOpen(!open)
        }
        } className={styles.file__item}>
          {
            id === 1 ?

              isFolder ?
                <Image className={open ? styles.file__bigArrow : ''} src={arrow} alt={arrow} width={10} height={10} padding-left='5px' />
                :
                ''
              :
              isFolder ?
                <Image className={open ? '' : styles.file__smallArrow} src={arrow} alt={arrow} width={12} height={20} />
                :
                ''
          }
          <Image className={styles.file__icon} src={icon} alt='image' width={20} height={16} />
        <span className={styles.file__name}>{name}</span>
      </div>
      {
        visibleChildren && (children ?? []).map(child => (
          <FileTree key={child.id} {...child}/>
        ))
      }
    </div>
  )
}

export default FileTree;