'use strict';

/*localStorage.getItem(key):获取指定key本地存储的值

 localStorage.setItem(key,value)：将value存储到key字段

 localStorage.removeItem(key):删除指定key本地存储的值

 var x = JSON.stringify(value):将value的值整个赋值给X*/

function addItem(key, value){
    return localStorage.setItem(key,JSON.stringify(value));

}

function getItem(value){
    return JSON.parse(localStorage.getItem(value));
}

function removeItem(key){
    return localStorage.removeItem(key);
}

function clickSum(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    }
    else {
        localStorage.clickcount = 1;
    }
    return Number(localStorage.clickcount);
}

function clickdownSum(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) - 1;
    }
    else {
        localStorage.clickcount = 1;
    }
    return Number(localStorage.clickcount);
}
