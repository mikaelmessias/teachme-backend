import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateBooking1653606432829 implements MigrationInterface {
  private bookingsTable = new Table({
    name: 'bookings',
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
        name: 'date',
        type: 'integer',
        isNullable: false,
      },
      {
        name: 'padawan_id',
        type: 'integer',
        isNullable: false,
      },
      {
        name: 'skill_id',
        type: 'integer',
        isNullable: false,
      },
      {
        name: 'status',
        type: 'enum',
        enum: ['UNCONFIRMED', 'CONFIRMED', 'CANCELLED', 'COMPLETED'],
        isNullable: false,
      },
    ],
  });

  private padawanForeignKey = new TableForeignKey({
    columnNames: ['padawan_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'padawans',
  });

  private jediSkillForeignKey = new TableForeignKey({
    columnNames: ['skill_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'jedi_skills',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.bookingsTable);
    await queryRunner.createForeignKey('bookings', this.padawanForeignKey);
    await queryRunner.createForeignKey('bookings', this.jediSkillForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.bookingsTable);
  }
}
