// JavaScript Document
var database = firebase.database(); //creating the link to your database
var orderRef = database.ref('order'); //creates a reference point to firebase, order node
alert("Attached")

function loopForm(form) {
	alert("test")
	var sandwichOrder = []; //defines an empty list
	for (var i = 0; i < form.elements.length; i++) { //for loop through the form
		alert("test2");
		if (form.elements[i].type == "radio") {
			if (form.elements[i].checked) {
				sandwichOrder.push(form.elements[i].value);
				alert(sandwichOrder); //test alert
			}
		}
		if (form.element[i].type == 'checkbox') {
			if (form.elements[i].checked) {
				sandwichOrder.push(form.elements[i].value + ' ');
				alert(sandwichOrder);
			}
		}
	}
	//once the for loop has gone through each element in th eform
	//it will output the list using the DOM
	var customer_name = customer_name.value;
	var phone_number = customers_cellphone.value;
	alert(customer_name + phone_number);
	document.getElementById("radioResults").innerHTML = sandwichOrder;
	var data = { //JSON file
		sandwich: sandwichOrder,
		name: customer_name,
		cell_phone: phone_number
	}
	orderRef.push(data); //pushing the data to firebase
	alert("data has been pushed");
}
