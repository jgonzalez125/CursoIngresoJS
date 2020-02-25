	var eleccionMaquina;
	var ContadorDeEmpates=0;
	var ContadorDeGanadas=0;
	var ContadorDePerdidas=0;
	var ContadorDePartidas=0;
	var eleccionUsuario;
	var piedra;
	var papel;
	var tijera;
	var piedra1;
	var papel1;
	var tijera1;
	
	function comenzar()
	{
		//Genero el número RANDOM entre 1 y 3
		alert('Comenzamos!');
		eleccionMaquina= Math.floor(Math.random()*3 +1);
		console.log(eleccionMaquina);

		if(eleccionMaquina==1)
		{
			eleccionMaquina=piedra;
		} else
		{
			if(eleccionMaquina == 2)
			{
				eleccionMaquina=papel;
			} else
			{
				eleccionMaquina=tijera;
			}
		} 	
	}//FIN DE LA FUNCIÓN
	function piedra()
	{
		piedra1=document.getElementById('piedra').value;
		if(eleccionUsuario==piedra1 && eleccionMaquina==piedra)
		{
			alert('es un empate');
			ContadorDeEmpates++;
		}else
		{
			if(eleccionUsuario==piedra1 && eleccionMaquina==papel)
			{
				alert('perdiste');
				ContadorDePerdidas++;
			}else
			{
				alert('GANASTE!');
				ContadorDeGanadas++;
			}
		}
		document.getElementById('ganadas').value=ContadorDeGanadas;
		document.getElementById('perdidas').value=ContadorDePerdidas;
		document.getElementById('empatadas').value=ContadorDeEmpates;
	}//FIN DE LA FUNCIÓN
	function papel()
	{
		papel1=document.getElementById('papel').value;

		if(eleccionUsuario==papel1 && eleccionMaquina==papel)
		{
			alert('es un empate');
			ContadorDeEmpates++;
		}else
		{
			if(eleccionUsuario==papel1 && eleccionMaquina==tijera)
			{
				alert('perdiste');
				ContadorDePerdidas++;
			}else
			{
				alert('GANASTE!');
				ContadorDeGanadas++;
			}
		}
		document.getElementById('ganadas').value=ContadorDeGanadas;
		document.getElementById('perdidas').value=ContadorDePerdidas;
		document.getElementById('empatadas').value=ContadorDeEmpates;
	}//FIN DE LA FUNCIÓN
	function tijera()
	{
		tijera1=document.getElementById('tijera').value;
		if(eleccionUsuario==tijera1 && eleccionMaquina==papel)
		{
			alert('GANASTE!');
			ContadorDeGanadas++;
		}else
		{
			if(eleccionUsuario==tijera1 && eleccionMaquina==piedra)
			{
				alert('perdiste');
				ContadorDePerdidas++;
			}else
			{
				alert('es un empate');
				ContadorDeEmpates++;
			}
		}	
		document.getElementById('ganadas').value=ContadorDeGanadas;
		document.getElementById('perdidas').value=ContadorDePerdidas;
		document.getElementById('empatadas').value=ContadorDeEmpates;
	}//FIN DE LA FUNCIÓN

	function mostrarResultado()
	{
		
	}