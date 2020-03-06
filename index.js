const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var child_process = require('child_process');

child_process.exec('test.bat', function(error, stdout, stderr) {
    console.log(stdout);
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'), {
        myVar: stdout
    }))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
});


