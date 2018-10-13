// server.js
"use strict";
var fs = require('fs');
var {
	createServer
} = require('./server');
let server = null;
// One-liner for current directory, ignores .dotfiles
let serverTimer = null;

function iterate() {
	const routes = []
	fs.readdirSync('./applications').forEach(x => {
		const currentPath = `${__dirname}/applications/${x}`
		try {
			routes.push({
				path: x,
				fullPath: currentPath,
				json: JSON.parse(fs.readFileSync(currentPath))
			})
		} catch (error) {
			console.error('Error while parsing', error.message)
		}
	});
	if (serverTimer) {
		clearTimeout(serverTimer);
		serverTimer = null;
	}
	serverTimer = creatingServer(routes)
}

function creatingServer(routes) {
	return setTimeout(function () {
		server = createServer(routes, (req, res) => {
			console.log('restarting again...')
			killServer();
		})
	}, 3000)
}

function killServer() {
	killserverFuntionNotFound()
}
iterate()