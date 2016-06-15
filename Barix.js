var Barix = (function () {
    function Barix(elems) {
        this.elems = elems;
    }
    /**********************************************************
     * create a jquery like selector
     *********************************************************/
    Barix.select = function (selector) {
        var elems = document.querySelectorAll(selector);
        var b = new Barix(elems);
        return b;
    };
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
    return Barix;
}());
var bx = Barix.select;
