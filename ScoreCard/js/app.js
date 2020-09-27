//Register service worker
if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js')
	.then(
			function(registration) {
				console.log('Service worker has been registered!', registration)
			}
		);
}

var a = "";
function viewsaved() {
localforage.iterate(function(value, key, iterationNumber) {
    
    var b = "<li>"+value.date+" "+value.myTeam+" "+value.myScore+" <b>vs:</b> "+value.oppScore+" "+value.opps+"</li>";
    a+=b;
    document.getElementById('myMatches').innerHTML = a;
}).then(function() {
    //console.log('Iteration has completed');
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});
}

var arr = [];
function uploadsaved() {
	localforage.iterate(function(value, key, iterationNumber) {
    // Resulting key/value pair -- this callback
    // will be executed for every item in the
    // database.
    arr.push(value);
    //console.log([key, value]);
	}).then(function() {
    	//console.log('Iteration has completed');
    	fetch('test.php', {
     	method: 'post',
     	body: JSON.stringify(arr)
		}).then(response => response.text()).then(data => {
     	// data is anything returned by your API/backend code
     	//document.getElementById('area52').innerHTML = data;
	});
    	document.getElementById('myMatches').innerHTML = alert;
	}).catch(function(err) {
    // This code runs if there were any errors
    	console.log(err);
	});
}

var alert = "<div class=\"alert alert-success alert-dismissible\" role=\"alert\">Matches has been uploaded!<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>";