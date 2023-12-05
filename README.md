El usuario podrá:
• Crear una nueva baraja escogiendo el tipo entre: baraja francesa, baraja española.
o Cuando esto pase se debe vaciar el textarea donde se muestren las cartas.
• Añadir una nueva carta a la baraja, que el usuario le diga a través de dos inputs HTML.
o Antes de añadir una carta debe asegurarse que la carta que el usuario indica pertenece al tipo de baraja (usando el método “check”).
• Mezclar la baraja.
• Quitar una carta en concreto de la baraja, que el usuario le diga a través de dos inputs HTML (uno para el valor de la carta y otro para el palo).
o Antes de quitar una carta debe asegurarse que la carta que el usuario indica pertenece al tipo de baraja (usando el método “check”).
• Si la baraja es una baraja española, el usuario podrá quitar una carta de forma aleatoria siempre que no envíe ningún parámetro en el método “remove”.
o Si el usuario envía un parámetro en el método “remove”, se debe llamar al método con el mismo nombre de la superclase.
• Ver todo el tiempo las cartas de la baraja en un textarea. Siempre que haya una modificación en la baraja, el textarea se debe actualizar también.
