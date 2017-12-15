'use strict'

class ApisController {
	* redirect_facebook (request, response) {
		yield request.ally.driver('facebook').scope(['public_profile', 'email', 'user_friends']).redirect()
	}

	* handle_facebook (request, response) {
		 const fbUser = yield request.ally.driver('facebook').getUser()
		return response.send('llega')

	 //    const searchAttr = {
	 //      email: fbUser.getEmail()
	 //    }

	 //    const newUser = {
	 //      email: fbUser.getEmail(),
	 //      avatar: fbUser.getAvatar(),
	 //      username: fbUser.getName()
	 //    }

	// console.log(request.ally.driver('facebook'))
	// res.send('ok')

	    // const user = yield User.findOrCreate(searchAttr, newUser)

	    // request.auth.loginViaId(user.id)
	}
}

module.exports = ApisController
