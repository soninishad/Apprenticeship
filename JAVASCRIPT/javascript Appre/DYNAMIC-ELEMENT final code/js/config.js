"use strict"; //strict mode

//settings:-
//URL : / forward slash mendatory.
// const LOCAL_BASE_URL = '/C:/Users/awnis/OneDrive/Desktop/folder/dynamic-elements/';  
// const LOCAL_BASE_URL = '/C:/Users/Lenovo/Desktop/javascript%20Appre/DYNAMIC-ELEMENT/';
const LOCAL_BASE_URL = '/C:/Users/Lenovo/Desktop/javascript Appre/DYNAMIC-ELEMENT final code/';
const SERVER_BASE_URL = 'http://127.0.0.1:5500/';


const security ={
    'attempt':{
        'change-password' : 3,
    }
};

const protocol = (window.location.protocol == 'file:')? LOCAL_BASE_URL : SERVER_BASE_URL;
const page_location = (window.location.protocol == 'file:')? window.location.pathname : window.location.origin + window.location.pathname;  

var SERVER_ENV = {
    'protocol': window.location.protocol,
    'BASE_URL' : protocol,
};

var SessionRoutes = [
   'dashboard',
    'myprofile',
    'change-password',
    'upload'
];

var secureRoutes = [
    'dashboard',
    'myprofile',
    'change-password',
    'contact',
    'register',
    'upload'
];















