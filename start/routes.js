'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')


Route.group(() => {

// Auth ---------------------------------------------------------    

Route.post('auth/register', 'UserController.register')

Route.post('auth/login', 'UserController.login')

// Projects -----------------------------------------------------

Route.get('projects', 'ProjectController.index').middleware('auth')

Route.post('projects', 'ProjectController.create').middleware('auth')

Route.delete('projects/:projectId', 'ProjectController.destroy')
     .middleware('auth')
     .bind('App/Models/Project', 'project', 'projectId', '_id')

Route.patch('projects/:projectId', 'ProjectController.update')
     .middleware('auth')
     .bind('App/Models/Project', 'project', 'projectId', '_id')


// Tasks -------------------------------------------------------

Route.get('projects/:projectId/tasks', 'TaskController.index')
  .middleware('auth')
  .bind('App/Models/Project', 'project', 'projectId', '_id')

Route.post('projects/:projectId/tasks', 'TaskController.create')
     .middleware('auth')
     .bind('App/Models/Project', 'project', 'projectId', '_id')

Route.patch('tasks/:taskId', 'TaskController.update')
    .middleware('auth')
    .bind('App/Models/Task', 'task', 'taskId', '_id')

Route.delete('tasks/:taskId', 'TaskController.destroy')
    .middleware('auth')
    .bind('App/Models/Task', 'task', 'taskId', '_id')

}).prefix('api')
