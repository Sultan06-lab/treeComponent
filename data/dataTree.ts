import { IFile } from "../types/file"

export const dataTree:IFile = {
    name: 'Folder Name',
    id: 1,
    parentId: 0,
    isFolder: true,
    children: [{
        name: 'First Level',
        id: 2,
        parentId: 1,
        isFolder: true,
        children: [{
            name: 'Second Level',
            id: 3,
            parentId: 2,
            isFolder: true,
            children: [{
                name: 'Third Level',
                id: 4,
                parentId: 3,
                isFolder: true,
                children: [{
                    name: 'myDocument',
                    id: 5,
                    parentId: 4,
                    isFolder: false,
                    children: []
                }]
            }],
        },
        {
            name: 'Second level-2',
            id: 2,
            parentId: 1,
            isFolder: true,
            children: []
        }

        ]
    }]
}