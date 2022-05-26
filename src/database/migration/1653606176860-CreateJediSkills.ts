import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateJediSkills1653606176860 implements MigrationInterface {
  private jediSkillsTable = new Table({
    name: 'jedi_skills',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isUnique: true,
        isGenerated: false,
      },
      {
        name: 'price',
        type: 'float',
      },
      {
        name: 'jedi_id',
        type: 'integer',
        isNullable: false,
      },
      {
        name: 'tech_id',
        type: 'integer',
        isNullable: false,
      },
    ],
  });

  private jediForeignKey = new TableForeignKey({
    columnNames: ['jedi_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'jedis',
  });

  private techForeignKey = new TableForeignKey({
    columnNames: ['tech_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'techs',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.jediSkillsTable);
    await queryRunner.createForeignKey('jedi_skills', this.jediForeignKey);
    await queryRunner.createForeignKey('jedi_skills', this.techForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.jediSkillsTable);
  }
}
