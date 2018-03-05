export interface IHierarchicalEntity {
  parentId: string;
  parentCode: string;
  parentDescription: string;
  hierarchialLevel: number;
  isLeaf: boolean;
}
