angular-new-relic-insights
============================

An AngularJS directive to log custom events to New Relic Insights

This has not been tested yet!!!!!!!!

Assumes that you have already configured your site for New Relic and have access to the New Relic Browser Insights.


Module
--------

```javascript
angular.module('app', ['angular-new-relic-insights'])

```

Usage
---------

```html
<button nr-insights="CustomActionName" action-event="click" action-data="yourData">Click Me</button>
```


Parameters
---------------

|------|------|
|`nr-insights`|  {string} *Required* Action Name.  Place this on any element to log the action event to New Relic Insights|
|`action-event`| {string} *Required* Any JavaScript event handle (ex. click, touch, mouseover, mousein, etc)|
|`action-data`|  {object} Any scope data object. |

