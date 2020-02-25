
function mostrar()
{
	var largo;
	var ancho;
	var perimetro;

	largo=prompt('Ingrese largo','');
	largo=parseInt(largo);

	ancho=prompt('Ingrese ancho','');
	ancho=parseInt(ancho);

	perimetro=2*(largo+ancho);

	if(largo==ancho)
	{
		alert('ERROR, LOS VALORES NO PUEDEN SER IGUALES')
	}else
	{
		alert(perimetro);
	}
}
