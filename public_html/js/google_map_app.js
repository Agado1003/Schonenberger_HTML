/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init_map() {
    var var_location = new google.maps.LatLng(50.582344,3.136264);

    var var_mapoptions = {
      center: var_location,
      zoom: 10
    };

    var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title:"TRANSITIC SYSTEMS SARL"});

    var var_map = new google.maps.Map(document.getElementById("map-container"),var_mapoptions);
    var_marker.setMap(var_map);	
}

 google.maps.event.addDomListener(window, 'load', init_map);

