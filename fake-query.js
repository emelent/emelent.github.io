const $ = function(){
	class Container{
		constructor(elements){
			this.elements = Array.from(elements)
			for(let prop in elements[0]){
				if(typeof elements[0][prop] === 'function'){
					const elm = this.elements
					this[prop] = function(){
						return elm.map(
							el => el[prop](...arguments)
						)
					}
				}
			}
		}
		css(prop, val){
			const propType = typeof prop
			if(propType === 'string')
				this.elements.forEach(el => el.style[prop] = val)
			else if(propType === 'object'){
				for(let cssProp in prop){
					this.elements.forEach(el => el.style[cssProp] = prop[cssProp])
				}
			}
		}
		set(prop, val){
			if(!this.elements || !this.elements.forEach) return
			this.elements.forEach(el => el[prop] = val)
		}
		get(prop){
			if(!this.elements || !this.elements.map) return
			return this.elements.map(el => el[prop])
		}
		size(){
			if(!this.elements) return 0
			return this.elements.length
		}
		on(event, fn){
			this.elements.forEach(
				el => el['on' + event.toLowerCase()] = fn
			)
		}
		eq(index){
			return this.elements[index]
		}
		toggleClass(c){
			this.elements.forEach(el => el.classList.toggle(c))
		}
		replaceClass(c1, c2){
			this.elements.forEach(el => el.classList.replace(c1, c2))
		}
		removeClass(c){
			this.elements.forEach(el => el.classList.remove(c))
		}
	}

	return query => new Container(document.querySelectorAll(query))
}()