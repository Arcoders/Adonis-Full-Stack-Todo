'use strict'

const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (collection) => {

      collection.index('title', {title: 1})
      collection.index('user_id', {user_id: 1})

    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
