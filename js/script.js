$(function() {
	$(this).mycarousel()
})

$(function() {
    var html = $('#item_tmpl').html();
    var myInfo = [
        {
            heading: 'Kathrin Kozieva',
            photo: ' src="img/IMG_6550.JPG" class="center" width="150px" alt="фотография">'
        },
        {
            headingSmall: 'Head of Carrier Sales at Luxor Communications Ltd.'
        },
        {
            text: 'I want to be Front-End developer because:'
        },
        {
            text1: '1) it is interesting and challenging'
        },
        {
            text1: '2) it is something new for me'
        },
        {
            text1: '3) it is actual now and will be actual for a while in the future'
        },
        {
            headingSmall: 'My contacts: ',
            text1: '+380505976015',
            myLink: ' href="http://vk.com/id175036751" class="text1">vk.com'
        }
    ];
  
    var content = tmpl(html, {
        data: myInfo
    });
    $('.tmpl__wrap').append(content);
})