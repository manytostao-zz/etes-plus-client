import 'reflect-metadata';
import {BaseEntity, INamedEntity, ILogicalDelete} from '../../../_model';

@Reflect.metadata('BankEntityClassId', '72269936-717c-40ac-859e-a150012e44a6')
export class Bank  extends BaseEntity  implements  INamedEntity, ILogicalDelete  {

  @Reflect.metadata('listable', true)
  @Reflect.metadata('widget', {
    location: {
      category: 'general'
    }
  })
  public active:  boolean;

  @Reflect.metadata('maxlength', 50)
  @Reflect.metadata('listable', true)
  @Reflect.metadata('widget', {
    name: 'textarea',
    location: {
      category: 'others',
      group: 'textarea'
    }
  })
  public address:  string;

  @Reflect.metadata('maxlength', 15)
  @Reflect.metadata('minlength', 1)
  @Reflect.metadata('listable', true)
  @Reflect.metadata('widget', {
    location: {
      category: 'general'
    }
  })
  public code:  string;

  @Reflect.metadata('maxlength', 50)
  @Reflect.metadata('listable', true)
  @Reflect.metadata('widget', {
    location: {
      category: 'general'
    }
  })
  public description:  string;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('widget', {
    location: {
      category: 'general'
    }
  })
  public swift:  string;


  constructor (id: string,
               active:  boolean,
               address:  string,
               code:  string,
               description:  string,
               swift:  string
  ) {
    super(id);
    this.active = active;
    this.address = address;
    this.code = code;
    this.description = description;
    this.swift = swift;
  }
}
