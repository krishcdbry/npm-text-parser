# npm-text-parser
Text parser which receives text data as input and replaces the urls with clickable links (anchor tags), emails as clickable mail:to tags and also replaces hash tags (#tag) empty clickable anchor tag.

## Installation

```bash
npm i npm-text-parser
```

## Usage
```javascript
var parseText = require('npm-text-parser');
```

## parseUrl(text)

Receives the input text and replaces all the url matches with clickable anchor links 
```javascript

  var inputString = "This is awesome it parses the url's dude and http://krishcdbry.com done !"
  
  parseText.parseUrl(inputString);
  // This is awesome it parses the url's dude and <a href="http://krishcdbry.com" 
  // target="_blank">http://krishcdbry.com</a> done !
```

## parseEmail(text)

Receives the input text and replaces all the email matches with clickable mail:to anchor links  
```javascript
  
  var inputString = "This is awesome it parses the email's dude and krishcdbry@gmail.com done !"
  
  parseText.parseEmail(inputString);
  // This is awesome it parses the email's dude and  
  // <a href="mailto:krishcdbry@gmail.com">krishcdbry@gmail.com</a> done !
 
```

## parseHash(text)
Receives the input text and replaces all the hashtag matches with clickable empty anchor links
```javascript
  
  var inputString = "This is awesome it parses the hash tag's dude and #krishcdbry done !"
  
  parseText.parseHashtags(inputString);
   // This is awesome it parses the hash tag's dude and <a href="javascript:;">#krishcdbry</a> done !
 
```

## parse(text)
  Receives text text and replaces the urls with clickable links (anchor tags),
  emails as clickable mail:to tags and also replaces hash tags (#tag) with empty clickable anchor tags
```javascript

  var inputString = "his is awesome it parses the url's , email's and hash tag's dude http://krishcdbry@gmail.com and email krishcdbry@gmail.com also #krishcdbry done !"
 
  parseText.parse(inputString)
  // This is awesome it parses the url's , email's and hash tag's dude 
  // <a href="http://krishcdbry@gmail.com" target="_blank">http://krishcdbry@gmail.com</a>
  // and email <a href="mailto:krishcdbry@gmail.com">krishcdbry@gmail.com</a> 
  // also <a href="javascript:;">#krishcdbry</a> done !
 
 
```
## Demo
Demo @[npm-text-parser](https://tonicdev.com/npm/npm-text-parser)
| https://tonicdev.com/npm/npm-text-parser

## Author
Krishcdbry [krishcdbry@gmail.com]

## Licence
MIT @[krishcdbry](krishcdbry.com)
