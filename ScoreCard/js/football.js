//prototype data structure
var match = {
	myTeam: "",
	opps: "",
	date: "",
	id: "",
	sport: "football",
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
	playa12: {},
	playa13: {},
	playa14: {},
	playa15: {}
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
	match.playa1.goals = document.getElementById('playa1Goals').value;
	match.playa1.assists = document.getElementById('playa1Assists').value;
	match.playa1.fouls = document.getElementById('playa1Fouls').value;
	match.playa1.yellows = document.getElementById('playa1Yellows').value;
	match.playa1.reds = document.getElementById('playa1Reds').value;
	match.playa1.shotsOn = document.getElementById('playa1ShotsOn').value;
	match.playa1.shotsOff = document.getElementById('playa1ShotsOff').value;
	match.playa1.saves = document.getElementById('playa1Saves').value;

	match.playa2.name = document.getElementById('playa2Name').value;
	match.playa2.goals = document.getElementById('playa2Goals').value;
	match.playa2.assists = document.getElementById('playa2Assists').value;
	match.playa2.fouls = document.getElementById('playa2Fouls').value;
	match.playa2.yellows = document.getElementById('playa2Yellows').value;
	match.playa2.reds = document.getElementById('playa2Reds').value;
	match.playa2.shotsOn = document.getElementById('playa2ShotsOn').value;
	match.playa2.shotsOff = document.getElementById('playa2ShotsOff').value;
	match.playa2.saves = document.getElementById('playa2Saves').value;

	match.playa3.name = document.getElementById('playa3Name').value;
	match.playa3.goals = document.getElementById('playa3Goals').value;
	match.playa3.assists = document.getElementById('playa3Assists').value;
	match.playa3.fouls = document.getElementById('playa3Fouls').value;
	match.playa3.yellows = document.getElementById('playa3Yellows').value;
	match.playa3.reds = document.getElementById('playa3Reds').value;
	match.playa3.shotsOn = document.getElementById('playa3ShotsOn').value;
	match.playa3.shotsOff = document.getElementById('playa3ShotsOff').value;
	match.playa3.saves = document.getElementById('playa3Saves').value;

	match.playa4.name = document.getElementById('playa4Name').value;
	match.playa4.goals = document.getElementById('playa4Goals').value;
	match.playa4.assists = document.getElementById('playa4Assists').value;
	match.playa4.fouls = document.getElementById('playa4Fouls').value;
	match.playa4.yellows = document.getElementById('playa4Yellows').value;
	match.playa4.reds = document.getElementById('playa4Reds').value;
	match.playa4.shotsOn = document.getElementById('playa4ShotsOn').value;
	match.playa4.shotsOff = document.getElementById('playa4ShotsOff').value;
	match.playa4.saves = document.getElementById('playa4Saves').value;

	match.playa5.name = document.getElementById('playa5Name').value;
	match.playa5.goals = document.getElementById('playa5Goals').value;
	match.playa5.assists = document.getElementById('playa5Assists').value;
	match.playa5.fouls = document.getElementById('playa5Fouls').value;
	match.playa5.yellows = document.getElementById('playa5Yellows').value;
	match.playa5.reds = document.getElementById('playa5Reds').value;
	match.playa5.shotsOn = document.getElementById('playa5ShotsOn').value;
	match.playa5.shotsOff = document.getElementById('playa5ShotsOff').value;
	match.playa5.saves = document.getElementById('playa5Saves').value;

	match.playa6.name = document.getElementById('playa6Name').value;
	match.playa6.goals = document.getElementById('playa6Goals').value;
	match.playa6.assists = document.getElementById('playa6Assists').value;
	match.playa6.fouls = document.getElementById('playa6Fouls').value;
	match.playa6.yellows = document.getElementById('playa6Yellows').value;
	match.playa6.reds = document.getElementById('playa6Reds').value;
	match.playa6.shotsOn = document.getElementById('playa6ShotsOn').value;
	match.playa6.shotsOff = document.getElementById('playa6ShotsOff').value;
	match.playa6.saves = document.getElementById('playa6Saves').value;

	match.playa7.name = document.getElementById('playa7Name').value;
	match.playa7.goals = document.getElementById('playa7Goals').value;
	match.playa7.assists = document.getElementById('playa7Assists').value;
	match.playa7.fouls = document.getElementById('playa7Fouls').value;
	match.playa7.yellows = document.getElementById('playa7Yellows').value;
	match.playa7.reds = document.getElementById('playa7Reds').value;
	match.playa7.shotsOn = document.getElementById('playa7ShotsOn').value;
	match.playa7.shotsOff = document.getElementById('playa7ShotsOff').value;
	match.playa7.saves = document.getElementById('playa7Saves').value;

	match.playa8.name = document.getElementById('playa8Name').value;
	match.playa8.goals = document.getElementById('playa8Goals').value;
	match.playa8.assists = document.getElementById('playa8Assists').value;
	match.playa8.fouls = document.getElementById('playa8Fouls').value;
	match.playa8.yellows = document.getElementById('playa8Yellows').value;
	match.playa8.reds = document.getElementById('playa8Reds').value;
	match.playa8.shotsOn = document.getElementById('playa8ShotsOn').value;
	match.playa8.shotsOff = document.getElementById('playa8ShotsOff').value;
	match.playa8.saves = document.getElementById('playa8Saves').value;

	match.playa9.name = document.getElementById('playa9Name').value;
	match.playa9.goals = document.getElementById('playa9Goals').value;
	match.playa9.assists = document.getElementById('playa9Assists').value;
	match.playa9.fouls = document.getElementById('playa9Fouls').value;
	match.playa9.yellows = document.getElementById('playa9Yellows').value;
	match.playa9.reds = document.getElementById('playa9Reds').value;
	match.playa9.shotsOn = document.getElementById('playa9ShotsOn').value;
	match.playa9.shotsOff = document.getElementById('playa9ShotsOff').value;
	match.playa9.saves = document.getElementById('playa9Saves').value;

	match.playa10.name = document.getElementById('playa10Name').value;
	match.playa10.goals = document.getElementById('playa10Goals').value;
	match.playa10.assists = document.getElementById('playa10Assists').value;
	match.playa10.fouls = document.getElementById('playa10Fouls').value;
	match.playa10.yellows = document.getElementById('playa10Yellows').value;
	match.playa10.reds = document.getElementById('playa10Reds').value;
	match.playa10.shotsOn = document.getElementById('playa10ShotsOn').value;
	match.playa10.shotsOff = document.getElementById('playa10ShotsOff').value;
	match.playa10.saves = document.getElementById('playa10Saves').value;

	match.playa11.name = document.getElementById('playa11Name').value;
	match.playa11.goals = document.getElementById('playa11Goals').value;
	match.playa11.assists = document.getElementById('playa11Assists').value;
	match.playa11.fouls = document.getElementById('playa11Fouls').value;
	match.playa11.yellows = document.getElementById('playa11Yellows').value;
	match.playa11.reds = document.getElementById('playa11Reds').value;
	match.playa11.shotsOn = document.getElementById('playa11ShotsOn').value;
	match.playa11.shotsOff = document.getElementById('playa11ShotsOff').value;
	match.playa11.saves = document.getElementById('playa11Saves').value;

	match.playa12.name = document.getElementById('playa12Name').value;
	match.playa12.goals = document.getElementById('playa12Goals').value;
	match.playa12.assists = document.getElementById('playa12Assists').value;
	match.playa12.fouls = document.getElementById('playa12Fouls').value;
	match.playa12.yellows = document.getElementById('playa12Yellows').value;
	match.playa12.reds = document.getElementById('playa12Reds').value;
	match.playa12.shotsOn = document.getElementById('playa12ShotsOn').value;
	match.playa12.shotsOff = document.getElementById('playa12ShotsOff').value;
	match.playa12.saves = document.getElementById('playa12Saves').value;

	match.playa13.name = document.getElementById('playa13Name').value;
	match.playa13.goals = document.getElementById('playa13Goals').value;
	match.playa13.assists = document.getElementById('playa13Assists').value;
	match.playa13.fouls = document.getElementById('playa13Fouls').value;
	match.playa13.yellows = document.getElementById('playa13Yellows').value;
	match.playa13.reds = document.getElementById('playa13Reds').value;
	match.playa13.shotsOn = document.getElementById('playa13ShotsOn').value;
	match.playa13.shotsOff = document.getElementById('playa13ShotsOff').value;
	match.playa13.saves = document.getElementById('playa13Saves').value;

	match.playa14.name = document.getElementById('playa14Name').value;
	match.playa14.goals = document.getElementById('playa14Goals').value;
	match.playa14.assists = document.getElementById('playa14Assists').value;
	match.playa14.fouls = document.getElementById('playa14Fouls').value;
	match.playa14.yellows = document.getElementById('playa14Yellows').value;
	match.playa14.reds = document.getElementById('playa14Reds').value;
	match.playa14.shotsOn = document.getElementById('playa14ShotsOn').value;
	match.playa14.shotsOff = document.getElementById('playa14ShotsOff').value;
	match.playa14.saves = document.getElementById('playa14Saves').value;

	match.playa15.name = document.getElementById('playa15Name').value;
	match.playa15.goals = document.getElementById('playa15Goals').value;
	match.playa15.assists = document.getElementById('playa15Assists').value;
	match.playa15.fouls = document.getElementById('playa15Fouls').value;
	match.playa15.yellows = document.getElementById('playa15Yellows').value;
	match.playa15.reds = document.getElementById('playa15Reds').value;
	match.playa15.shotsOn = document.getElementById('playa15ShotsOn').value;
	match.playa15.shotsOff = document.getElementById('playa15ShotsOff').value;
	match.playa15.saves = document.getElementById('playa15Saves').value;
	
	//saving the match to localforage
	localforage.setItem(match.id, match).then(function(value) {
    	// This will output `1`.
    	console.log(match);
	}).catch(function(err) {
    	// This code runs if there were any errors
    	console.log(err);
	});

	document.getElementById('area52').innerHTML = alert;
}

//bootstrap alert code
var alert = "<div class=\"alert alert-success alert-dismissible\" role=\"alert\">Match has been saved!<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>";