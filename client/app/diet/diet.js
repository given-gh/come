(function() {

	var moduleId = "dietCtrl";
	angular.module("comeApp").controller(moduleId, [dietCtrl]);

	function dietCtrl() {

		var vm = this;

		vm.rows = [];
		vm.meals = [];
		vm.refMeals = [];
		vm.showDetails = true;

		vm.filterByName = "";
		vm.sortField = "date";
		vm.reverse = false;

		vm.currentMeal = null;

		vm.cancel = cancel;
		vm.edit = edit;
		vm.evaluateMeal = evaluateMeal;
		vm.save = save;
		vm.sort = sort;

		init();

		function cancel() {
			console.log("Button Cancel clicked");
			vm.currentMeal = null;
		}


		function edit(row) {
			console.log("Row was clicked", row);
			vm.currentMeal = angular.copy(row);
		}

		function evaluateMeal(row) {
			if (row.calories > 500) return "bad";
			if (row.calories > 200 && row.calories <= 500) return "normal";
			if (row.calories > 0 && row.calories <= 200) return "good";
		}

		function init() {

			vm.refMeals = [
				{ name: 'Творог со сметаной'},
				{ name: 'Борщ'},
				{ name: 'Картофель отварной'},
				{ name: 'Суп молочный с вермишелью'},
				{ name: 'Салат овощной'},
				{ name: 'Буженина'},
				{ name: 'Каша гречневая'},
				{ name: 'Сметана' }
			];


			vm.meals = [
				{ date: '2015-08-08', time: '07:30', name: 'Творог со сметаной', w: 200, proteins: 30, fats: 50, carbohydrates: 70, gi: 30, calories: 100 },
				{ date: '2015-08-08', time: '13:30', name: 'Борщ', w: 200, proteins: 30, fats: 70, carbohydrates: 100, gi: 50, calories: 300 },
				{ date: '2015-08-08', time: '18:30', name: 'Картофель отварной', w: 300, proteins: 30, fats: 70, carbohydrates: 100, gi: 50, calories: 600 },
				{ date: '2015-08-09', time: '07:30', name: 'Суп молочный с вермишелью', w: 200, proteins: 30, fats: 70, carbohydrates: 100, gi: 50, calories: 300 },
				{ date: '2015-08-09', time: '13:30', name: 'Салат овощной', w: 200, proteins: 30, fats: 70, carbohydrates: 100, gi: 50, calories: 300 },
				{ date: '2015-08-09', time: '18:00', name: 'Буженина', w: 200, proteins: 30, fats: 70, carbohydrates: 100, gi: 50, calories: 300 },
				{ date: '2015-08-09', time: '18:00', name: 'Каша гречневая', w: 200, proteins: 30, fats: 70, carbohydrates: 100, gi: 50, calories: 300 },
				{ date: '2015-08-10', time: '18:20', name: 'Сметана', w: 200, proteins: 30, fats: 70, carbohydrates: 100, gi: 50, calories: 300 }
			];
		}

		function save() {
			console.log("Button Save clicked");
		}


		function sort(fieldName) {
			if (vm.sortField === fieldName) {
				vm.reverse = !vm.reverse;
			} else {
				vm.sortField = fieldName;
				vm.reverse = false;
			}		
		}

	}
})();
