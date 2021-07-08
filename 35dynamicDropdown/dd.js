var url = "https://developerfunnel.herokuapp.com/location";

function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            // create option tag <option></option>
            var element = document.createElement('option');
            // Get the text  'delhi'
            var text = document.createTextNode(item.city_name)
            // add data in option <option>Delhi</option>
            element.appendChild(text)
            // <option value="1">Delhi</option>
            element.value = item._id;
            // add option to select 
            /*  <select>
                    <option value="1">Delhi</option>
                </select>
            */
            document.getElementById('city').appendChild(element)
        })
    })
}

function getHotel(){
    var cityId = document.getElementById('city').value;
    var hotels = document.getElementById('hotels');
    while(hotels.length>0){
        hotels.remove(0)
    }
    fetch(`https://developerfunnel.herokuapp.com/hotels?city=${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            var element = document.createElement('option');
            var text = document.createTextNode(`${item.name}|${item.locality}`)
            element.appendChild(text)
            hotels.appendChild(element)
        })
    })
}