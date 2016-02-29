//console.log("service worker acionado");
this.onfetch = function(event) { 
	//console.log("service worker acionado");
	var url = decodeURIComponent(event.request.url), 
	// urlToMatch ='http://localhost/swexample/catchme.html',
	urlToMatch ='http://localhost:8000/catchme.html', 
	responseText = 'request caught by service worker';   

	if(url===urlToMatch){ 
		event.respondWith(new Response(responseText)); 
	} 
};
