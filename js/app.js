document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'page1') {
        page.querySelector('#move1').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/aladiin.html', { data: { title: 'Aladdin' } });
        };
        page.querySelector('#move2').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/john_wick_2.html', { data: { title: 'Black Panther' } });
        };
        page.querySelector('#move3').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/john_wick_3.html', { data: { title: 'Avengers'' } });
        };
        
    } else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});