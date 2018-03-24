import 'reflect-metadata';
import {BaseEntity} from '../../_model';

export class Certificate extends BaseEntity {
  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'general')
  title: string;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'general')
  expeditionDate: Date;

  constructor(id: string, title: string, expeditionDate: Date) {
    super(id);
    this.title = title;
    this.expeditionDate = expeditionDate;
  }
}
