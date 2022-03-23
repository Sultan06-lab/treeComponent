export interface IFile {
    name: string;
    id: number;
    parentId: number;
    isFolder: boolean;
    children: IFile[];
}