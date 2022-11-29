// Hide show Search Box
const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
searchBtn.onclick = function (e) {
    searchBox.classList.toggle('hidden');
}
// Silder
$('#news-silder').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoWidth:true,
    responsiveClass:true,
    responsive:{
        600:{
            items:1,
        },
        1000:{
            items:2,
        }
    }
});

// Validate Contact Form
const contactForm = document.querySelector('#form-contact');
if(contactForm){
    const btnSubmit = contactForm.querySelector('.submit');
    btnSubmit.onclick = function(e) {
        e.preventDefault();
        const contactName = contactForm.querySelector('#contact_name');
        const contactEmail = contactForm.querySelector('#contact_email');
        const contactTitle = contactForm.querySelector('#contact_title');
        const contactContent = contactForm.querySelector('#contact_content');

        if(!contactName.value){
            if(contactName.nextElementSibling.classList.contains('error-msg')){
                contactName.nextElementSibling.classList.remove('hidden')
            }
        }else{
            if(contactName.nextElementSibling.classList.contains('error-msg')){
                contactName.nextElementSibling.classList.add('hidden')
            }
        }

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.value)){
            if(contactEmail.nextElementSibling.classList.contains('error-msg')){
                contactEmail.nextElementSibling.classList.remove('hidden')
            }
        }else{
            if(contactEmail.nextElementSibling.classList.contains('error-msg')){
                contactEmail.nextElementSibling.classList.add('hidden')
            }
        }

        if(!contactTitle.value){
            if(contactTitle.nextElementSibling.classList.contains('error-msg')){
                contactTitle.nextElementSibling.classList.remove('hidden')
            }
        }else{
            if(contactTitle.nextElementSibling.classList.contains('error-msg')){
                contactTitle.nextElementSibling.classList.add('hidden')
            }
        }

        if(!contactContent.value){
            if(contactContent.nextElementSibling.classList.contains('error-msg')){
                contactContent.nextElementSibling.classList.remove('hidden')
            }
        }else{
            if(contactContent.nextElementSibling.classList.contains('error-msg')){
                contactContent.nextElementSibling.classList.add('hidden')
            }
        }

        if(contactName.value && contactTitle.value && contactContent.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.value)) alert('Gửi thông tin liên hệ thành công!');

    }
}

// Show hide mobile menu
const btnShowHideMenu = document.querySelector('.expand-mobile-menu .btn-show-hide');
if(btnShowHideMenu) {
    let isExpand = false;
    const menu = document.querySelector('.category-menu');
    btnShowHideMenu.onclick = function (){
        menu.classList.toggle('hidden-sm', isExpand);
        isExpand = !isExpand;
        const activeIcon = btnShowHideMenu.querySelector('i.hidden');
        const notActiveIcon = btnShowHideMenu.querySelector('i:not(.hidden)');
        activeIcon.classList.remove('hidden');
        notActiveIcon.classList.add('hidden');
    }
}