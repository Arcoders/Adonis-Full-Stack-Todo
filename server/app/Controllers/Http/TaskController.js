'use strict'

const AuthorizationService = use('App/Services/AuthorizationService');

class TaskController {

    async index ({ auth, project }) {
        const user = await auth.getUser()
        AuthorizationService.verifyPermission(project, user)
        return await project.tasks().fetch()

    }

    async create ({ auth, request, project }) {

        const user = await auth.getUser()
        const { description } = request.post()
        AuthorizationService.verifyPermission(project, user)
        return await project.tasks().create({ description, completed: 0 })

    }

    async update ({ auth, task, request }) {

        const user = await auth.getUser()
        const project = await task.project().fetch()
        AuthorizationService.verifyPermission(project, user)
        task.merge(request.only(['description', 'completed']))
        await task.save()
        return task

    }
    
    async destroy ({ auth, task }) {

        const user = await auth.getUser()
        const project = await task.project().fetch()
        AuthorizationService.verifyPermission(project, user);
        await task.delete()
        return { message: 'This task has been deleted', task }

    }
    

}

module.exports = TaskController
