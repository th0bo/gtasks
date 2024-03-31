const fs = require('node:fs');

const rootDir = __dirname;
const scriptId = "1WSAwCTQ4paxDjometwtzcr29gOb7Li0iGUoS7lkjU7c_tVjCUM2QkdoX";
const content = JSON.stringify({ scriptId, rootDir });

fs.writeFileSync(".clasp.json", content);