const fs = require('fs-extra')
fs.removeSync('docs')
fs.renameSync('public','docs')