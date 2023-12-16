export interface Folder {
  id: number;
  name: string;
  children?: Folder[];
  isOpen?: boolean;
  parent?: Folder;
  isRoot?: boolean;
}
