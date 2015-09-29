(function() {
    var moduleId = "weightingCtrl";
    angular.module("comeApp").controller(moduleId, [weightingCtrl]);

    function weightingCtrl() {

        var vm = this;

        vm.weightings = [];

        init();

        function init() {
            vm.weightings = [{
                date: '2015-08-08 7:30',
                w: 85.3
            }, {
                date: '2015-08-09 7:30',
                w: 85.1
            }];
        }
    }
})();
