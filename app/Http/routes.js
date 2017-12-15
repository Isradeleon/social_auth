'use strict'

const Route = use('Route')

Route.on('/').render('welcome')
Route.get('profile', 'ApisController.profile')

Route.get('facebook/login', 'ApisController.redirect_facebook')
Route.get('authenticated/facebook', 'ApisController.handle_facebook')

Route.get('instagram/login', 'ApisController.redirect_instagram')
Route.get('authenticated/instagram', 'ApisController.handle_instagram')

Route.get('twitter/login', 'ApisController.redirect_twitter')
Route.get('authenticated/twitter', 'ApisController.handle_twitter')
