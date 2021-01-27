import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateOrdersProductProductForeignKey1611756645617
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'orders_product',
      new TableForeignKey({
        name: 'OrdersProductProduct', // colocando nome dessa tableforeignkey pra ficar mais facil de deletar dps
        columnNames: ['product_id'], // quais colunas que vao receber o valor de uma tabela estrangeira
        referencedColumnNames: ['id'], // de onde que vem o dado? no caso aqui vem da tabela users > id
        referencedTableName: 'products', // de qual tabela ta vindo essa info?
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('orders_product', 'OrdersProductProduct');
  }
}
