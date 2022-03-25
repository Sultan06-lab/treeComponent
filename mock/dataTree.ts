import { IFileTree } from "../types/file"

export const dataTree: IFileTree = {
    name: 'Folder Name',
    isFolder: true,
    icon: 'yellowFolder',
    children: [{
        name: 'Menu Item',
        isFolder: false,
        icon: 'avatar',
        children: []
    },
    {
        name: 'First Level',
        icon: 'blackFolder',
        isFolder: true,
        children: [{
            name: 'Second Level',
            icon: 'blackFolder',
            isFolder: true,
            children: [{
                name: 'Third Level',
                icon: 'blackFolder',
                isFolder: true,
                children: [{
                    name: 'myDocument',
                    icon: 'file',
                    isFolder: false,
                    children: []
                }]
            }],
        }]
    }
    ]
}
