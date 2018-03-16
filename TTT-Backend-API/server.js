const express        = require('express');
const bodyParser     = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');	
const app            = express();
app.use(cors());



const port = 8000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log('We are live on ' + port);
});



app.route('/').post((req, res) => {
  
  const url = 'http://terriblytinytales.com/test.txt';


  fetch(url)
  .then((resp) => resp.text())
  .then((body) => {

  	//console.log(body);
  	var temp = body;
  	var words = new Array();
  	words = temp.split(" ");
  	//console.log(words);

  	function sortByCount (wordsMap) {

  // sort by count in descending order
  var finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function (key) {
    return {
      name: key,
      total: wordsMap[key]
    };
  });

  finalWordsArray.sort(function (a, b) {
    return b.total - a.total;
  });

  return finalWordsArray;

}
function createWordMap (wordsArray) {


  var wordsMap = {};

  wordsArray.forEach(function (key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });

  return wordsMap;

}

  var wordsArray = words;
  var wordsMap = createWordMap(wordsArray);
  var finalWordsArray = sortByCount(wordsMap);
  var finResp = new Array();

  console.log(finalWordsArray[0].name);
  for(var i=0;i<req.body.val_n;i++){
  	finResp[i] = [finalWordsArray[i].name,finalWordsArray[i].total];

  }
  console.log(finResp);
  res.status(201).send(finResp);
  console.log("Sent");


  });





})
