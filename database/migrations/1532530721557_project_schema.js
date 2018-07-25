'use strict'

const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()

      table.string('title', 255)
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')

      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
