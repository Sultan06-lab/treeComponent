import { IFile } from "../types/file"

export const dataTree:IFile = {
    name: 'Folder Name',
    isFolder: true,
    children: [{
        name: 'First Level',
        isFolder: true,
        children: [{
            name: 'Second Level',
            isFolder: true,
            children: [{
                name: 'Third Level',
                isFolder: true,
                children: [{
                    name: 'myDocument',
                    isFolder: false,
                    children: []
                }]
            }],
        }]
    }]
}