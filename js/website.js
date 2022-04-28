var $ = jQuery.noConflict();

$(document).ready((function(e) {

	let comp_titles = ['Onderzoeken (1/5)', 'Creëren (2/5)', 'Communiceren (3/5)', 'Organiseren (4/5)', 'Leren (5/5)'];
	let comp_lvl = ['Niveau 1', 'Niveau 2', 'Niveau 3'];
	let colors = ['black', 'blue', 'green', 'orange', 'red'];
	let lvl_colors = ['pink', 'aqua', 'darkred'];
	var comp_counter = 0
	var lvl_counter = 0

	// default comp
	var uuid = createUUID()
	showOutcome(uuid)
		
	$("#comp_lvl").click(function() {
		lvl_counter++
				
		if(lvl_counter > 2){
			lvl_counter = 0
		}
		
		$(this).text(comp_lvl[lvl_counter]);
		
		if(lvl_counter == 0) {
			$(this).removeClass(lvl_colors[0]);
			$(this).removeClass(lvl_colors[2]);
		}
		
		if(lvl_counter == 1) {
			$(this).removeClass(lvl_colors[0]);
		}
		
		if(lvl_counter == 2) {
			$(this).removeClass(lvl_colors[1]);
		}
		
		$(this).addClass(lvl_colors[lvl_counter]);
		
		$(this).data("lvl", lvl_counter +1)
		
		uuid = createUUID()
		showOutcome(uuid)
	});
	
	
	$("#comp_title").click(function() {
	
		comp_counter++
		
		if(comp_counter > 4){
			comp_counter = 0
		}
		
		if(comp_counter > 0) {
			$(this).removeClass(colors[comp_counter -1]);
		}

		$(this).addClass(colors[comp_counter]);
		$(this).text(comp_titles[comp_counter]);
		$(this).data("comp", comp_counter +1)
		
		uuid = createUUID()
		showOutcome(uuid)
	});
	
	function createUUID(){
		comp = $('#comp_title').data("comp")
		lvl = $('#comp_lvl').data("lvl")
		uuid = '' + comp + lvl
		return uuid 
	}
	
	function showOutcome(uuid){
		$(".outcomes > *").css('display','none');
		$(".outcomes").find(`[data-uuid='${uuid}']`).show()
	}
	  
}));
