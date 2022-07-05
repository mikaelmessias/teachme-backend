import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1653186093101 implements MigrationInterface {
  private usersTable = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isUnique: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '80',
        isNullable: false,
      },
      {
        name: 'email',
        type: 'varchar',
        length: '180',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'password',
        type: 'varchar',
        isNullable: false,
      },
      {
        name: 'cpf',
        type: 'varchar',
        length: '11',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'birthdate',
        type: 'integer',
        isNullable: true,
      },
      {
        name: 'biography',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'available_days',
        type: 'enum',
        isNullable: false,
        enum: [
          'MONDAY',
          'TUESDAY',
          'WEDNESDAY',
          'THURSDAY',
          'FRIDAY',
          'SATURDAY',
          'SUNDAY',
        ],
      },
      {
        name: 'created_at',
        type: 'integer',
        isNullable: false,
      },
      {
        name: 'updated_at',
        type: 'integer',
        isNullable: false,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.usersTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.usersTable);
  }
}
