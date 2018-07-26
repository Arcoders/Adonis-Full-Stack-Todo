'use strict'

const Project = use('App/Models/Project')

const AuthorizationService = use('App/Services/AuthorizationService');

class ProjectController {

    async index ({ auth }) {

        const user = await auth.getUser()
        return await user.projects().fetch()

    }

    async create ({ auth, request }) {

        const { title} = request.post()
        const user = await auth.getUser()
        return  await user.projects().create({ title })

    }

    async destroy ({ auth, project }) {

        const user = await auth.getUser()
        AuthorizationService.verifyPermission(project, user);
        await project.delete()
        return { message: 'This project has been deleted', project }

    }

}

module.exports = ProjectController
