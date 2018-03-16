import 'reflect-metadata';
import {BaseEntity} from '../../_model';

export class Employee extends BaseEntity {

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'general')
  firstName: string;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'general')
  lastName: string;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'general')
  prefix: string;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('visible', false)
  @Reflect.metadata('category', 'general')
  position: string;

  @Reflect.metadata('category', 'general')
  picture: string;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'others')
  @Reflect.metadata('group', 'dates')
  birthDate: Date;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'others')
  @Reflect.metadata('group', 'dates')
  hireDate: Date;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'others')
  @Reflect.metadata('group', 'textarea')
  @Reflect.metadata('widget', 'textarea')
  notes: string;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'others')
  @Reflect.metadata('group', 'textarea')
  @Reflect.metadata('widget', 'textarea')
  address: string;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'others')
  state: string;

  @Reflect.metadata('category', 'others')
  @Reflect.metadata('widget', 'entitySearch')
  city: string;


  constructor(id: string,
              firstName: string,
              lastName: string,
              prefix: string,
              position: string,
              picture: string,
              birthDate: Date,
              hireDate: Date,
              notes: string,
              address: string,
              state: string,
              city: string) {
    super(id);
    this.firstName = firstName;
    this.lastName = lastName;
    this.prefix = prefix;
    this.position = position;
    this.picture = picture;
    this.birthDate = birthDate;
    this.hireDate = hireDate;
    this.notes = notes;
    this.address = address;
    this.state = state;
    this.city = city
  }
}
