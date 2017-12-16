'use strict'

const Route = use('Route')

Route.get('/', 'ApisController.index')
Route.get('/profile', 'ApisController.profile')

Route.get('/facebook/login', 'ApisController.redirect_facebook')
Route.get('/authenticated/facebook', 'ApisController.handle_facebook')

Route.get('/instagram/login', 'ApisController.redirect_instagram')
Route.get('/authenticated/instagram', 'ApisController.handle_instagram')

Route.get('/twitter/login', 'ApisController.redirect_twitter')
Route.get('/authenticated/twitter', 'ApisController.handle_twitter')

Route.get('/github/login', 'ApisController.redirect_github')
Route.get('/authenticated/github', 'ApisController.handle_github')

Route.get('/google/login', 'ApisController.redirect_google')
Route.get('/authenticated/google', 'ApisController.handle_google')
