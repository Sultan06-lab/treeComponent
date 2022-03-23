import { IFileTree } from "../types/file"
import yellowFolder from '../public/yellowFolder.svg'
import bigArrow from '../public/bigArrow.svg'
import file from '../public/file.svg'
import blackFolder from '../public/blackFolder.svg';
import smallArrow from '../public/smallArrow.svg'
import avatar from '../public/avatar.svg'

export const dataTree: IFileTree = {
    name: 'Folder Name',
    id: 1,
    isFolder: true,
    icon: yellowFolder,
    arrow: bigArrow,
    children: [{
        name: 'Menu Item',
        id: 1.2,
        isFolder: false,
        icon: avatar,
        arrow: '',
        children: []
    },
    {
        name: 'First Level',
        id: 2,
        icon: blackFolder,
        arrow: smallArrow,
        isFolder: true,
        children: [{
            name: 'Second Level',
            id: 3,
            icon: blackFolder,
            arrow: smallArrow,
            isFolder: true,
            children: [{
                name: 'Third Level',
                id: 4,
                icon: blackFolder,
                arrow: smallArrow,
                isFolder: true,
                children: [{
                    name: 'myDocument',
                    id: 5,
                    icon: file,
                    arrow: '',
                    isFolder: false,
                    children: []
                }]
            }],
        }]
    }
    ]
}
















// export const dataTree:IFile = {
//     name: 'Folder Name',
//     isFolder: true,
//     icon:
//     children: [{
//         name: 'First Level',
//         isFolder: true,
//         children: [{
//             name: 'Second Level',
//             isFolder: true,
//             children: [{
//                 name: 'Third Level',
//                 isFolder: true,
//                 children: [{
//                     name: 'myDocument',
//                     isFolder: false,
//                     children: []
//                 }]
//             }],
//         }]
//     }]
// }