import { iconKeys } from "../constant/iconConstants";

export interface IFileTree {
    name: string;
    icon?: iconKey;
    isFolder: boolean;
    children: IFileTree[];
}

type iconKey = typeof iconKeys[number];