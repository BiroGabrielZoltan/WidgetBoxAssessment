async function getNews(){
	let url = 'http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8' ;
	try {
		let response = await fetch(url);
		return await response.json();
	}
	catch (error)
	{
		console.log(error);
	}
}


var newsArray;
var interval = 0;

async function LoadingNews(){
	let news = await getNews();	
	newsArray = news.news;		
}

LoadingNews();

function Lighter(section){
	let highlightElement;
	let notSelectedBtn;
	switch(section){
		case 0 : 
				highlightElement = document.getElementById('firstBtn');
				highlightElement.style.background = 'black';
				notSelectedBtn = document.getElementById('secondtBtn');
				notSelectedBtn.style.background = '#ddd';
				notSelectedBtn = document.getElementById('thirdBtn');
				notSelectedBtn.style.background = '#ddd';
			break;
		case 1 :
				highlightElement = document.getElementById('secondtBtn');
				highlightElement.style.background = 'black';
				notSelectedBtn = document.getElementById('firstBtn');
				notSelectedBtn.style.background = '#ddd';
				notSelectedBtn = document.getElementById('thirdBtn');
				notSelectedBtn.style.background = '#ddd';
			break;
		case 2 : 
				highlightElement = document.getElementById('thirdBtn');
				highlightElement.style.background = 'black';
				notSelectedBtn = document.getElementById('firstBtn');
				notSelectedBtn.style.background = '#ddd';
				notSelectedBtn = document.getElementById('secondtBtn');
				notSelectedBtn.style.background = '#ddd';
			break;
	}
	
}

function NextPage(section){
	interval = section
	let html = '';
	for(let i = section*5; i<((section+1)*5); i++){
		console.log(newsArray[i]);
		let htmlSegment  = `<div class = "lineNews">
	 	 						<h2>${newsArray[i].title}</h2>
								<p>${newsArray[i].details}</p>
 						    </div>`;
	    html += htmlSegment ;
	}
	let container = document.querySelector('.newsTab');
	container.innerHTML = html;	
	Lighter(section);
}

 

setInterval(function (){
	if(interval === 3){
		interval = 0;
	}
	NextPage(interval);
	interval += 1;
	
}, 15000);

setTimeout(function (){
	location.reload();
}, 180000);
