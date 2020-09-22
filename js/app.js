document.addEventListener('init', function(event) {
    var page = event.target;

    if (page.id === 'page1') {
        page.querySelector('#move1').onclick = function() {
            document.querySelector('#myNavigator').pushPage('views/aladiin.html', { data: { title: 'Aladdin' } });
        };
        page.querySelector('#move2').onclick = function() {
            document.querySelector('#myNavigator').pushPage('views/blackpanther.html', { data: { title: 'Black Panther' } });
        };
        page.querySelector('#move3').onclick = function() {
            document.querySelector('#myNavigator').pushPage('views/avengers.html', { data: { title: 'Avengers' } });
        };

    } else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    } else if (page.id === 'search') {
        page.querySelector('#search_aladdin').onclick = function() {
            document.querySelector('#Navigator_search').pushPage('views/aladiin.html', { data: { title: 'Aladdin' } });
        };
        page.querySelector('#search_black').onclick = function() {
            document.querySelector('#Navigator_search').pushPage('views/blackpanther.html', { data: { title: 'Black Panther' } });
        };
        page.querySelector('#search_avengers').onclick = function() {
            document.querySelector('#Navigator_search').pushPage('views/avengers.html', { data: { title: 'Avengers' } });
        };
    } else if (page.id === 'favorite') {
        page.querySelector('#favorite_aladdin').onclick = function() {
            document.querySelector('#Navigator_favorite').pushPage('views/aladiin.html', { data: { title: 'Aladdin' } });
        };
        page.querySelector('#favorite_black').onclick = function() {
            document.querySelector('#Navigator_favorite').pushPage('views/blackpanther.html', { data: { title: 'Black Panther' } });
        };
        page.querySelector('#favorite_avengers').onclick = function() {
            document.querySelector('#Navigator_favorite').pushPage('views/avengers.html', { data: { title: 'Avengers' } });
        };
    }

});