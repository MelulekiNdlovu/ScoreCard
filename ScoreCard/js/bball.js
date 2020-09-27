//prototype data structure
var match = {
	myTeam: "",
	opps: "",
	date: "",
	id: "",
	sport: "basketball",
	oppScore: "",
	myScore: "",
	playa1: {},
	playa2: {},
	playa3: {},
	playa4: {},
	playa5: {},
	playa6: {},
	playa7: {},
	playa8: {},
	playa9: {},
	playa10: {},
	playa11: {},
	playa12: {}
}

//function for saving a score sheet
function saver() {
	//match data
	match.myTeam = document.getElementById('myTeam').value;
	match.opps = document.getElementById('opps').value;
	match.date = document.getElementById('date').value;
	match.id = match.myTeam+match.opps+match.date;
	match.myScore = document.getElementById('myScore').value;
	match.oppScore = document.getElementById('oppScore').value;

	//players data
	match.playa1.name = document.getElementById('playa1Name').value;
	match.playa1.pts = document.getElementById('playa1Pts').value;
	match.playa1.assists = document.getElementById('playa1Assists').value;
	match.playa1.rebounds = document.getElementById('playa1Rebounds').value;
	match.playa1.steals = document.getElementById('playa1Steals').value;
	match.playa1.fouls = document.getElementById('playa1Fouls').value;

	match.playa2.name = document.getElementById('playa2Name').value;
	match.playa2.pts = document.getElementById('playa2Pts').value;
	match.playa2.assists = document.getElementById('playa2Assists').value;
	match.playa2.rebounds = document.getElementById('playa2Rebounds').value;
	match.playa2.steals = document.getElementById('playa2Steals').value;
	match.playa2.fouls = document.getElementById('playa2Fouls').value;

	match.playa3.name = document.getElementById('playa3Name').value;
	match.playa3.pts = document.getElementById('playa3Pts').value;
	match.playa3.assists = document.getElementById('playa3Assists').value;
	match.playa3.rebounds = document.getElementById('playa3Rebounds').value;
	match.playa3.steals = document.getElementById('playa3Steals').value;
	match.playa3.fouls = document.getElementById('playa3Fouls').value;

	match.playa4.name = document.getElementById('playa4Name').value;
	match.playa4.pts = document.getElementById('playa4Pts').value;
	match.playa4.assists = document.getElementById('playa4Assists').value;
	match.playa4.rebounds = document.getElementById('playa4Rebounds').value;
	match.playa4.steals = document.getElementById('playa4Steals').value;
	match.playa4.fouls = document.getElementById('playa4Fouls').value;

	match.playa5.name = document.getElementById('playa5Name').value;
	match.playa5.pts = document.getElementById('playa5Pts').value;
	match.playa5.assists = document.getElementById('playa5Assists').value;
	match.playa5.rebounds = document.getElementById('playa5Rebounds').value;
	match.playa5.steals = document.getElementById('playa5Steals').value;
	match.playa5.fouls = document.getElementById('playa5Fouls').value;

	match.playa6.name = document.getElementById('playa6Name').value;
	match.playa6.pts = document.getElementById('playa6Pts').value;
	match.playa6.assists = document.getElementById('playa6Assists').value;
	match.playa6.rebounds = document.getElementById('playa6Rebounds').value;
	match.playa6.steals = document.getElementById('playa6Steals').value;
	match.playa6.fouls = document.getElementById('playa6Fouls').value;

	match.playa7.name = document.getElementById('playa7Name').value;
	match.playa7.pts = document.getElementById('playa7Pts').value;
	match.playa7.assists = document.getElementById('playa7Assists').value;
	match.playa7.rebounds = document.getElementById('playa7Rebounds').value;
	match.playa7.steals = document.getElementById('playa7Steals').value;
	match.playa7.fouls = document.getElementById('playa7Fouls').value;

	match.playa8.name = document.getElementById('playa8Name').value;
	match.playa8.pts = document.getElementById('playa8Pts').value;
	match.playa8.assists = document.getElementById('playa8Assists').value;
	match.playa8.rebounds = document.getElementById('playa8Rebounds').value;
	match.playa8.steals = document.getElementById('playa8Steals').value;
	match.playa8.fouls = document.getElementById('playa8Fouls').value;

	match.playa9.name = document.getElementById('playa9Name').value;
	match.playa9.pts = document.getElementById('playa9Pts').value;
	match.playa9.assists = document.getElementById('playa9Assists').value;
	match.playa9.rebounds = document.getElementById('playa9Rebounds').value;
	match.playa9.steals = document.getElementById('playa9Steals').value;
	match.playa9.fouls = document.getElementById('playa9Fouls').value;

	match.playa10.name = document.getElementById('playa10Name').value;
	match.playa10.pts = document.getElementById('playa10Pts').value;
	match.playa10.assists = document.getElementById('playa10Assists').value;
	match.playa10.rebounds = document.getElementById('playa10Rebounds').value;
	match.playa10.steals = document.getElementById('playa10Steals').value;
	match.playa10.fouls = document.getElementById('playa10Fouls').value;

	match.playa11.name = document.getElementById('playa11Name').value;
	match.playa11.pts = document.getElementById('playa11Pts').value;
	match.playa11.assists = document.getElementById('playa11Assists').value;
	match.playa11.rebounds = document.getElementById('playa11Rebounds').value;
	match.playa11.steals = document.getElementById('playa11Steals').value;
	match.playa11.fouls = document.getElementById('playa11Fouls').value;

	match.playa12.name = document.getElementById('playa12Name').value;
	match.playa12.pts = document.getElementById('playa12Pts').value;
	match.playa12.assists = document.getElementById('playa12Assists').value;
	match.playa12.rebounds = document.getElementById('playa12Rebounds').value;
	match.playa12.steals = document.getElementById('playa12Steals').value;
	match.playa12.fouls = document.getElementById('playa12Fouls').value;
	
	//saving the match to localforage
	localforage.setItem(match.id, match).then(function(value) {
    	// This will output `1`.
    	console.log(match);
	}).catch(function(err) {
    	// This code runs if there were any errors
    	console.log(err);
	});

	document.getElementById('area52').innerHTML = alert+JSON.stringify(match);
}

//bootstrap alert code
var alert = "<div class=\"alert alert-success alert-dismissible\" role=\"alert\">Match has been saved!<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>";