(function() {

    var moduleId = "dietCtrl";
    angular.module("comeApp").controller(moduleId, [dietCtrl]);

    function dietCtrl() {

        var vm = this;

        vm.meals = [];

        init();

        function init() {

            vm.meals = [{
                date: '2015-08-08 7:30',
                name: 'Творог со сметаной',
                w: 200,
                proteins: 30,
                fats: 50,
                carbohydrates: 70,
                gi: 30,
                calories: 100
            }, {
                date: '2015-08-08 13:30',
                name: 'Борщ',
                w: 200,
                proteins: 30,
                fats: 70,
                carbohydrates: 100,
                gi: 50,
                calories: 300
            }];
        }
    }

})();
