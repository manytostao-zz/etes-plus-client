import 'reflect-metadata';
import {BaseEntity} from '../../../_model';
import {Certificate} from './certificate.model';
import * as Collections from 'typescript-collections';

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

  @Reflect.metadata('category', 'others')
  certificates: Collections.LinkedList<Certificate>;


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
              city: string,
              certificates: Collections.LinkedList<Certificate>) {
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
    this.city = city;
    this.certificates = certificates;
  }
}
