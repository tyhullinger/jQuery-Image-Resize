# jQuery Image Resize #

### Requirements ###
jQuery

### Usage ###

Below the code will look for images in the element that has the images id and will make sure that the max width and height are both under 175. If the image height is greater than 175 it will shrink it and make the width proportional. The same goes with the width. If the width is greater than 175 it will shrink it and make sure that the height is proportional.

```javascript
$(document).ready(function() {
  $('#images img').imageResize({ max: 175 });
});
```
