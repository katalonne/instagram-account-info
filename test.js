const getPlugins = require('./dist/babelPresetEnvAvailablePlugins.node')

getPlugins().then(r => console.log(r))