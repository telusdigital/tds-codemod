#!/usr/bin/env node

const path = require('path')
const { exec } = require('child_process')
const argv = require('yargs').argv

const transform = require('./transform')

// const command = './node_modules/.bin/jscodeshift -t transform.js -dp'

jscodeshift(transform)

// exec(command, (error, stdout, stderr) => {
//   if (error) {
//     console.log(error)
//   } else if (stdout) {
//     console.log(stdout)
//   }
// })
