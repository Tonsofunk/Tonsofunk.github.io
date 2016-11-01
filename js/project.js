
$(document).ready(function(){/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(".jumbler").typed({
	strings: ["", "", "Skiing.", "Golfing.", "Hot Chocolate.", "Jacuzzis.", "Fine-Dining.", "Snow Tubing.", "Snow Boarding.", "Snow Ball Fights!", "Luxury.", "The Green Mountain Resort at Killington, Vermont."],
	typeSpeed: 20
	});

    var counter = 0, // to keep track of current slide
    $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

	// this function is what cycles the slides, showing the next or previous slide and hiding all the others
	var showCurrent = function(){
	    var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
	   
	  $items.removeClass('show'); // remove .show from whichever element currently has it
	  $items.eq(itemToShow).addClass('show');    
};

$('.next').on('click', function(){
	    counter++;
	    showCurrent(); 
	});
	$('.prev').on('click', function(){
	    counter--;
	    showCurrent(); 
	});

    $(".background-pic2").hover(function(){
    	$(".fade-out").fadeOut(10000);
    	$(".background-pic2 h2").fadeIn(20000);
	});

  	$('.parent-container').magnificPopup({
  	delegate: 'a', // child items selector, by clicking on it popup will open
  	type: 'image'
  // other options
});

$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
});

var groups = {};
	$('.galleryItem').each(function() {
	  var id = parseInt($(this).attr('data-group'), 10);
	  
	  if(!groups[id]) {
	    groups[id] = [];
	  } 
	  
	  groups[id].push( this );
	});


	$.each(groups, function() {
	  
	  $(this).magnificPopup({
	      type: 'image',
	      closeOnContentClick: true,
	      closeBtnInside: false,
	      gallery: { enabled:true }
	  })

});

$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
});

if ($('.gallery.masonry-gallery').length) {
	 $('.gallery.masonry-gallery').masonry({
	 	  itemSelector: '.thumbnail',
	 	  percentPosition: true,
	 	  columnWidth: '.thumbnail'
	 });
}
//if thing in the parenthesis is true then run. something.length
});