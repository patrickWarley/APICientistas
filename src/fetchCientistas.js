// URL = https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras

function fetchCientistas(){
    fetch("https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras")
    .then(response => response.json())
    .then(data => {console.log(data);});

}

export default fetchCientistas;