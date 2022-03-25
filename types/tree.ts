export interface IFileTree {
    name: string;
    icon?: iconKeys;
    isFolder: boolean;
    children: IFileTree[];
}

type iconKeys = 'yellowFolder' | 'blackFolder' | 'avatar' | 'file';