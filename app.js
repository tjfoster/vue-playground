Vue.component('text-input',{
	props: ['inputinfo'],
	template: '#text-input-template'
});

Vue.component('checkbox-input',{
	props: ['inputinfo'],
	template: '#checkbox-input-template'
})

Vue.component('panel-elem',{
	props: ['panelinfo'],
	template: '#panel-elem-template'
})

var app = new Vue({
	el: '#main',
	data: {
		title: 'Vue.js Playground',
		logo: 'https://vuejs.org/images/logo.png',
		panels: [
			{
				heading: 'What is your name?',
				textboxes: [
					{ id: 'firstname', class: 'col-md-4 col-sm-12 s-textinput', label: 'First Name', help: 'Enter your first name'},
					{ id: 'middlename', class: 'col-md-4 col-sm-12 s-textinput', label: 'Middle Name', help: 'Enter your middle name'},
					{ id: 'lastname', class: 'col-md-4 col-sm-12 s-textinput', label: 'Last Name', help: 'Enter your last name'},
				],
				show: true
			},
			{
				heading: 'What are your favorite colors?',
				checkboxes: [
					{ id: 'red', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Red'},
					{ id: 'green', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Green'},
					{ id: 'yellow', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Yellow'},
					{ id: 'blue', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Blue'},
					{ id: 'orange', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Orange'},
					{ id: 'purple', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Purple'}
				],
				show: false
			}
		]
	}
})
