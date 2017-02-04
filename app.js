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
	template: '#nav-button-template',
	methods: {
		changePanel: function(e) {
			console.log(e.target.id);
			if(e.target.id === 'nextbtn') {
				controller.nextPanel();
			} else if (e.target.id === 'prevbtn') {
				controller.prevPanel();
			}
		}
	}
});

var app = new Vue({
	el: '#main',
	data: {
		title: 'Vue.js Playground',
		logo: 'https://vuejs.org/images/logo.png',
		panels: [
			{
				heading: 'What is your name?',
				inputs: [
					{ id: 'firstname', type: 'text', class: 'col-sm-4 col-xs-12 s-textinput', label: 'First Name', help: 'Enter your first name'},
					{ id: 'middlename', type: 'text', class: 'col-sm-4 col-xs-12 s-textinput', label: 'Middle Name', help: 'Enter your middle name'},
					{ id: 'lastname', type: 'text', class: 'col-sm-4 col-xs-12 s-textinput', label: 'Last Name', help: 'Enter your last name'},
				],
				show: true
			},
			{
				heading: 'What are your favorite colors?',
				inputs: [
					{ id: 'red', type: 'checkbox', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Red'},
					{ id: 'green', type: 'checkbox', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Green'},
					{ id: 'yellow', type: 'checkbox', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Yellow'},
					{ id: 'blue', type: 'checkbox', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Blue'},
					{ id: 'orange', type: 'checkbox', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Orange'},
					{ id: 'purple', type: 'checkbox', class: 'col-md-3 col-sm-4 col-xs-6 s-checkboxinput', text: 'Purple'}
				],
				show: false
			}
		],
		navbuttons: [
			{ id: 'prevbtn', class: 'btn btn-default', colclass: 'col-xs-6', label: 'Prev', glyph: 'glyphicon glyphicon-menu-left', glyphfirst: true, arialabel: 'Previous'},
			{ id: 'nextbtn', class: 'btn btn-default', colclass: 'col-xs-6 s-right', label: 'Next', glyph: 'glyphicon glyphicon-menu-right', glyphfirst: false, arialabel: 'Next'},
		]
	}
})

var controller = {
	currentPanel: 0,
	nextPanel: function() {
		console.log(app);
		app.panels[this.currentPanel].show = false;
		this.currentPanel++;
		app.panels[this.currentPanel].show = true;
	},
	prevPanel: function() {
		app.panels[this.currentPanel].show = false;
		this.currentPanel--;
		app.panels[this.currentPanel].show = true;
	}
};
