'use strict'

class ApisController {
	* index (request, response) {
		return yield response.sendView('home',{
			'profile':yield request.session.get('avatar')
		})
	}

	* profile (request, response) {
		if (yield request.session.get('avatar')) {
			return yield response.sendView('users.view',{
				email: yield request.session.get('email'),
				avatar: yield request.session.get('avatar'),
				username: yield request.session.get('username'),
				nickname: yield request.session.get('nickname')
			})
		}
		return redirect('/')
	}

	// API redirect methods
	* redirect_instagram (request, response) {
		yield request.ally.driver('instagram').scope(['basic']).redirect()
	}

	* redirect_google (request, response) {
		yield request.ally.driver('google').redirect()
	}

	* redirect_twitter (request, response) {
		yield request.ally.driver('twitter').redirect()
	}

	* redirect_facebook (request, response) {
		yield request.ally.driver('facebook').redirect()
	}

	* redirect_github (request, response) {
		yield request.ally.driver('github').scope(['user']).redirect()
	}

	// API Callbacks
	* handle_instagram (request, response) {
		const user = yield request.ally.driver('instagram').getUser()

		yield request.session.put('username', user.getName())
		yield request.session.put('avatar', user.getAvatar())
		yield request.session.put('nickname', user.getNickname())
		yield request.session.put('email', user.getEmail() ? user.getEmail() : 'No email provided')

		return response.redirect('/profile')
	}

	* handle_google (request, response) {
		const user = yield request.ally.driver('google').getUser()

		yield request.session.put('username', user.getName())
		yield request.session.put('avatar', user.getAvatar())
		yield request.session.put('nickname', user.getNickname())
		yield request.session.put('email', user.getEmail() ? user.getEmail() : 'No email provided')

		return response.redirect(	'/profile')
	}

	* handle_twitter (request, response) {
		const user = yield request.ally.driver('twitter').getUser()
		
		yield request.session.put('username', user.getName())
		yield request.session.put('avatar', user.getAvatar())
		yield request.session.put('nickname', user.getNickname())
		yield request.session.put('email', user.getEmail() ? user.getEmail() : 'No email provided')

		return response.redirect('/profile')
	}

	* handle_facebook (request, response) {
		const user = yield request.ally.driver('facebook').getUser()

		yield request.session.put('username', user.getName())
		yield request.session.put('avatar', user.getAvatar())
		yield request.session.put('nickname', user.getNickname())
		yield request.session.put('email', user.getEmail() ? user.getEmail() : 'No email provided')

		return response.redirect('/profile')
	}

	* handle_github (request, response) {
		const user = yield request.ally.driver('github').getUser()

		yield request.session.put('username', user.getName())
		yield request.session.put('avatar', user.getAvatar())
		yield request.session.put('nickname', user.getNickname())
		yield request.session.put('email', user.getOriginal().email)

		return response.redirect('/profile')
	}
}

module.exports = ApisController
