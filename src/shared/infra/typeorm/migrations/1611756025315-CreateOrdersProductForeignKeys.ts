import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateOrdersProductForeignKeys1611756025315
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'orders_products',
      new TableForeignKey({
        name: 'OrdersProductOrders', // colocando nome dessa tableforeignkey pra ficar mais facil de deletar dps
        columnNames: ['order_id'], // quais colunas que vao receber o valor de uma tabela estrangeira
        referencedColumnNames: ['id'], // de onde que vem o dado? no caso aqui vem da tabela users > id
        referencedTableName: 'orders', // de qual tabela ta vindo essa info?
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('orders_products', 'OrdersProductOrders');
  }
}
