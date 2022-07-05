import { registerEnumType } from '@nestjs/graphql';

export enum UserTypeEnum {
  PADAWAN = 'PADAWAN',
  JEDI = 'JEDI',
}

registerEnumType(UserTypeEnum, {
  name: 'UserTypeEnum',
});
