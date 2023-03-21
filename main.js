"use strict";

const colors = ["blue", "pink", "red", "brown", "yellow", "purple"];


const getColors = async () => {
    for (let color of colors) {
        const li = document.createElement('li');
        li.textContent = color;
        document.querySelector('ul').append(li);
    }

}

getColors();