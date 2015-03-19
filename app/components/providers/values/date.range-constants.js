'use strict'

angular.module('goRemote')
	.value('DateRanges', [
		{name: 'All items', date: moment().subtract(10, 'year')},
		{name:'Newer than 3 months', date: moment().subtract(3, 'month')},
	    {name:'Newer than 6 months', date: moment().subtract(6, 'month')},
	    {name:'Newer than 12 months', date: moment().subtract(1, 'year')}
	]);