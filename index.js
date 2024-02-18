document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: "smooth",
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var navItems = document.querySelectorAll('.nav-link');
  
  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      
      navItems.forEach(function(navItem) {
        navItem.classList.remove('active');
      });
      
      this.classList.add('active');
    });
  });
});

$(document).ready(function() {

  function setActiveNavItem() {
    var scrollPos = $(window).scrollTop();
    
    $('.nav-link').each(function() {
      var targetSesi = $(this).attr('href');
      var targetOffset = $(targetSesi).offset().top;
      var sesiHeight = $(targetSesi).height();
      var windowHeight = $(window).height();

      if (scrollPos >= targetOffset - windowHeight / 2 && scrollPos < targetOffset + sesiHeight - windowHeight / 2) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }
  setActiveNavItem();
  $(window).scroll(setActiveNavItem);
});

// Function to get and auto play YouTube video from datatag
function autoPlayYouTubeModal(){
  var trigger = $("body").find('[data-toggle="modal"]');
  trigger.click(function() {
    var theModal = $(this).data( "target" ),
    videoSRC = $(this).attr( "data-theVideo" ),
    videoSRCauto = videoSRC+"?autoplay=1" ;
    $(theModal+' iframe').attr('src', videoSRCauto);
    $(theModal+' button.close').click(function () {
        $(theModal+' iframe').attr('src', videoSRC);
    });
  });
}

$(document).ready(function () {
  autoPlayYouTubeModal();
});

  $("#exampleModal").on("hidden.bs.modal", function () {
    var iframe = document.getElementById("youtubeVideo");
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"stopVideo","args":""}',
      "*"
    );
  });