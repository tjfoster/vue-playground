Vue.component('text-input',{
	props: ['inputinfo'],
	template: '#text-input-template'
});

Vue.component('checkbox-input',{
	props: ['inputinfo'],
	template: '#checkbox-input-template'
});

var app = new Vue({
	el: '#main',
	data: {
		title: 'Vue.js Playground',
		logo: 'https://vuejs.org/images/logo.png',
		textboxes : [
			{ id: 'firstname', label: 'First Name', help: 'Enter your first name'},
			{ id: 'middlename', label: 'Middle Name', help: 'Enter your middle name'},
			{ id: 'lastname', label: 'Last Name', help: 'Enter your last name'},
		],
		checkboxes : [
			{ id: 'late', text: 'stay up late'},
			{ id: 'vacay', text: 'go on vacation'},
			{ id: 'movies', text: 'go to the movies'},
			{ id: 'sushi', text: 'eat sushi'},
			{ id: 'walk', text: 'take long walks'}
		]
	}
})
