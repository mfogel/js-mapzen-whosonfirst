var fs = require('fs')
var path = require('path')
var vm = require('vm')

// Helper function that sources a file with a given context
// https://stackoverflow.com/a/8808162/103909
var execfile = function (path, context) {
  context = context || {}
  var data = fs.readFileSync(path)
  vm.runInNewContext(data, context, path)
  return context
}

// directory where all the mapzen libs live
var srcDir = path.resolve(__dirname, 'src')

// these files can't handle being sourced
var filesToSkip = ['mapzen.whosonfirst.chrome.init.js']

// context we will source all the mapzen libs with
var context = {mapzen: {}}

var fileNames = fs.readdirSync(srcDir)
fileNames.forEach(function (fileName) {
  if (filesToSkip.indexOf(fileName) > -1) {
    return
  }
  var filePath = path.resolve(srcDir, fileName)
  execfile(filePath, context)
})

module.exports = context.mapzen.whosonfirst
