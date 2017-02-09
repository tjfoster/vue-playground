Vue.component('text-input',{
	props: ['inputinfo'],
	template: '#text-input-template',
});

Vue.component('checkbox-input',{
	props: ['inputinfo'],
	template: '#checkbox-input-template',
	
})

Vue.component('panel-elem',{
	props: ['panelinfo'],
	template: '#panel-elem-template'
})

Vue.component('nav-button', {
	props: ['buttoninfo'],
	template: '#nav-button-template'
});

var app = new Vue({
	el: '#main',
	data: {
		title: 'Vue.js Playground',
		logo: 'https://vuejs.org/images/logo.png',
		currentPanel: 0,
		colors:[],
		panels: [
			{
				heading: 'What is your name?',
				inputs: [
					{ id: 'firstname', type: 'text', class: 'col-sm-4 col-xs-12 s-textinput', label: 'First Name', help: 'Enter your first name', value: '', required: true},
					{ id: 'middlename', type: 'text', class: 'col-sm-4 col-xs-12 s-textinput', label: 'Middle Name', help: 'Enter your middle name', value: '', required: true},
					{ id: 'lastname', type: 'text', class: 'col-sm-4 col-xs-12 s-textinput', label: 'Last Name', help: 'Enter your last name', value: '', required: true},
				]
			},
			{
				heading: 'What are your favorite colors?',
				inputs: [
					{ id: 'red', type: 'checkbox', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Red', name: 'colors'},
					{ id: 'green', type: 'checkbox', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Green', name: 'colors'},
					{ id: 'yellow', type: 'checkbox', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Yellow', name: 'colors'},
					{ id: 'blue', type: 'checkbox', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Blue', name: 'colors'},
					{ id: 'orange', type: 'checkbox', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Orange', name: 'colors'},
					{ id: 'purple', type: 'checkbox', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Purple', name: 'colors'}
				]
			}
		],
	},
	methods: {
		nextPanel: function() {
			this.currentPanel++;
		},
		prevPanel: function() {
			this.currentPanel--;
		}

	}
})

