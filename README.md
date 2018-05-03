# JSLooneyTunes
LooneyTunes implementation in JavaScript.

## Usage ##

#### HTML ####
```html
<script type="text/javascript" src="looneyTunes.js"></script>
```
#### JavaScript ####
```javascript
var init = function(){
  cLooneyTunes.width = window.innerWidth;
  cLooneyTunes.height = window.innerHeight;
  looneyTunes.init(
    'cLooneyTunes', //idCanvas
    5, // number (optional)
    75 // centerRadius (optional)
  );
};
window.addEventListener('load', function() { init(); });
window.addEventListener('resize', function() { init(); });
```
