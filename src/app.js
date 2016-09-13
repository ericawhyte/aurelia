import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
	router: Router;

	configureRouter(config: RouterConfiguration, router: Router) {
		config.title = 'Contacts';
		config.map([
			{route: '', moduleId: 'no-selection', title: 'Erica Whyte'},
			{route: 'post/:id', moduleId: 'posting', name: 'posts'}
		]);
		this.router = router;
	}
}
