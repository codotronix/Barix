class Barix {
	elems:NodeListOf<Element>;
	
	constructor (elems:NodeListOf<Element>) {
		this.elems = elems;
	}
	
	/**********************************************************
	 * create a jquery like selector
	 *********************************************************/
	public static select (selector: string) {
		let elems = document.querySelectorAll(selector);
		let b = new Barix(elems);
		return b;
	}
	
	
	/**********************************************************
	 * addClass
	 *********************************************************/	
	public addClass (classNames:string) {
		let classes = (classNames || "").trim();
		let classAddArr:string[] = classes.split(' ');
		let el:Element;
		for (let i=0; i< this.elems.length; i++) {			
			el = this.elems[i];	
			for(let j in classAddArr) {
				if(el.className.indexOf(classAddArr[j]) < 0) {
					el.className += " " + classAddArr[j];
				}
			}			
			el.className = el.className.trim();
		}
		return this;
	}
	
		
	
	/**********************************************************
	 * removeClass...
	 *********************************************************/
	public removeClass (classNames:string) {
		let classes = (classNames || "").trim();
		
		//if empty, then remove all classes
		if(classes == ""){
			for (let i=0; i< this.elems.length; i++) {
				this.elems[i].className = '';
			}
			return this;
		}		
		
		//if Not Empty
		let classRemArr:string[] = classes.split(' ');
		let existingClasses:string[];
		let newClasses:string;
		for (let i=0; i< this.elems.length; i++) {
			newClasses = '';
			existingClasses = this.elems[i].className.split(' ');			
			for(let j=0; j < existingClasses.length; j++) {
				if (classRemArr.indexOf(existingClasses[j]) < 0) {
					newClasses += " " + existingClasses[j];
				}
			}			
			newClasses = newClasses.trim();
			this.elems[i].className = newClasses;
		}
		return this;
	}
	
	
	
	/**********************************************************
	 * hasClass
	 *********************************************************/
	public hasClass (classNames:string): boolean {
		let classes = (classNames || "").trim();
		
		//if empty, return true
		if(classes == ""){
			return true;
		}		
		
		//if Not Empty
		let classArgArr:string[] = classes.split(' ');
		let existingClasses:string[];
		let el:Element;
		let newClasses:string;
		let hasClass:boolean = true;
		
		for (let i=0; i< this.elems.length; i++) {
			el = this.elems[i];			
			for(let j=0; j<classArgArr.length; j++) {
				if(el.className.indexOf(classArgArr[j]) < 0) {
					hasClass=false;
					return hasClass;
				}
			}
		}
		return hasClass;
	}
	
	/**********************************************************
	 * .each(callback)
	 *********************************************************/
	public each (callback: Function) {
		let c:Function;
		for (let i=0; i< this.elems.length; i++) {
			c = callback.bind(this.elems[i]);		//so that this=element
			c(i, this.elems[i]);					//param1=index, param2=element=this
		}
	}
	
}

var bx = Barix.select;
