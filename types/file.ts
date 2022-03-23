export interface IFileTree {
    name: string;
    id: number;
    icon: string;
    arrow: string;
    isFolder: boolean;
    children: IFileTree[];
}