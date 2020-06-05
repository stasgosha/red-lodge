document.addEventListener('DOMContentLoaded', function(){

	// Sliders
	function equalSlideHeight(slider){
		$(slider).on('setPosition', function () {
			$(this).find('.slick-slide').height('auto');
			var slickTrack = $(this).find('.slick-track');
			var slickTrackHeight = $(slickTrack).height();
			$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
		});
	}

	let arrowsButtons = {
		prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Предыдущие"><svg viewBox="0 0 511 312" xmlns="http://www.w3.org/2000/svg"><path d="M355 130H88l86-86c10-10 10-27 0-36a25 25 0 00-36 0L8 138c-5 5-8 12-8 18 0 7 3 13 8 18l130 130c5 5 12 8 18 8s13-3 18-8c10-10 10-27 0-36l-86-86h267c15 0 26-11 26-26s-11-26-26-26zm130 52a26 26 0 100-52 26 26 0 000 52z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Следующие"><svg viewBox="0 0 511 312" xmlns="http://www.w3.org/2000/svg"><path d="M156 182h267l-86 86a25 25 0 000 36c10 11 27 11 36 0l130-130c5-5 8-12 8-18 0-7-3-13-8-18L373 8c-5-5-12-8-18-8s-13 3-18 8a25 25 0 000 36l86 86H156c-15 0-26 11-26 26s11 26 26 26zM26 130a26 26 0 100 52 26 26 0 000-52z"/></svg></button>'
	}


	$('.first-screen-slider-wrapper').each(function(i, el){
		$(el).find('.first-screen-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			...arrowsButtons,
			dots: true,
			appendArrows: $(el).find('.nav-arrows'),
			appendDots: $(el).find('.nav-dots'),
			infinite: true,
			speed: 600,
		});
	});


	$('.courses-slider-wrapper').each(function(i, el){
		$(el).find('.courses-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			...arrowsButtons,
			dots: true,
			appendArrows: $(el).find('.nav-arrows'),
			appendDots: $(el).find('.nav-dots'),
			infinite: true,
			speed: 600,
		});
	});


	$('.master-sliders-scope').each(function(i, el){
		$(el).find('.master-works-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			...arrowsButtons,
			dots: true,
			appendArrows: $(el).find('.master-works-slider-nav .nav-arrows'),
			appendDots: $(el).find('.master-works-slider-nav .nav-dots'),
			infinite: true,
			speed: 600,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 576,
					settings: {
						centerMode: true,
						slidesToShow: 1
					}
				}
			]
		});

		$(el).find('.master-diplomas-slider').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true,
			...arrowsButtons,
			dots: true,
			appendArrows: $(el).find('.master-diplomas-slider-nav .nav-arrows'),
			appendDots: $(el).find('.master-diplomas-slider-nav .nav-dots'),
			infinite: true,
			speed: 600,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 576,
					settings: {
						centerMode: true,
						slidesToShow: 1
					}
				}
			]
		});
	});

	$('.team-slider-wrapper').each(function(i, el){
		if ($(window).width() < 768) {
			$(el).find('.mobile-team-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				...arrowsButtons,
				dots: true,
				appendArrows: $(el).find('.nav-arrows'),
				appendDots: $(el).find('.nav-dots'),
				infinite: true,
				speed: 600
			});
		} else{
			$(el).find('.team-slider').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: true,
				...arrowsButtons,
				dots: true,
				appendArrows: $(el).find('.nav-arrows'),
				appendDots: $(el).find('.nav-dots'),
				infinite: true,
				speed: 600,
				responsive: [
					{
						breakpoint: 1300,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2
						}
					}
				]
			});
		}
	});

	$('.brands-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		...arrowsButtons,
		dots: false,
		// appendArrows: $(el).find('.nav-arrows'),
		// appendDots: $(el).find('.nav-dots'),
		infinite: true,
		speed: 600,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	equalSlideHeight('.brands-slider');

	if ($(window).width() < 1200) {
		$('.services-slider-scope').each(function(i, el){
			$(el).find('.services-slider').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: true,
				...arrowsButtons,
				dots: true,
				appendArrows: $(el).find('.nav-arrows'),
				appendDots: $(el).find('.nav-dots'),
				infinite: true,
				speed: 600,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 2
						}
					}
				]
			});
		});
	}

	$('.photos-slider-scope').each(function(i, el){
		$(el).find('.photos-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true,
			...arrowsButtons,
			dots: true,
			appendArrows: $(el).find('.nav-arrows'),
			appendDots: $(el).find('.nav-dots'),
			infinite: true,
			speed: 600
		});
	});

	$('.testimonials-scope').each(function(i, el){
		$(el).find('.testimonials-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			vertical: true,
			arrows: false,
			dots: false,
			infinite: true,
			speed: 600,
			asNavFor: $(el).find('.testimonials-nav-slider'),
			responsive: [
				{
					breakpoint: 1300,
					settings: {
						vertical: false
					}
				}
			]
		});

		$(el).find('.testimonials-nav-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			vertical: true,
			arrows: true,
			...arrowsButtons,
			dots: false,
			infinite: true,
			speed: 600,
			asNavFor: $(el).find('.testimonials-slider'),
			centerMode: true,
			focusOnSelect: true,
			centerPadding: '0',
			responsive: [
				{
					breakpoint: 1300,
					settings: {
						vertical: false,
						slidesToShow: 1,
						centerPadding: '30%'
					}
				},
				{
					breakpoint: 992,
					settings: {
						vertical: false,
						slidesToShow: 1,
						centerMode: false
					}
				}
			]
		});
	});


	$('.offers-slider-scope').each(function(i, el){
		$(el).find('.offers-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			...arrowsButtons,
			dots: true,
			appendArrows: $(el).find('.nav-arrows'),
			appendDots: $(el).find('.nav-dots'),
			infinite: true,
			speed: 600,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	});


	$('.works-slider-scope').each(function(i, el){
		if ($(window).width() < 768) {
			$(el).find('.mobile-works-slider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				...arrowsButtons,
				dots: true,
				infinite: true,
				speed: 600,
				appendArrows: $(el).find('.nav-arrows'),
				appendDots: $(el).find('.nav-dots'),
			});
		} else{
			$(el).find('.works-slider:not(.first)').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				swipe: false,
				infinite: true,
				speed: 600,
			});

			$(el).find('.works-slider.first').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				swipe: false,
				...arrowsButtons,
				dots: true,
				appendArrows: $(el).find('.nav-arrows'),
				appendDots: $(el).find('.nav-dots'),
				infinite: true,
				speed: 600,
				asNavFor: $(el).find('.works-slider:not(.first)')
			});
		}
	});

	$('.select').on('change', function(e){
		$(this).find('[selected][disabled]').remove();
		$(this).addClass('changed');
		$(this).off('change');
	});

	$('.checkbox a').click(function(e){
		e.stopPropagation();
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$('.to-top-btn').addClass('visible');
		} else{
			$('.to-top-btn').removeClass('visible');
		}
	});

	// 
	$('.our-services-list').each(function(i, el){
		let count = $(el).find('.item').length;

		$(el).addClass('count-'+count);
	})


	// Team card
	$('.team-card').hover(function(){
		$(this).find('.card-hidden-content').stop().slideDown(300);
	},function(){
		$(this).find('.card-hidden-content').stop().slideUp(300);
	});


	// function isElementInViewport (el) {

	// 	// Special bonus for those using jQuery
	// 	if (typeof jQuery === "function" && el instanceof jQuery) {
	// 		el = el[0];
	// 	}

	// 	var rect = el.getBoundingClientRect();

	// 	return (
	// 		rect.top >= 0 &&
	// 		rect.left >= 0 &&
	// 		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
	// 		rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
	// 	);
	// }

	// Action Cards
	$('.action-cards-block .block-item').hover(function(){
		$(this).next().addClass('next');
	},function(){
		$('.action-cards-block .block-item').removeClass('next');
	});


	// Scroll to anchor
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 80
		}, 500);
	});

	// Menu opener
	$('.menu-opener').click(function(e){
		e.preventDefault();

		$(this).toggleClass('active');
		$('.mobile-top-nav').toggleClass('opened');
	});

	// Mobile nav
	// $('.mobile-top-nav a').click(function(){
	// 	$('.menu-opener').click();
	// });

	// $('.mobile-nav .current-menu-parent').addClass('opened').find('.sub-menu').stop().slideToggle(300);

	// $('.mobile-nav .menu-item-has-children > a').click(function(e){
	// 	e.preventDefault();
	// });

	// $('.mobile-nav .menu-item-has-children li a').click(function(e){
	// 	e.stopPropagation();
	// });

	// $('.mobile-nav .menu-item-has-children').click(function(){
	// 	$(this).toggleClass('opened').find('.sub-menu').stop().slideToggle(300);
	// });

	// Sticky Header
	window.addEventListener('scroll', function(){
		let header = document.querySelector('.header');

		if (!!header) {
			window.scrollY > 0
				? header.classList.add('sticky')
				: header.classList.remove('sticky');
		};
	});

	// Modals
	$('.modal').css('display','block');

	function getScrollWidth(){
		// create element with scroll
		let div = document.createElement('div');

		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';

		document.body.append(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;

		div.remove();

		return scrollWidth;
	}

	$('.modal-dialog').click(e => e.stopPropagation());
	$('.modal').click(function(e){
		hideModal( $(this) );
		$('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
	});

	$('.modal-close').click(function(e){
		e.preventDefault();

		hideModal( $(this).closest('.modal') );
		$('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
	});

	$('[data-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		hideModal('.modal');

		showModal( $(this).data('modal') );
	});

	$('[data-video-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		let videoId = $(this).data('video-modal');
		let videoType = $(this).data('video-type');

		if (videoType == 'youtube') {
			$('#modal-video-iframe').append('<div class="video-iframe" id="'+videoId+'"></div>');
			createVideo(videoId, videoId);
		} else if(videoType == 'vimeo'){
			$('#modal-video-iframe').html('<iframe class="video-iframe" src="https://player.vimeo.com/video/'+videoId+'?playsinline=0&autoplay=1&transparent=0&app_id=122963">');
		}

		hideModal('.modal');

		showModal( "#video-modal" );
	});

	window.showModal = showModal;


	// Video
	$('.video-block:not([data-video-modal])').on('click', function () {
		$(this).addClass('playing');

		var $videoId = $(this).data('video-id');
		$(this).append('<div class="video-iframe" id="'+$videoId+'"></div>');
		createVideo($videoId, $videoId);
	});

	var player;
	function createVideo(videoBlockId, videoId) {
		player = new YT.Player(videoBlockId, {
			videoId: videoId,
			playerVars: {
				'autohide': 1,
				'showinfo' : 0,
				'rel': 0,
				'loop': 1
			},
			events: {
				'onReady': function (e) {
					// e.target.mute();
					e.target.playVideo();
				}
			}
		});
	}

	$('.modal-btn').click(function(e){
		e.preventDefault();

		hideModal( $(this).closest('.modal') );

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
	});

	let bodyScrolled = 0;
	function showModal(modal, ){
		$(modal).addClass('visible');
		bodyScrolled = $(window).scrollTop();
		$('body').addClass('modal-visible')
				 .scrollTop(bodyScrolled)
				 .css('padding-right', getScrollWidth());

		$('[data-src]').each( (i, el) => {
			$(el).attr('src', $(el).data('src'));
			el.removeAttribute('data-scr');
		} );
	}

	function hideModal(modal){
		$(modal).removeClass('visible');
		bodyScrolled = $(window).scrollTop();
		$('body').removeClass('modal-visible')
				 .scrollTop(bodyScrolled)
				 .css('padding-right', 0);

		$('#modal-video .video-iframe').hide();
	}

	function goToTab(tabId, handler){
		if (handler == undefined) {
			handler = false;
		}

		let dest = $( tabId );
		dest.stop().fadeIn(300).siblings().hide(0);

		if (handler != false) {
			if ( $(handler).parent().hasClass('item') ) {
				$(handler).addClass('current').parent().siblings().find("[data-tab]").removeClass('current');
			} else{
				$(handler).addClass('current').siblings().removeClass('current');
			}
		}
	}

	// Tabs
	$("[data-tab]").click(function(e){
		e.preventDefault();
		let dest = $( $(this).data('tab') );

		goToTab(dest, $(this));

		dest.find('.slick-slider').slick('setPosition');
	});

	$('body').on('change', '.tabs-select', function(e){
		let dest = $(this).find('option:selected').attr('value');

		console.log(dest);
		goToTab(dest);
	})

	$("[data-tab]:first-child").trigger('click');
	$("[data-tab].preselected").trigger('click');

	$('.services-nav [data-tab]').eq(0).trigger('click');
	$('.mobile-services-nav [data-tab]').eq(0).trigger('click');


	// Fancybox
	$(".fancybox").fancybox();

	function isElementInViewport (el) {

		// Special bonus for those using jQuery
		if (typeof jQuery === "function" && el instanceof jQuery) {
			el = el[0];
		}

		var rect = el.getBoundingClientRect();

		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
		);
	}

	// Accordions
	$('.accordion .ac-header, .accordion .opener').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		$(this).closest('.accordion').toggleClass('opened')
				.find('.ac-content').stop().slideToggle(300);
	});

	$('.accordion.opened').find('.ac-content').stop().slideToggle(300);


	// Odometer
	window.odometerOptions = {
		auto: false,
		selector: '.odometer',
		format: '( ddd),dd',
		duration: 1500,
		theme: 'minimal',
		animation: 'count'
	};

	$(window).scroll(function(){
		var elem = $('.odometer');

		elem.each(function(i, el){
			if (isElementInViewport(el)) {
				$(el).html($(el).data('val'));
			}
		});
	});
});

// Object Fit Polyfill
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="bfred-it:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

objectFitImages('.object-fit-cover');
objectFitImages('.object-fit-contain');

// SVG use polyfill
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});


svg4everybody();


// TODO: ↓↓↓ remove this script ↓↓↓
// Current menu item highlithing
$(function () {
	var location = window.location.href;
	var cur_url = location.split('/').pop();

	$('.top-nav li, .mobile-nav li, .footer-nav li').each(function () {
		var link = $(this).find('a').attr('href');

		// console.log(link);

		if (cur_url == '') {
			cur_url = 'index.html';
		}

		if (cur_url == link)
		{
			$(this).addClass('current-menu-item');
			$(this).parents('li').addClass('current-menu-parent');
		}
	});
});