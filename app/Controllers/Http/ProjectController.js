'use strict'

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

    async update ({ auth, project, request }) {

        const user = await auth.getUser()
        AuthorizationService.verifyPermission(project, user)
        project.merge(request.only('title'))
        await project.save()
        return project

    }

}

module.exports = ProjectController
