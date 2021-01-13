let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox_icon.jpeg') {
        myImage.setAttribute('src', 'images/firefor_icon2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/firefox_icon.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (myName === null || !myName){
       setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }

}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    if (storedName === null) {
        setUserName();
    }else{
        myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
    }
}

myButton.onclick = function() {
    setUserName();
}