const request = new XMLHttpRequest();
const booksList = document.querySelector('#content');



request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/book/');
request.send();
request.addEventListener('load', getBooksList);

function getBooksList(){
    if(request.status == 200){

        const booksData = Array.from(JSON.parse(request.responseText));
        content.innerHTML = booksData.reduce((sum, item) => {
           return sum = sum + '<li data-title="'
                + item.title +'" data-author="'
                + item.author.name + '" data-info="'
                + item.info +'" data-price="490"><img src="'
                + item.cover.small + '"/></li>';
        }, '');
    }

}

/**
 * Created by Alla on 7/13/2017.
 */
