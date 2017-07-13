const request = new XMLHttpRequest();
request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/weather');
request.send();
const btn = document.querySelector('.btn');
btn.addEventListener('click', btnOnClick);
function getWeather() {
    if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        setData(response);
    }

}

function btnOnClick(){
    this.innerHTML = 'Done!'
}

request.addEventListener('load', getWeather)
