import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTech1652982696075 implements MigrationInterface {
  private techTable = new Table({
    name: 'techs',
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
        name: 'title',
        type: 'varchar',
        length: '80',
        isNullable: true,
        isUnique: true,
      },
      {
        name: 'thumbnail',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'integer',
        isPrimary: false,
        isNullable: false,
      },
      {
        name: 'updated_at',
        type: 'integer',
        isPrimary: false,
        isNullable: false,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.techTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.techTable);
  }
}
