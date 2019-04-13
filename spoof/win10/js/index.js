$(document).ready(function(){
	
	// Desktop
	$('.icon.win').on('click', function() {
		var target = $(this).attr('data-target');
		$(target).toggleClass('open');
		$('.all-icons').removeClass('open');
	});
	
	$('.icon.top.bars').on('click', function() {
		$('.startmenu .col.icons').toggleClass('open');
	});	
	
	$('.desktop, .app, .program, .icon.application, .cortana').on('click', function() {
		$('.startmenu, .icons, .icon.win, .all-icons').removeClass('open');
	});	
	
	$('.tray .peek').on('mouseenter', function() {
		$('body').addClass('peek');
	});	
	
	$('.tray .peek').on('mouseleave', function() {
		$('body').removeClass('peek');
	});
	
	$('.tray .more-icons').on('click', function(){
		$('.all-icons').toggleClass('open');
	});
	
	$('.taskbar .icon.application').on('click', function() {
		var target = $(this).attr('data-target');
		$(target).toggleClass('open minimized');
		$(this).toggleClass('open');
	});
	
	
	// App Preview
	$('.icon.edge').on('mouseenter', function() {		
		var $browserWindow = $('.id-edge iframe').clone();
		var $previewWindow = $('.app-preview.preview-edge .content');
		$previewWindow.html('');
		$previewWindow.html($browserWindow);
	});
		
	
	// Apps
	$( ".app" ).draggable({ handle: ".draggable" });
	$( ".app" ).resizable();
	
	
	// Edge Addressbar
	var $addressbar = $('.edge-url');
	$addressbar.keypress(function (e) {
		if (e.which == 13) {
			var address = $addressbar.val();
			$('.edge-browser').attr('src', 'http://' + address);
		}
	});	
	
	$('.id-edge .fa-refresh').on('click', function(){
		var address = $addressbar.val();
		$('.edge-browser').attr('src', 'http://' + address);
	});
	
});


// Setup Clock / Date
var d = new Date(),
		day = d.getDate(),
		month = d.getMonth() + 1,
		year = d.getFullYear();

function format_time() {
  // formats a javascript Date object into a 12h AM/PM time string
	var dt = new Date();
  var hour = dt.getHours();
  var minute = dt.getMinutes();
	var seconds = dt.getSeconds();
  var amPM = (hour > 11) ? " PM" : " AM";
  if(hour > 12) {
    hour -= 12;
  } else if(hour == 0) {
    hour = "12";
  }
  if(minute < 10) {
    minute = "0" + minute;
  }
	$('.clock').text(hour + ":" + minute + amPM);
}

function clock() {
	setInterval(format_time, 1000);
}

clock();
$('.date').text(month + '/' + day + '/' + year);