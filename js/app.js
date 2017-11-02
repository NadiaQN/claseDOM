function add() {
//tomando el comentario
	var comments= document.getElementById("comment").value;
//con esto limpio el textarea al momento de añadir comentarios
	document.getElementById("comment").value="";
//creando un div para colocar los comentarios
	var newComments= document.createElement('div');
//rescatamos el valor de nuestro id en html
	var cont= document.getElementById('cont');
//Agregando checkbox
	var check= document.createElement('input');
	check.type = 'checkbox';
//agregando un p para los comentarios
	var paragraph = document.createElement('p');
//agregando class para p
	paragraph.classList.add('color');
//creando nodo de texto para p, que sera comment
	var nodoText = document.createTextNode(comments);
//ingresando el nodo de texto en p
	paragraph.appendChild(nodoText);	
//agregando heart
	var heart= document.createElement('i');
//agregando class a heart
	heart.classList.add('fa', 'fa-heart', 'heart');
//agregando trash
	var trash= document.createElement('i');
//agregando class a trash
	trash.classList.add('fa', 'fa-trash', 'trash');
//agregando los elementos creados al div "newComments"
	newComments.appendChild(check);
	newComments.appendChild(paragraph);
	newComments.appendChild(trash);
	newComments.appendChild(heart);
//agregando newcomments a cont
	cont.appendChild(newComments);
//creando un escuchador para check, tachar el comentario
	check.addEventListener('click', function(){
		//toggle le asigna una nueva class a paragraph
		paragraph.classList.toggle('strike-out')
	})
//creando escuchador para trash, elimine el comentario
	trash.addEventListener('click', function(){
		cont.removeChild(newComments)
	})
//evento para heart
	heart.addEventListener('click', function(){
		heart.classList.toggle('red')
	})
}
