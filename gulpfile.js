var requireDir = require('require-dir')

// Require all tasks in gulp/tasks
requireDir('./gulp/tasks', { recurse: true })