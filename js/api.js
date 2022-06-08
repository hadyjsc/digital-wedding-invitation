let host = 'https://localhost/ui/wedding/backend';
let uri_list = `${host}/index.php/rsvp/list`;
let uri_insert = `${host}/index.php/rsvp/create`;

function list() {
	$.ajax({
		url: uri_list,
		type: "GET",
		contentType: false,
		processData: false,
		dataType: "json",
        success:function(data, textStatus, jqXHR) {
            $("#wishes-list").html('')
            let html = '';
            for(item of data) {
            	let classStatus = '';
            	if(item.status == 'tidak_hadir') {
            		classStatus = 'bg-danger'
            	} else if(item.status == 'insyaallah') {
            		classStatus = 'bg-success'
            	} else {
            		classStatus = 'bg-primary'
            	}

            	html += '<div class="comment-widgets my-1 align-items-start ">'
			    html += '<div class="d-flex flex-row comment-row">'
		        html += '<div class="p-1">'
		        html += '<span class="round">'
		        html += '<img src="'+item.random_profile+'" alt="user" width="50">'
		        html += '</span>'
		        html += '</div>'
		        html += '<div class="align-items-start align-self-start">'
		        html += '<h5 class="ms-2 text-start text-bold">'+item.name+'</h5>'
		        html += '<div class="text-start ms-2">'
		        html += '<span class="text-start my-2 text-comment-date">'+new Date(item.date).toUTCString()+'</span> '
		        html += '<span class="badge '+classStatus+' text-comment-date">'+item.status.replace('_', ' ').toUpperCase()+'</span> '
		        html += '</div>'
		        html += '<p class="ms-2 text-start text-comment-body">'+item.text+'</p>'
		        html += '</div>'
		        html += '</div>'
		        html += '</div>'
            }
            $("#wishes-list").html(html)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("fail", textStatus, jqXHR);      
        }
	})
}

function insert(body) {
	$.ajax({
        url : uri_insert,
        type: "POST",
        data : JSON.stringify(body),
        contentType: "application/json; charset=utf-8",
        processData: false,
        dataType: "json",
        success:function(data, textStatus, jqXHR) {
        	let classStatus = '';
        	if(body.status == 'tidak_hadir') {
        		classStatus = 'bg-danger'
        	} else if(body.status == 'insyaallah') {
        		classStatus = 'bg-success'
        	} else {
        		classStatus = 'bg-primary'
        	}

        	let html = '';
        	html += '<div class="comment-widgets my-1 align-items-start ">'
		    html += '<div class="d-flex flex-row comment-row">'
	        html += '<div class="p-1">'
	        html += '<span class="round">'
	        html += '<img src="'+body.random_profile+'" alt="user" width="50">'
	        html += '</span>'
	        html += '</div>'
	        html += '<div class="align-items-start align-self-start">'
	        html += '<h5 class="ms-2 text-start text-bold">'+body.name+'</h5>'
	        html += '<div class="text-start ms-2">'
	        html += '<span class="text-start my-2 text-comment-date">'+new Date().toUTCString()+'</span> '
	        html += '<span class="badge '+classStatus+' text-comment-date">'+body.status.replace('_', ' ').toUpperCase()+'</span> '
	        html += '</div>'
	        html += '<p class="ms-2 text-start text-comment-body">'+body.text+'</p>'
	        html += '</div>'
	        html += '</div>'
	        html += '</div>'
		    $('#wishes-list').prepend(html).fadeIn('slow');

            $("#toast-wishes .toast-body").html("Ucapan dan Doa berhasil dikirim. Terima Kasih.")
            $("#toast-wishes").toast("show");
            $("#toast-wishes").removeClass('bg-danger').addClass('bg-success')
        },
        error: function(jqXHR, textStatus, errorThrown) {
        	$("#toast-wishes").removeClass('bg-success').addClass('bg-danger')
            $("#toast-wishes .toast-body").html("Mohon maaf, website tidak dapat mengirim ucapan. Mungkin ada kesalahan di website, mudah-mudahan bisa segera di perbaiki")
            $("#toast-wishes").toast('show');      
        }
    });
}