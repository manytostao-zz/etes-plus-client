export interface IHierarchialEntity {
  parentId: string;
  parentCode: string;
  parentDescription: string;
  hierarchialLevel: number;
  isLeaf: boolean;
}
