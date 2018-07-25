
const InvalidAccessException = use('App/Exceptions/InvalidAccessException')

class AuthorizationService {

    verifyPermission(resource, user) {

        if (!user._id.equals(resource.user_id)) {

            throw new InvalidAccessException();

        }

    }

}

module.exports = new AuthorizationService();