const IMAGES_URL = ['img/pika.jpg', 'img/raccoon.png', 'img/red-panda.jpg', 'img/squirrel.jpg'];

carousel(IMAGES_URL);

function carousel(imagesUrl) {
    if (typeof jQuery == 'undefined') { // vérifie que jQuery a bien chargé
        console.error('jQuery is needed for this component');
    } else {
        console.log('Loading carousel ...');
        $(document).ready(function() {
            const $arrows = $('.carousel .controls .arrow');
            const $imageContainer = $('.carousel .images');
            const slideDelay = 3000;
            const animationDelay = 500;

            loadImages();
            bindControls();
            startRotating();

            function loadImages() {
                imagesUrl.forEach(function(url, index) {
                    let $image = $(`<img src="${url}" alt="mammal-${index}">`);
                    if (index > 0) {
                        $image.hide();
                    }
                    $imageContainer.append($image);
                });
            }

            function bindControls() {
                $arrows.on('click', function() {
                    move($(this).data('direction'));
                });
            }

            function startRotating() {
                setInterval(function() {
                    if (!hasAnimatedChildren($imageContainer)) { // pour eviter que cela se déclenche au moment d'une animaton
                        console.log('Cycling images');
                        move('right');
                    } else {
                        console.log('Skipping cycle because animation already taking place');
                    }
                }, slideDelay);
            }

            function move(direction) {
                let $currentImage = $imageContainer.find(":visible");
                let $last = $imageContainer.find('img').last();
                let $first = $imageContainer.find('img').first();

                if (direction == "right") {
                    $nextImage = $currentImage.is($last) ? $first : $currentImage.next(); // pour la fonction .is(), voir http://stackoverflow.com/a/6986013
                } else if (direction == "left") {
                    $nextImage = $currentImage.is($first) ? $last : $currentImage.prev(); // pour la fonction .is(), voir http://stackoverflow.com/a/6986013
                }

                if (!hasAnimatedChildren($imageContainer)) {
                    console.log('Changing to', $nextImage.attr('alt'));
                    $currentImage.hide("slide", {
                            direction: opposite(direction)
                        }, animationDelay)
                        .promise().done(function() { // .promise() combinée avec .done() permet de vérifier que l'animaton est bien terminée avant d'en commencer une autre
                            $nextImage.show("slide", {
                                direction: direction
                            }, animationDelay);
                        });
                } else {
                    console.log('Animation already taking place');
                }
            }

            function hasAnimatedChildren($container) {
                return $container.children().filter(':animated').length !== 0;
            }

            function opposite(direction) {
                return direction == "left" ? "right" : "left";
            }
        });
    }
}






































































const up = `\u2063\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\uD83C\uDF88\uD83C\uDF88\u2002\u2002\u2601\uFE0F
\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\uD83C\uDF88\uD83C\uDF88\uD83C\uDF88
\u2002\u2601\uFE0F\u2002\u2002\u2002\u2002\u2002\uD83C\uDF88\uD83C\uDF88\uD83C\uDF88\uD83C\uDF88
\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\uD83C\uDF88\uD83C\uDF88\uD83C\uDF88\uD83C\uDF88
\u2002\u2002\u2002\u2601\uFE0F\u2002\u2002\u2002\u2002\u2063\uD83C\uDF88\uD83C\uDF88\uD83C\uDF88
\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\\|/
\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\uD83C\uDFE0\u2002\u2002\u2002\u2601\uFE0F
\u2002\u2002\u2002\u2601\uFE0F\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2601\uFE0F

\uD83C\uDF33\uD83C\uDF39\uD83C\uDFEB\uD83C\uDF33\uD83C\uDFE2\uD83C\uDFE2_\uD83C\uDFE2\uD83C\uDFE2\uD83C\uDF33\uD83C\uDF33`;
console.log(up);