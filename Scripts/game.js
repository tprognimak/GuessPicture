$(function () {
    alert("Find a pair of images");
    var count = 0;
    var guesed = 0;
    var pict1, pict2;
    var element1, element2;
    var round = 0;
    
    $(document).ready(function () {
        $("div.row").randomize("div.img-container");
    });

    (function ($) {

        $.fn.randomize = function (childElem) {
            return this.each(function () {
                var $this = $(this);
                var elems = $this.children(childElem);

                elems.sort(function () { return (Math.round(Math.random()) - 0.5); });

                $this.remove(childElem);

                for (var i = 0; i < elems.length; i++)
                    $this.append(elems[i]);

            });
        }
    })(jQuery);

    $('.backstop').click(function () {
        if (count == 0) {
            $(this).css('display', 'none');
            parent = $(this).parents('.img-container');           
            element1 = parent.children('.picture');
            pict1 = element1.attr("src");
            count = 1;
        }
        else if (count == 1) {
            round++;
            $(this).css('display', 'none');
            parent = $(this).parents('.img-container');
            if (guesed == 7) {
                alert('You win!!! You have ' + round + ' rounds');
                agree = confirm('Are you want play one more time?');
                if (agree) {
                    location.reload();
                }
            }
            element2 = parent.children('.picture');
            pict2 = element2.attr("src");
            count = 2;
        }
        else {
            if (pict1 == pict2) {
                guesed++;
                parent1 = element1.parents('.img-container');
                parent2 = element2.parents('.img-container');
                parent1.children('.backstop').remove();
                parent2.children('.backstop').remove();                
            }
            else {
                $('.backstop').css('display', 'inline');
            }            
            $(this).css('display', 'none');
            parent = $(this).parents('.img-container');
            element1 = parent.children('.picture');
            pict1 = element1.attr("src");
            count = 1;
        }       
    });
});