'use strict'

const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()

      table.string('description', 255)
      table.integer('project_id').unsigned()
      table.foreign('project_id').references('projects.id')
      table.boolean('completed').default(false)

      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
