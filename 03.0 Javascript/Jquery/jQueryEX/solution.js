console.log($('div.module'));

console.log($
('#myListItem'));

console.log($('label[for="q"]'));

console.log($(':hidden'));

console.log($('input[type=hidden]').length);

console.log($('img[alt]').length);

console.log($('#fruits tbody [tr]:odd').length);

$('img').each(function (i)
{
   var $img=$(this);
   console.log($img.attr('alt'));
});

console.log($('input[name="q"]').closest('form').addClass('myForm'));

console.log($('li.current').removeClass('current')
    .next()
    .addClass('current')
);

console.log($('#specials select').parent().next().find('input.input_submit'));

console.log($('#slideshow li:first')
    .addClass('current')
    .siblings()
    .addClass('disabled'));

var $ul=$('#myList');
for (i=0; i<5; i++){
    console.log($('<li>List item ' + i + '</li>').appendTo($ul));
}

console.log($('#myList li:odd').remove());

console.log($('div:last').append('<h2>new heading </h2>')
    .append('<p> new paragraph</p>'));

console.log($('select').append('<option value="Wednesday">Wednesday</option>)'));

var $img = $('img:first');
var $newDiv=$('<div class="module"/>');

console.log($newDiv.append($img.clone()).insertAfter('div.module:last'));