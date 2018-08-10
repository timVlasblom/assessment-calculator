var x;
var y;
var modifier;
var ans;

function calculate(){
	x = parseFloat(x);
	y = parseFloat(y);
	if (modifier == null){
		console.log(x);
	}
	if(modifier == '+'){
		ans = x + y;
	}
	if(modifier == '*'){
		ans = x * y;
	}
	if(modifier == '-'){
		ans = x - y;
	}
	if(modifier == '/'){
		ans = x / y;
	}
	if(modifier == '%'){
		x = x / 100;
		ans = x * y;
	}
	document.getElementById("answer").innerHTML = ans;
	console.log(ans);
	x = null;
	y = null;
	modifier = null;
}

function addNumber(number){
	if (modifier == null){
		if (x == null) {
			x = number;
			console.log(x);
		}
		else{
			x = x + number;
			console.log(x);
		}
		document.getElementById("sum").innerHTML = x;
	}
	else{
		if (y == null) {
			y = number;
			console.log(y);
		}
		else{
			y = y + number;
			console.log(y);
		}
		document.getElementById("sum").innerHTML = x + " " + modifier + " " + y;
	}
}

function addModifier(m) {
	if (x == null && ans != null) {
		x = ans;
		modifier = m;
		document.getElementById("sum").innerHTML = x + " " + modifier;
	}else if(x != null){
		modifier = m;
		document.getElementById("sum").innerHTML = x + " " + modifier;
	}
}

function clearAction(action) {
	if (action == 'all'){
		x = null;
		y = null;
		modifier = null;
		console.log("clear",x,y,modifier);
	}
	if (action == 'last'){
		if (y != null){
			y = null;
		}else if(modifier != null){
			modifier = null;
		}else{
			x = null;
		}
		console.log("clear",x,y,modifier);
	}
	if (action = 'backspace'){
		if (y != null){
			if (y.length <= 1){
				y = null
			}else{
				y = y.toString().slice(0, -1);
				y = parseInt(y);
			}
		}else if(modifier != null){
			modifier = null;
		}else{
			if (x.length <= 1){
				x = null
			}else{
				x = x.toString().slice(0, -1);
				x = parseInt(x);
			}
		}
	}
}