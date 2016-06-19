# Barix
A small lightweight jquery like utility


### CDN for Quick-Test
```
  <script type="text/javascript" src="http://codotronix.github.io/codelib/barix/v1.0.1/barix.min.js"></script>
```



### Functions

* `bx(function{ /* Document is ready */ })`         - Shorthand for window.onload / document.ready
* `bx('selector')` or `Barix.select(selector)`      - Selects the elements matching the (css style) String "selector"
* `bx('...').elems`                                 - Returns an array of selected elements. (... = selector)
* `bx('...').attr("attrName")`                      - Returns the value of the given attribute-name [for the 1st element only]
* `bx('...').attr("key","value")`                   - Attribues can be passed as a `JSON` object or a single (key,value) pair
* `bx('...').css("styleName")`                      - Returns the value of the given style [for the 1st element only]
* `bx('...').css("key","value")`                    - Style can be passed as a `JSON` object or a single (key,value) pair
* `bx('...').addClass("class1 class2")`             - Adds the class(es) to the selected elements. (... = selector)
* `bx('...').removeClass("class1 class2")`          - Removes the class(es). `.removeClass()` removes all classes
* `bx('...').hasClass("class1 class2")`             - Returns `true` if all class(es) are present, else false
* `bx('...').each(function(index){...})`            - Do something for each selected element. `index` is passed in each callback
* `bx('...').html("... HTML Content ...")`          - Adds/Overwrites HTML inside selected elements
* `bx('...').append("... HTML Content ...")`        - Appends HTML inside selected elements
* `bx('...').remove()`                              - Removes selected element from DOM
* `bx('...').text("... Some Text...")`              - Adds/Overwrites texts to the selected elements
* `bx('...').appendText("... Some Text...")`        - Appends texts to the selected elements
* `bx('...').on('event', callbackFunction)`         - Adding Event Listeners / Binding events
* `bx('...').on('event', '...', callbackFunction)`  - Dynamic/Late binding of events and eventsHandlers
* `bx('...').trigger('eventName')`                  - Triggers the given event on the selected elements
* `Barix.addFunc("funcName", theFunction)`        - Adds custom function to Barix, which can be called as `bx(...).funcName()`
