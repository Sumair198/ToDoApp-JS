function send() {
    var inp = document.getElementById('inputvalue')
    var li = document.createElement('li')
    var textnode = document.createTextNode(inp.value)
    li.appendChild(textnode)
    var div1 = document.getElementById('main')
    div1.appendChild(li)
    li.setAttribute('class','li1')
    inp.value = ""
    //delete function
    var deleteline = document.createElement('button')
    var deleteText = document.createTextNode('Delete')
    deleteline.appendChild(deleteText)
    deleteline.setAttribute('class','delbtn')
    deleteline.setAttribute('onclick', 'Deleteitems(this)')
    li.appendChild(deleteline)

    //Edit
    var editbtn = document.createElement('button')
    var edittext = document.createTextNode('Edit')
    editbtn.appendChild(edittext)
    editbtn.setAttribute('class','editbtn')
    editbtn.setAttribute('onclick', 'edititems(this)')
    li.appendChild(editbtn)

}

function edititems(e) {
    var p = prompt('enter Edit value..', e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = p
}

function Deleteitems(s) {
    s.parentNode.remove()
}

//delete All
function Del() {
    var div1 = document.getElementById('main')
    div1.remove();
}
