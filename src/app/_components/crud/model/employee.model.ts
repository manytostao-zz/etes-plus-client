import 'reflect-metadata';

export class Employee {
  @Reflect.metadata('key', true)
  id: number;

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
  @Reflect.metadata('category', 'general')
  position: string;

  @Reflect.metadata('category', 'general')
  picture: string;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'others')
  birthDate: Date;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'others')
  hireDate: Date;

  @Reflect.metadata('category', 'others')
  notes: string;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'others')
  address: string;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'others')
  state: string;

  @Reflect.metadata('category', 'others')
  city: string;


  constructor(id: number,
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
    this.id = id;
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
