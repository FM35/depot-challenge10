	var Question= ""; 
	var R1 = "";
	var R2 = "";
	var R3 = "";
	var R4 = ""; 




	$(document).ready(function () {
	
	$("#suivante").click(function(){ // au clic sur le bouton > afficher la question suivante avec les 4 réponses
			 Question="Quelle est la capitale des Etats Unis?";
			 R1 = "Moscou";
			 R2 = "Washington";
			 R3 = "Pékin";
			 R4 = "Paris";
			 $("#Question").text((Question)); 
			 $("#R1").text((R1));
			 $("#R2").text((R2));
			 $("#R3").text((R3));
			 $("#R4").text((R4));
	 });

	 });


