'use strict'

const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (collection) => {

      collection.index('description', {description: 1})
      collection.index('project_id', {title: 1})
      collection.index('completed', {title: 1})

    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
