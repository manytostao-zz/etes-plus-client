import 'reflect-metadata';

export class BaseEntity {
  @Reflect.metadata('key', true)
  id: string;

  constructor (id: string) {
    this.id = id;
  }
}
