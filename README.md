# Barix
A small lightweight jquery like utility


### Functions

* `bx(function{ /* Document is ready */ })`       - Shorthand for window.onload / document.ready
* `bx(selector)` or `Barix.select(selector)`      - Selects the elements matching the (css style) String "selector"
* `bx(...).elems`                                 - Returns an array of selected elements. (... = selector)
* `bx(...).addClass("class1 class2")`             - Adds the class(es) to the selected elements. (... = selector)
* `bx(...).removeClass("class1 class2")`          - Removes the class(es). `.removeClass()` removes all classes
* `bx(...).hasClass("class1 class2")`             - Returns `true` if all class(es) are present, else false
* `bx(...).each(function(index){...})`            - Do something for each selected element. `index` is passed in each callback
* `bx(...).css("key","value")`                    - Style can be passed as a `JSON` object or a single (key,value) pair
* `bx('...').on('event', callbackFunction)`       - Adding Event Listeners / Binding events
* `bx('...').on('event', '...', callbackFunction)`- Dynamic/Late binding of events and eventsHandlers
* `bx('...').html("... HTML Content ...")`        - Adds/Overwrites HTML inside selected elements
* `bx('...').append("... HTML Content ...")`      - Appends HTML inside selected elements
* `bx('...').text("... Some Text...")`            - Adds/Overwrites texts to the selected elements
* `bx('...').appendText("... Some Text...")`      - Appends texts to the selected elements
* `bx('...').trigger('eventName')`                - Triggers the given event on the selected elements
* `Barix.addFunc("funcName", theFunction)`        - Adds custom function to Barix, which can be called as `bx(...).funcName()`
