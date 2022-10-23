satual=1;
smax=3;
stmp=3000;

function troca(){
	document.getElementById("b1").style.visibility="hidden";
	document.getElementById("b2").style.visibility="hidden";
	document.getElementById("b3").style.visibility="hidden";
	document.getElementById("b"+satual).style.visibility="visible";
	satual=satual+1;
	if(satual > smax){
		satual=1;
	}
}

function slider(){
	document.getElementById("b1").style.visibility="hidden";
	document.getElementById("b2").style.visibility="hidden";
	document.getElementById("b3").style.visibility="visible";
	sliderTimer=setInterval(troca,stmp);
