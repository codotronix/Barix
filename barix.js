var Barix = (function () {
    /**********************************************************
     * constructor
     *********************************************************/
    function Barix(elems) {
        this.elems = elems;
    }
    ///////////////////////////////////////////////////////////
    /**********************************************************
     * create a jquery like selector
     *********************************************************/
    Barix.select = function (selector) {
        var elems = new Array();
        if (selector && typeof (selector) == "string") {
            var elemList = document.querySelectorAll(selector);
            for (var i = 0; i < elemList.length; i++) {
                elems.push(elemList[i]);
            }
        }
        else if (selector instanceof Element) {
            elems.push(selector);
        }
        else {
            var e = 'Barix: ' + selector + ' is not a supported selector or Element.';
            throw e;
        }
        var b = new Barix(elems);
        return b;
    };
    ///////////////////////////////////////////////////////////
    /**********************************************************
     * addClass
     *********************************************************/
    Barix.prototype.addClass = function (classNames) {
        var classes = (classNames || "").trim();
        var classAddArr = classes.split(' ');
        var el;
        for (var i = 0; i < this.elems.length; i++) {
            el = this.elems[i];
            for (var j in classAddArr) {
                if (el.className.indexOf(classAddArr[j]) < 0) {
                    el.className += " " + classAddArr[j];
                }
            }
            el.className = el.className.trim();
        }
        return this;
    };
    ///////////////////////////////////////////////////////////
    /**********************************************************
     * removeClass...
     *********************************************************/
    Barix.prototype.removeClass = function (classNames) {
        var classes = (classNames || "").trim();
        //if empty, then remove all classes
        if (classes == "") {
            for (var i = 0; i < this.elems.length; i++) {
                this.elems[i].className = '';
            }
            return this;
        }
        //if Not Empty
        var classRemArr = classes.split(' ');
        var existingClasses;
        var newClasses;
        for (var i = 0; i < this.elems.length; i++) {
            newClasses = '';
            existingClasses = this.elems[i].className.split(' ');
            for (var j = 0; j < existingClasses.length; j++) {
                if (classRemArr.indexOf(existingClasses[j]) < 0) {
                    newClasses += " " + existingClasses[j];
                }
            }
            newClasses = newClasses.trim();
            this.elems[i].className = newClasses;
        }
        return this;
    };
    ///////////////////////////////////////////////////////////
    /**********************************************************
     * hasClass
     *********************************************************/
    Barix.prototype.hasClass = function (classNames) {
        var classes = (classNames || "").trim();
        //if empty, return true
        if (classes == "") {
            return true;
        }
        //if Not Empty
        var classArgArr = classes.split(' ');
        var existingClasses;
        var el;
        var newClasses;
        var hasClass = true;
        for (var i = 0; i < this.elems.length; i++) {
            el = this.elems[i];
            for (var j = 0; j < classArgArr.length; j++) {
                if (el.className.indexOf(classArgArr[j]) < 0) {
                    hasClass = false;
                    return hasClass;
                }
            }
        }
        return hasClass;
    };
    ///////////////////////////////////////////////////////////
    /**********************************************************
     * .each(callback)
     *********************************************************/
    Barix.prototype.each = function (callback) {
        var c;
        for (var i = 0; i < this.elems.length; i++) {
            c = callback.bind(this.elems[i]); //so that this=element
            c(i, this.elems[i]); //param1=index, param2=element=this
        }
        return this;
    };
    ////////////////////////////////////////////////////////////
    /***********************************************************
    * .css({styleNameValuePairObject})
    ***********************************************************/
    Barix.prototype.css = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var el;
        var styleObj;
        if (args.length == 2) {
            styleObj = {};
            styleObj[args[0]] = args[1];
        }
        else if (args.length == 1) {
            styleObj = args[0];
        }
        else {
            var e = 'Barix: css style can be provided as single (name,value) pair or as a json object.';
            throw e;
        }
        for (var i = 0; i < this.elems.length; i++) {
            el = this.elems[i];
            for (var key in styleObj) {
                el.style[key] = styleObj[key];
            }
        }
        return this;
    };
    /////////////////////////////////////////////////////////////
    /***********************************************************
    * .on
    ***********************************************************/
    Barix.prototype.on = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var eventName = args[0];
        var selector;
        var callback;
        if (args.length == 2) {
            callback = args[1];
            for (var i in this.elems) {
                this.elems[i].addEventListener(eventName, callback);
            }
        }
        else if (args.length == 3) {
        }
        return this;
    };
    return Barix;
}());
var bx = Barix.select;
//# sourceMappingURL=barix.js.map