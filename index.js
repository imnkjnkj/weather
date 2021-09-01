const api={
    key:"3cce8d5187814f08df34ec5b402c11d5",
    base:'https://api.openweathermap.org/data/2.5/'

}

const getEle=(id) => document.getElementById(id);
const searchbox= document.querySelector('.search');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt){
    if(evt.keyCode==13){
        getResult(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResult(query){

    fetch(`${api.base}forecast?q=${query}&appid=${api.key}&lang=vi`)
    .then(weather =>{
        return weather.json();
}).then(displayResults);
}
function displayResults(data){
    console.log(data);
    var today = new Date();

    getEle("date").innerHTML=moment(today.getTime()).format("MMM Do YY");
    getEle("city").innerHTML=data.city.name;
    getEle("icon").src="http://openweathermap.org/img/wn/" +data.list[0].weather[0].icon +".png";
    getEle("decription").innerHTML=data.list[0].weather[0].description;
    getEle("nhietDo").innerHTML=(data.list[0].main.temp/10).toFixed(0)+'\xB0C';
    getEle("doAm").innerHTML=data.list[0].main.humidity;
    getEle("wind").innerHTML=data.list[0].wind.speed;
    getEle("sunrise").innerHTML=moment.unix(data.city.sunrise).format("HH:mm");
    getEle("sunset").innerHTML=moment.unix(data.city.sunset).format("HH:mm");


            //list day
            //day1:
            getEle("icon1").src="http://openweathermap.org/img/wn/" +data.list[1].weather[0].icon +".png";
            getEle("nhietDo1").innerHTML=(data.list[1].main.temp/10).toFixed(0)+'\xB0C';
            getEle("date1").innerHTML=moment(Date.today().addDays(1).getTime()).format("MMM Do YY");

            //day2:
            getEle("icon2").src="http://openweathermap.org/img/wn/" +data.list[2].weather[0].icon +".png";
            getEle("nhietDo2").innerHTML=(data.list[2].main.temp/10).toFixed(0)+'\xB0C';
            getEle("date2").innerHTML=moment(Date.today().add({ days: 2 }).getTime()).format("MMM Do YY");

                        //day3:
                        getEle("icon3").src="http://openweathermap.org/img/wn/" +data.list[3].weather[0].icon +".png";
                        getEle("nhietDo3").innerHTML=(data.list[3].main.temp/10).toFixed(0)+'\xB0C';
                        getEle("date3").innerHTML=moment(Date.today().add({ days: 3 }).getTime()).format("MMM Do YY");
            
}
const callApi = () => {
    return axios({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/forecast?q=ho chi minh&appid=3cce8d5187814f08df34ec5b402c11d5&lang=vi',

    })
        .then((res) => {
            //now
            var today = new Date();
            console.log(res.data);
            getEle("date").innerHTML=moment(today.getTime()).format("MMM Do YY");
            getEle("city").innerHTML=res.data.city.name;
            getEle("icon").src="http://openweathermap.org/img/wn/" +res.data.list[0].weather[0].icon +".png";
            getEle("decription").innerHTML=res.data.list[0].weather[0].description;
            getEle("nhietDo").innerHTML=(res.data.list[0].main.temp/10).toFixed(0)+'\xB0C';
            getEle("doAm").innerHTML=res.data.list[0].main.humidity;
            getEle("wind").innerHTML=res.data.list[0].wind.speed;
            getEle("sunrise").innerHTML=moment.unix(res.data.city.sunrise).format("HH:mm");
            getEle("sunset").innerHTML=moment.unix(res.data.city.sunset).format("HH:mm");
        
        
                    //list day
                    //day1:
                    getEle("icon1").src="http://openweathermap.org/img/wn/" +res.data.list[1].weather[0].icon +".png";
                    getEle("nhietDo1").innerHTML=(res.data.list[1].main.temp/10).toFixed(0)+'\xB0C';
                    getEle("date1").innerHTML=moment(Date.today().addDays(1).getTime()).format("MMM Do YY");
        
                    //day2:
                    getEle("icon2").src="http://openweathermap.org/img/wn/" +res.data.list[2].weather[0].icon +".png";
                    getEle("nhietDo2").innerHTML=(res.data.list[2].main.temp/10).toFixed(0)+'\xB0C';
                    getEle("date2").innerHTML=moment(Date.today().add({ days: 2 }).getTime()).format("MMM Do YY");
        
                    //day3:
                    getEle("icon3").src="http://openweathermap.org/img/wn/" +res.data.list[3].weather[0].icon +".png";
                    getEle("nhietDo3").innerHTML=(res.data.list[3].main.temp/10).toFixed(0)+'\xB0C';
                    getEle("date3").innerHTML=moment(Date.today().add({ days: 3 }).getTime()).format("MMM Do YY");
                    

        }).catch((err) => {
            console.log(err);
        });
};
callApi();


var slideIndex = 1;

// Next/previous controls
function plusDivs(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls

if ($(window).width() < 375) {
    showSlides(slideIndex);


 }
 function currentSlide(n) {
    showSlides(slideIndex = n);
  }
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}