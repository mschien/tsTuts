// console.log('hello world');
/// <reference types="@types/google.maps" />
// import {User} from "./User";
// import {Company} from "./Company";
//
// const user = new User();
// const company = new Company();
//
// console.log(company);
// console.log(user);

new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
})