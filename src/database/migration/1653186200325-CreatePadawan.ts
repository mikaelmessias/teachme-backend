import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePadawan1653186093101 implements MigrationInterface {
  private padawanTable = new Table({
    name: 'padawans',
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
    await queryRunner.createTable(this.padawanTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.padawanTable);
  }
}
