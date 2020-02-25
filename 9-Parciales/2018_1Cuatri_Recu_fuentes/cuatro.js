function mostrar()
{
	var num1;
	var num2;
	var suma;


	num1=prompt('Ingrese num1','');
	num1=parseInt(num1);

	num2=prompt('Ingrese num2','');
	num2=parseInt(num2);

	suma=num1+num2;

	if(num1==num2)
	{
		alert('Concatenados:'+num1+''+num2);
	} else
	{
		if(num1 > num2)
		{
			alert('Divididos:'+num1/num2);
		} else
		{
			alert('Suma:'+suma);

			if(suma < 50)
			{
				alert("la suma es "+suma+" y es menor a 50");
			}
		}
	}

}
