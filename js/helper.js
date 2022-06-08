function setInvitation(){
	var to = location.search.split('to=')[1]

	$(".text-cover-mengundang").html(decodeURI(to ? to : 'Tamu Undangan'))
}

function gallery() {
    $(".gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
}

function copyText(id) {
  	var text = document.getElementById(id).innerText;
	var r = document.createRange();
	r.selectNode(document.getElementById(id));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();

  	/* Alert the copied text */
  	$("#toast").toast("show");
  	$("#norek").text(text);
}

function playAudio() { 
    audio.play(); 
    $(".float-music").html("<i class='fa fa-music fa-beat-fade icon-float'></i>");
    isPlaying = true;
} 

function pauseAudio() { 
    audio.pause();
    $(".float-music").html("<i class='fa fa-music icon-float'></i>");
    isPlaying = false;
} 

function HandleAudio(){
  	if(isPlaying == true){
    	pauseAudio();
  	} else{
    	playAudio();
	}
}

function setCookie() {
	let session_id = 'wedding_' + randomString(64,'aA#');
	let user_id = randomString(64,'aA#');

	Cookies.set('session_id', session_id, { expires: 1 });	
	Cookies.set('user_id', user_id, { expires: 1 });
}

function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result;
}

function getRandomColor() {
  	var letters = '0123456789ABCDEF';
  	var color = '';
  	for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
  	}
  	return color;
}

function launchFullScreen(element) {
  	if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
         if (document.documentElement.requestFullscreen) {
           document.documentElement.requestFullscreen();
         } else if (document.documentElement.mozRequestFullScreen) {
           document.documentElement.mozRequestFullScreen();
         } else if (document.documentElement.webkitRequestFullscreen) {
           document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
         }
       } else {
          if (document.cancelFullScreen) {
             document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
             document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
       }
}