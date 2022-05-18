import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserEpices extends BaseSchema {
  protected tableName = 'user_epices'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id').primary()
      table.string('name', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('curso',255).notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
