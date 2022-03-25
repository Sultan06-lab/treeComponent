import Image from 'next/image'
import { IFileTree } from '../types/tree'
import { useState } from 'react'
import styles from '../styles/file.module.css'
import arrow from '../public/arrow.svg'
import {iconKeys} from '../constant/iconConstants'

type IFileTreeProps = {
  tree: IFileTree;
}

const FileTree: React.FC<IFileTreeProps> = ({tree}: IFileTreeProps) => {

  const [visibleChildren, setVisibleChildren] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const isIcon = tree.icon && iconKeys.includes(tree.icon);

  return (
    <div className={styles.file}>
      <div
        onClick={() => {
          setVisibleChildren(!visibleChildren)
          setOpen(!open)
        }
        } className={styles.file__item}>
        {
          tree.isFolder ?
            <Image className={open ? '' : styles.file__arrow} src={arrow} alt={arrow} width={15} height={15} />
            :
            ''
        }
        <Image src={isIcon ? `/${tree.icon}.svg` : '/'} alt={tree.icon} width={20} height={16} />
        <span className={styles.file__name}>{tree.name}</span>
      </div>
      {
        visibleChildren && (tree.children ?? []).map(child => (
          <FileTree key=
            {child.name} tree={child} />
        ))
      }
    </div>
  )
}
export default FileTree;