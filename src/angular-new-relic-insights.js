(function(angular, newrelic){

	if (angular == null){
		throw('Angular not found');
	}

	if (newrelic == null){
		throw('New Relic not found');
	}

	var EVENT_NAMESPACE = '.newRelicInsights';

	angular.module('angular-new-relic-insights', [])
	.directive('nr-insights', function() {

		return {
			restrict: 'A',
			link:link
		};

		var link = function(scope, element, attrs){
			var actionName = attrs.nrInsights;
 			var actionEvent = attrs.actionEvent;

			var init = function(){
				if (actionName != null && actionEvent != null) {
					element.on(actionEvent + EVENT_NAMESPACE, function() {
						var actionData;

						if (attrs.actionData != null) {
							actionData = $parse(attr.actionData)(scope);
						}

						newrelic.addPageAction(actionName, actionData);
					});
				}else{
					throw ('Missing New Relic Action Name or Event.');
				}
			};

			init();

			scope.$on('$destroy', function(){
				element.off(EVENT_NAMESPACE);
			});

		};

	});

})(angular, newrelic);