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

		return yield response.sendView('users.view',{
			email: user.getEmail(),
			avatar: user.getAvatar(),
			username: user.getName(),
			nickname: user.getNickname()
	    })
	}

	* handle_twitter (request, response) {
		const user = yield request.ally.driver('twitter').getUser()

		return yield response.sendView('users.view',{
			email: user.getEmail(),
			avatar: user.getAvatar(),
			username: user.getName(),
			nickname: user.getNickname()
	    })
	}

	* handle_facebook (request, response) {
		const user = yield request.ally.driver('facebook').getUser()

		return yield response.sendView('users.view',{
			email: user.getEmail(),
			avatar: user.getAvatar(),
			username: user.getName(),
			nickname: user.getNickname()
	    })
	}
}

module.exports = ApisController
