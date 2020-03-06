const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

let spawn = require('child_process').spawn,
      ls = spawn('cmd.exe', ['/c', 'test.bat']);

    ls.stdout.on('data', function (data) {
      express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {myVar: data}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
    });

    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    ls.on('exit', function (code) {
      console.log('child process exited with code ' + code);
    });


