import React from 'react'
import Image from 'next/image'
import vector from '../public/Vector.svg'
import file from '../public/file.png'
import arrow from '../public/arrow.svg'
import { IFile } from '../types/file'
import { useState } from 'react'
import styles from '../styles/file.module.css'


const File: React.FC<IFile> = ({ name, children, isFolder }: IFile) => {

  const [visibleChildren, setVisibleChildren] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  // const add = () => {
  //   setVisibleChildren(!visibleChildren);

  // }
  return (
    <div className={styles.file}>
      <div
        onClick={() => {
          setVisibleChildren(!visibleChildren)
          setOpen(!open)
        }
        } className={styles.file__item}>
        <div >

          <Image className={open ? styles.arrow : ''} src={arrow} alt={arrow} width={12} height={20} />

          <Image src={isFolder ? vector : file} alt='image' width={24} height={24} />
        </div>
        <span className={styles.file__name}>{name}</span>
      </div>
      {
        visibleChildren && (children ?? []).map(child => (
          <File key={child.id} {...child} parentId={child.parentId} id={child.id} isFolder={child.isFolder} />
        ))
      }
    </div>
  )
}

export default File;