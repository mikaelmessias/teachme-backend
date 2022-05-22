import { Field, ObjectType } from '@nestjs/graphql';
import {
  AfterInsert,
  AfterUpdate,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
export abstract class BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ name: 'created_at', default: Date.now() })
  createdAt: number;

  @Field()
  @Column({ name: 'updated_at', default: Date.now() })
  updatedAt: number;

  @AfterInsert()
  setCreatedAt() {
    this.createdAt = Date.now();
  }

  @AfterUpdate()
  setUpdatedAt() {
    this.updatedAt = Date.now();
  }
}
