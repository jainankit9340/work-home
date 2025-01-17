const navbar = document.querySelector('nav')

window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY
  if (lastPosition > 150 ) {
    navbar.classList.add('active')
  } else if (navbar.classList.contains('active')) {
    navbar.classList.remove('active')
  } else {
    navbar.classList.remove('active')
  }
})

var lightbox = GLightbox();
        lightbox.on('open', (target) => {
            console.log('lightbox opened');
        });
        var lightboxDescription = GLightbox({
            selector: '.glightbox2'
        });
        var lightboxVideo = GLightbox({
            selector: '.glightbox3'
        });
        lightboxVideo.on('slide_changed', ({ prev, current }) => {
            console.log('Prev slide', prev);
            console.log('Current slide', current);

            const { slideIndex, slideNode, slideConfig, player } = current;

            if (player) {
                if (!player.ready) {
                    // If player is not ready
                    player.on('ready', (event) => {
                        // Do something when video is ready
                    });
                }

                player.on('play', (event) => {
                    console.log('Started play');
                });

                player.on('volumechange', (event) => {
                    console.log('Volume change');
                });

                player.on('ended', (event) => {
                    console.log('Video ended');
                });
            }
        });

        var lightboxInlineIframe = GLightbox({
            selector: '.glightbox4'
        });

        (function() {
            var _ = v;

            var scrollerDesc = mctracker();
            scrollerDesc.setup({
                element: _('.box-container').toArray(),
                offsetBottom: '20%',
                once: true,
            }).onStepEnter(function(response) {
                var list = _(response.element).find('li');
                list.forEach(function(item, i) {
                    var delay = i * 150 / 1000;
                    item = _(item);
                    item.attr('style', 'transition-delay: ' + delay + 's;');
                })

                list.addClass('show')
            });
        }());