function HtmlElement() {
    this.click = () => {
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = () => {
    console.log('focused')
}

function HtmlSelectElement(array) {


    this.items = (array) ? array : []

    this.addItem = (item) => {

        this.items.push(item)
    }
    this.removeItems = (item) => {

        const index = this.items.indexOf(item)
        if(index > -1) {
            array.splice(index, 1)
        }
        else {
            throw new Error('brak elementu')
        }
    }

    this.render  = () => {
       let options = this.items.map((item) => `<option> ${item} </option>`)

           return `<select>
                       ${options} 
                   </select>`
    }
}

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement

const e = new HtmlElement()

const s = new HtmlSelectElement([1,2])
