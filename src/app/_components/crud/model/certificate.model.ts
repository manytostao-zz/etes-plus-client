import 'reflect-metadata';
import {BaseEntity} from '../../../_model';

export class Certificate extends BaseEntity {

  @Reflect.metadata('listable', true)
  title: string;

  constructor(id: string, title: string) {
    super(id);
    this.title = title;
  }
}
