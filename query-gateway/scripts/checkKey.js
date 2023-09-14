const fs = require('fs')
const keyPath = process.argv[2]
if (!keyPath || !fs.existsSync(keyPath) || !fs.lstatSync(keyPath).isFile()) {
	console.error(`ERROR: Key file not found at ${keyPath}`)
	process.exit(1)
}
