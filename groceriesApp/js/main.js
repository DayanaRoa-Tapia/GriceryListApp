
var data = {
	needed: [],
	purchased: []
};



document.getElementById('add').addEventListener('click',function(){

	var item = document.getElementById('item').value;
	if(item){
		addItem(item);
		document.getElementById('item').value = '';

		data.needed.push(item);
		// console.log(data);
	} 
});


document.getElementById('item').addEventListener('keyup',function(event){

	var item = document.getElementById('item').value;
	event.preventDefault();
	if(item && event.keyCode == 13){
		document.getElementById('add').click();
		// data.needed.push(item);
	}
});



function removeItem(){
	var item = this.parentNode;
	var parent = item.parentNode;

	var iVal = item.innerText;

	data.needed.splice(data.needed.indexOf(iVal),1);
	data.purchased.push(iVal);

	console.log(data);

	parent.removeChild(item);


}




function addItem(val){

	var list = document.getElementById('need')

	var needed = document.createElement('li');
	needed.innerText = val;

	var button = document.createElement('button');
	button.classList.add('check');


	//to remove item after checking it
	button.addEventListener('click',removeItem);

	needed.appendChild(button);
	list.insertBefore(needed, list.childNodes[0]);
}


