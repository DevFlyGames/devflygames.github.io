class Node {
  constructor (parent, classVar, tag, id) {
    if (typeof tag === 'string') {
      this._tag = tag
      this.node = document.createElement(this._tag)
    } else {
      this.node = document.createElement('div')
    }
    if (typeof id === 'string') {
      this._id = id
    }
    this.parent = parent
    this._class = ''
    this.classVar = classVar

    this.node.setAttribute('class', this._class)
  }

  set parent (parent) {
    if (Node.isNode(parent) || Node.isSVGNode(parent)) {
      this._parent = parent
    } else {
      throw new Error(parent + ' is not a Node')
    }
  }

  get parent () {
    return this._parent
  }

  get id () {
    return this._id
  }

  set classVar (classVar) {
    if (typeof classVar === 'string') {
      this._class = classVar
    } else {
      throw new Error(classVar + ' is not a string')
    }
  }

  set innerHTML (text) {
    console.log(text)
    this.node.innerHTML = text
  }

  get innerHTML () {
    return this.node.innerHTML
  }

  set value (value) {
    this.node.value = value
  }

  get value () {
    return this.node.value
  }

  addClass (classVar) {
    if (typeof classVar === 'string') {
      this._class += ' ' + classVar
      this.node.setAttribute('class', this._class)
    }
  }

  get classVar () {
    return this._class
  }

  get nodeName () {
    return this.node.nodeName
  }

  appendChild (child) {
    this.node.appendChild(child)
  }

  draw (node) {
    if (typeof node !== 'undefined' && Node.isNode(node)) {
      node.appendChild(this.node)
    } else {
      this._parent.appendChild(this.node)
    }
  }

  remove () {
    this.node.parentNode.removeChild(this.node)
  }

  addEventListener (e, func) {
    this.node.addEventListener(e, func)
  }

  static isNode (node) {
    return node.nodeName !== 'undefined'
  }

  static isSVGNode (node) {
    return Object.prototype.toString.call(variable) === '[object SVGElement]'
  }
}
