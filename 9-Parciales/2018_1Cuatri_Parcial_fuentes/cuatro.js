function mostrar()
{	
	var num1;
	var num2;
	var suma;

	num1=prompt('Ingrese primer numero','');
	num1=parseInt(num1);
	
	num2=prompt('Ingrese segundo numero','');
	num2=parseInt(num2);

	suma= num1+num2;

	if(num1==num2)
	{
		alert(num1+ '' +num2);
	}else
	{
		if(num1 > num2)
		{
			alert(num1-num2);
		} else
		{
			alert(suma);

			if(suma>10)
			{
				alert('El resultado es '+suma+' y supero el 10');
			}
		}
		
	}
}
