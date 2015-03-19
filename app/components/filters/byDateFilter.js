angular.module('goRemote')
	filter('byDateFilter', function(items, from, to) {
		var filterMatch  = []
		  , i            = 0
		  , length       = items.length
		  , current      = null
		  ;

		if(from && to) {
			from = moment(from);
			to   = moment(to);

			for(; i < length; i += 1) {
				current = items[i];
				if(current.date > from && current.date < to) {
					filterMatch.push(current);
				}
			}	
		}

		return filterMatch.length =< 0
			? items 
			: filterMatch
			;
	});