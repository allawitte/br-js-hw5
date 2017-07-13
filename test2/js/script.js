const request = new XMLHttpRequest();
const tabs = document.querySelectorAll('.tabs a');
const content = document.querySelector('#content');
const progress = document.querySelector('#preloader');
var counter = 0;
request.addEventListener('load', getBlockContent);
request.addEventListener('loadstart', preloaderHandler);
request.addEventListener('loadend', preloaderHandler);
sendRequest(tabs[0].href);

function tabHandler(event){
    event.preventDefault();
    if(counter > 0 || !event.target.classList.contains('active')){
        clearActive();
        event.target.classList.toggle('active');
        sendRequest(event.target.href);
    }

    counter ++;
}

function sendRequest(path){
    request.open('GET', path);
    request.send();
    getBlockContent();
}

function getBlockContent(){
    content.innerHTML =  request.responseText;
}

function clearActive(){
    for(let i = 0; i < tabs.length; i ++){
        tabs[i].classList.remove('active');
    }
}

function preloaderHandler(){

    progress.classList.toggle('hidden');
    console.log(progress.classList);
}
for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', tabHandler);
}
/**
 * Created by Alla on 7/13/2017.
 */
