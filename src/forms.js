export class Forms {
	animal = '';

	submitForm() {
		var animalInfo = {animal: this.animal}
		console.log(animalInfo.animal);
	};
}