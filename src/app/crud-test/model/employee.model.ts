import 'reflect-metadata';
import * as Collections from 'typescript-collections';

import {BaseEntity} from '../../_model';
import {Certificate} from './certificate.model';

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
  @Reflect.metadata('widget',
    {
      name: 'textarea'
    })
  notes: string;

  @Reflect.metadata('listable', true)
  @Reflect.metadata('category', 'others')
  @Reflect.metadata('group', 'textarea')
  @Reflect.metadata('widget', {
    name: 'textarea'
  })
  address: string;

  @Reflect.metadata('category', 'others')
  state: string;

  @Reflect.metadata('category', 'others')
  city: string;

  @Reflect.metadata('category', 'general')
  @Reflect.metadata('widget', {
    name: 'entity-search',
    options: {
      entityType: 'Certificate',
      properties: ['title']
    }
  })
  certificate: Certificate;

  @Reflect.metadata('category', 'certificates')
  @Reflect.metadata('widget', {
    name: 'detail',
    options: {
      entityType: 'Certificate'
    }
  })
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
              certificate: Certificate,
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
    this.certificate = certificate;
    this.certificates = this.certificates;
  }
}
