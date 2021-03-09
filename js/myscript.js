$(".topbt").on("click",function(){
    $("body,html").animate({scrollTop:"0px"},750);
})



$(".homebt").on("click",function(){
    $("body,html").animate({scrollTop:"0px"},750);
})

$(".aboutbt").on("click",function(){
    $("body,html").animate({scrollTop:"1120px"},750);
})

$(".skillbt").on("click",function(){
    $("body,html").animate({scrollTop:"1850px"},750);
})

$(".prbt").on("click",function(){
    $("body,html").animate({scrollTop:"2750px"},750);
})

$(".aebt").on("click",function(){
    $("body,html").animate({scrollTop:"3750px"},750);
})

$(".webbt").on("click",function(){
    $("body,html").animate({scrollTop:"4240px"},750);
})




console.clear();

let sites = [
	{
		'title': 'Toy Story',
		'slogan': 'Hobby videos',
		'url': 'https://naver.com',
		'image': './img/toy_.jpg',
	}, {
		'title': 'Lake Park',
		'slogan': 'Promotional video',
		'url': 'https://google.com',
		'image': 'https://images.unsplash.com/photo-1565728772631-a3d6acd57849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
	}, {
		'title': 'Vlog',
		'slogan': 'Flower Market Vlog',
		'url': 'https://google.com',
		'image': 'https://images.unsplash.com/photo-1565623513508-ffe2588e327c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
	}, {
		'title': 'The Art of Food',
		'slogan': 'Lorem ipsum dolor',
		'url': 'https://google.com',
		'image': 'https://images.unsplash.com/photo-1565676137134-10420000e371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
	},
];


const menu = document.querySelectorAll('.menu')[0];
const imageContainer = document.querySelectorAll('.image-container')[0];


sites.forEach(site => {
	let dataId = site.title.toLowerCase().replace(/\s/g, '-').replace(/'/g, '').replace(/"/g, '').replace(/</g, '').replace(/>/g, '');
	
	const listEl = $(`<li data-id="${dataId}">
											<a href="${site.url}">${site.title}</a>
											<span class="slogan">${site.slogan}</span>
										</li>`);
	
	const imgEl = $(`<div class="image" data-id="${dataId}">
									 		<img src="${site.image}" alt="${site.title} image">
								 	 </div>`);
	
	$(menu).append(listEl);
	$(imageContainer).append(imgEl);
	
	$(listEl).on('mouseover', function() {
		$('.image-container .image').removeClass('visible');
		$(this).addClass('hovered');
		$(imgEl).addClass('visible');
		
	}).on('mousemove', function(e) {
		let imgWidth = $(imgEl).outerWidth();
		let imgHeight = $(imgEl).outerHeight();
		TweenMax.to(imageContainer, .5, {
			left: e.clientX - (imgWidth / 2),
			top: e.clientY - (imgHeight / 2)
		});
		
	}).on('mouseleave', function() {
		$(this).removeClass('hovered');
	});
});


$(menu).on('mouseover', function() {
	$(imageContainer).addClass('visible');
}).on('mouseleave', function() {
	$(imageContainer).removeClass('visible');
});


$('.menu li:nth-child(3)').addClass('active');
$('a').on('click', function(e) {e.preventDefault()});