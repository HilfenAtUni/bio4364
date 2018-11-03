var result = '';

var zap_hep = function(start_num, end_num) {

	var dom = document.getElementById('output');

	for (var i = start_num; i < end_num; i++) {
		console.log("i: " + i);
		var idx = i.toString().indexOf('3');
		var tmp = '';
		if (0 == (i%3)) {
			tmp = 'ZAP';
		}
		if (-1 != idx) {
			tmp += ' HEP';
		}
		if ('' == tmp) {
			tmp = i;
		}
		tmp += '<br/>';
		result += tmp;
	}
	console.log(result);
	dom.innerHTML = result;
}

var cls = function() {
	var dom = document.getElementById('output');
	result = '';
	dom.innerHTML = '';
}
