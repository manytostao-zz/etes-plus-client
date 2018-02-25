import {listable, category} from '../../../_decorators';

export class Employee {
  id: number;
  @listable
  @category('general')
  firstName: string;
  @listable
  @category('general')
  lastName: string;
  @listable
  @category('general')
  prefix: string;
  @listable
  @category('general')
  position: string;
  @category('general')
  picture: string;
  @listable
  @category('others')
  birthDate: Date;
  @listable
  @category('others')
  hireDate: Date;
  @category('others')
  notes: string;
  @category('others')
  address: string;
  @category('others')
  state: string;
  @category('others')
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
