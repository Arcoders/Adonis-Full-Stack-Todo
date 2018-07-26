
const InvalidAccessException = use('App/Exceptions/InvalidAccessException')

const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException')

class AuthorizationService {

    verifyPermission(resource, user) {

        if (!resource) throw new ResourceNotExistException()
        if (!user._id.equals(resource.user_id)) throw new InvalidAccessException();

    }

}

module.exports = new AuthorizationService();