function desplegarContraerDevelop(cual,desde) { 
	var elElemento=document.getElementById(cual);
	if(elElemento.className == 'elementoVisibleDevelop') {
		elElemento.className = 'elementoOculto';
		desde.className = 'linkContraido'; 
	} else {
		elElemento.className = 'elementoVisibleDevelop';
		desde.className = 'linkExpandido';
	}
}

function desplegarContraerImagen(cual,desde) { 
	var elElemento=document.getElementById(cual);
	if(elElemento.className == 'elementoVisibleImagen') {
		elElemento.className = 'elementoOculto';
		desde.className = 'linkContraido'; 
	} else {
		elElemento.className = 'elementoVisibleImagen';
		desde.className = 'linkExpandido';
	}
}

function desplegarContraerInterno(cual,desde) { 
	var elElemento=document.getElementById(cual);
	if(elElemento.className == 'elementoVisibleInterno') {
		elElemento.className = 'elementoOculto';
		desde.className = 'linkContraido';
	} else {
		elElemento.className = 'elementoVisibleInterno';
		desde.className = 'linkExpandido';
	}
}

function desplegarContraer(cual,desde) { 
	var elElemento=document.getElementById(cual);
	if(elElemento.className == 'elementoVisible') {
		elElemento.className = 'elementoOculto';
		desde.className = 'linkContraido';
	} else {
		elElemento.className = 'elementoVisible';
		desde.className = 'linkExpandido';
	}
}