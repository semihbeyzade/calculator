let screen = document.getElementById("screen");
const allclear = () => {
    screen.value = "";
}

const del = () => {
    screen.value = screen.value.slice(0,-1);
}

const display = (num) => {
    screen.value += num;
		
}

const equal = () => {
    	
			try{
				screen.value = eval(screen.value).toFixed(2);
			}
			catch{
				
				alert("Invalid Operation");

			}
			
}


