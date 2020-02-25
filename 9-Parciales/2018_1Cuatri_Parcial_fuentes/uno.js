
function mostrar()
{
	var ancho;
	var alto;
	var perimetro;

	ancho=prompt('Ingrese ancho','');
	ancho=parseInt(ancho);

	alto=prompt('Ingrese alto','');
	alto=parseInt(alto);

	perimetro= 2*(alto+ancho);
	if(ancho==alto)
	{
		alert('Error, un rectangulo no puede ser igual de ancho y alto')
	} else 
	{
		alert(perimetro);
	}
}
