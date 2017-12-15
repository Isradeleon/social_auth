'use strict'

class ApisController {
	// API redirect methods
	* redirect_instagram (request, response) {
		yield request.ally.driver('instagram').redirect()
	}

	* redirect_twitter (request, response) {
		yield request.ally.driver('twitter').redirect()
	}

	* redirect_facebook (request, response) {
		yield request.ally.driver('facebook')
		// .scope(['public_profile', 'email', 'user_friends'])
		.redirect()
	}

	// API Callbacks
	* handle_instagram (request, response) {
		const user = yield request.ally.driver('instagram').getUser()
		return user.getNickname()
	}

	* handle_twitter (request, response) {
		const user = yield request.ally.driver('twitter').getUser()
		return user.getNickname()
	}

	* handle_facebook (request, response) {
		const user = yield request.ally.driver('facebook').getUser()
		return user.getNickname()
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
