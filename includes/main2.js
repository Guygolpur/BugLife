function getInfo() {
	var aKeyValue = window.location.search.substring(1).split('&');
    var info = aKeyValue[0].split("=")[1];
    console.log(info)
	return info;
}

$(document).ready(function() {
		var info = getInfo();
		$( '#title').html(info);
	
})
