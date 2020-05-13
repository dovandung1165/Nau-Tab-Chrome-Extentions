// 'use strict';

// // universal Web Extension
// window.browser = window.msBrowser || window.browser || window.chrome;

// browser.runtime.onInstalled.addListener(details => {
// 	console.log('previousVersion', details.previousVersion);
// });

// // browser.browserAction.setBadgeText({text: 'Nau'});

// const appURL = browser.extension.getURL('index.html');
// // Open new tab with our index.html when click on the extension button
// browser.browserAction.onClicked.addListener(function() {
// 	browser.tabs.create({
// 		url: appURL,
// 	});
// });

fetch('https:api.unsplash.com/photos/?client_id=874f69598a30cdfe952846987ce757df46fb164bfd951e8f714919890942e4b3')
	.then(res => res.json())
	.then(json => {
		console.log('unsplash fetched', json);
		const qAuthor = document.querySelector('.photo-credit__author');
		const qPhoto = document.querySelector('.photo-credit__origin');
		const qWallpaper = document.querySelector('#wallpaper');
		const random = Math.trunc(Math.random() * 9);
		qAuthor.href = json[random].user.links.html;
		qAuthor.innerHTML = json[random].user.name;
		qPhoto.href = json[random].links.html;
		qWallpaper.style.backgroundImage = "url(" + json[random].urls.full + ")";

		setInterval(photo => {
			const random = Math.trunc(Math.random() * 9);
			qAuthor.href = json[random].user.links.html;
			qAuthor.innerHTML = json[random].user.name;
			qPhoto.href = json[random].links.html;
			qWallpaper.style.backgroundImage = "url(" + json[random].urls.full + ")";
		}, 1000 * 60 * 60);
	})
	.catch(error => { console.log('unsplash service errors'); });
