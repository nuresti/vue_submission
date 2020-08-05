let menu = document.querySelector(".menu");
		menu.addEventListener("mouseover", function(ev) {   
		  ev.target.style.color = "orange";

		  setTimeout(function() {
		    ev.target.style.color = "";
		  }, 1000);
		}, false);