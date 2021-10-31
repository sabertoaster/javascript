function getChecked() {
  let radio = document.getElementById('check1').checked;
  if (radio === true) {
    	document.getElementById('demo').innerHTML = document.getElementById('answer1').innerHTML;
    } else {
	  let radio = document.getElementById('check2').checked;
	  if (radio === true) {
	    	document.getElementById('demo').innerHTML = document.getElementById('answer2').innerHTML;
	    	} else {
	      		let radio = document.getElementById('check3').checked;
			 	 if (radio === true) {
			   		 	document.getElementById('demo').innerHTML = document.getElementById('answer3').innerHTML;
			   		} 
	  			    }
  	}
}