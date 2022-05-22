import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column } from 'typeorm';
import { iTech } from '../../models/iTech';
import { BaseEntity } from './BaseEntity';

@ObjectType()
@Entity({ name: 'techs' })
export class TechEntity extends BaseEntity implements iTech {
  @Field()
  @Column({ unique: true, nullable: false })
  title: string;

  @Field()
  @Column({ nullable: false })
  thumbnail: string;
}
