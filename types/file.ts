export interface IFile {
    name: string;
    id: number;
    icon: string;
    children: IFile[];
}