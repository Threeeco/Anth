jQuery(function($){
				
				$.supersized({
				
					// Functionality
					slide_interval          :   5000,		// Length between transitions
					transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	900,		// Speed of transition
															   
					// Components							
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					slides 					:  	[			// Slideshow Images
														{image : 'img/1.jpg', title : "<h2><a href='c-work.html'>sharing happiness</a></h2><div class='clear'></div><div class='slide_text'>pepsi co.</div>", thumb : '#', url : ''},

														{image : 'img/bg.jpg', title : "<h2><a href='c-work.html'>500 Fonts</a></h2><div class='clear'></div><div class='slide_text'>UIX</div>", thumb : '#', url : '#'},

														{image : 'img/slide-2.jpg', title : "<h2><a href='c-work.html'>Fullscreen Video</a></h2><div class='clear'></div><div class='slide_text'>Jobberman</div>", thumb : '', url : ''},

														{image : 'img/slide-3.jpg', title : "<h2><a href='c-work.html'>Slider Title & Description</a></h2><div class='clear'></div><div class='slide_text'>Subaru</div>", thumb : '', url : ''}

														
																		
												]
					
				});
		    });
		    