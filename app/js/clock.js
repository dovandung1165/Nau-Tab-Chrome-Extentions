//get time is loading now
var today = new Date();
const getHour = today.getHours();
const getMinute = today.getMinutes();

setMinute = (minute) => {
	if (minute < 10) {
		minute = "0" + minute;
	}
	else minute = minute;
	return minute;
}

document.querySelector("#clock").innerHTML = getHour + ":" + setMinute(getMinute);
//get time function

interval = setInterval((now) => {
	now = new Date();
	const getSecond = now.getSeconds();

	if (getSecond == 0) {
		const nowGetHour = now.getHours();
		const nowGetMinute = now.getMinutes();
		document.querySelector("#clock").innerHTML = nowGetHour + ":" + setMinute(getMinute);
		console.log(typeof (nowGetMinute));
	}

	// console.log(now.getSeconds());
}, 1000);

interval;



// // Promisify async operation:
// const promise = new Promise((resolve, reject) => {
// 	// do async things...
// 	// if success:
// 	resolve(result);
// 	// if failed:
// 	reject(error)
//   });


//   // Code lab expect:

//   setTimeoutPromise(1000)
// 	.then((duration) => {
// 	  console.log('This code runs after', duration, 'ms');
// 	})

// Code lab expect:
function setTimeoutPromise(duration) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(duration);
		}, duration);
	});
}


setTimeoutPromise(1000)
	.then((duration) => {
		console.log('This code runs after', duration, 'ms');
	})

var obj = JSON.parse('{"name": "Nguyễn", "age": 24}');

console.log(obj);
// https://api.openweathermap.org/data/2.5/weather?appid=874c33a3a61f941493eeb28bd14211e2&units=metric&q=ho%20chi%20minh%20city

fetch('https://api.openweathermap.org/data/2.5/weather?appid=874c33a3a61f941493eeb28bd14211e2&units=metric&q=ho%20chi%20minh%20city')
	.then(res => res.json())
	.then(json => {
		console.log('weather fetched', json);
		console.log(typeof (json));
		if (json.cod === 200) {
			document.querySelector('#temp').innerHTML = `${json.main.temp}${'<sup>o</sup>'}`;
		}
	})
	.catch(error => { console.log('weather service errors'); });

