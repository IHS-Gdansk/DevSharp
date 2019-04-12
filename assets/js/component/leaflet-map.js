$(function(){
    $(window).load(function(){
        "use strict";
        
        var map = L.map('leaf-map').setView([54.380920, 18.588781], 16);

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
            subdomains: ['a','b','c']
        }).addTo(map);

        L.marker([54.380920, 18.588781]).addTo(map)
            .openPopup();
    });
});