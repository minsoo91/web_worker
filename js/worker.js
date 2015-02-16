onmessage = function(e) {
	console.log('Messaged received from main script');
	var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
	console.log('Posting message back to main script');
	postMessage(workerResult)
}