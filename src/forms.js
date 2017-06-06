import {ValidationRules, ValidationController} from "aurelia-validation";
import {inject, NewInstance} from 'aurelia-framework';

@inject(NewInstance.of(ValidationController))
export class Forms {

	//for the radio buttons
	radios = [];
	selectedRadio = {};

	//for the select list
	options = [];
	selectedOption = [];

	controller;

	constructor(controller) {

		this.controller = controller;

		//for the checkbox
		this.isChecked = false;

		//for the radio buttons
		this.radios = [
			{id:1, text: 'first'},
			{id:2, text: 'second'},
			{id:3, text: 'third'}
		];
		this.selectedRadio;

		//for the select list
		this.options = [
			{id:1, text: 'red'},
			{id:2, text: 'green'},
			{id:3, text: 'blue'}
		];
		this.selectedOption;

		ValidationRules.ensure((m: Forms) => {
			return m.animal
		}).required().on(this);
	}

	//for the textfield
	animal = '';

	submitForm() {
		var animalInfo = {animal: this.animal}
		console.log(animalInfo.animal);
		console.log("isChecked: " + this.isChecked);
		console.log('checked: ' + this.selectedRadio.id);
		console.log('selected: ' + this.selectedOption.id);
		this.executeValidation();
	};

	executeValidation() {
    this.controller.validate()
      .then(errors => {
        if (errors.length === 0) {
          console.log('ok');
        } else {
          console.log('youHaveErrors');
        }
      });
  }
}