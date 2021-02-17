const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const searchBtn = document.getElementById("searchBtn");

const temp_real_value = document.getElementById("temp_real_value");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer")


const getInfo = async (event) => {
    event.preventDefault();


let cityValue = cityName.value

if (cityValue === "") {
    city_name.innerText = "Please write the city name before search"
    datahide.classList.add("data_hide")
} else {
    try{
         let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=cb204b76afe8ec793f6a17476183a8db`;
         const response = await fetch(url);
         console.log(response)
        const data = await response.json()
        console.log(data)

        const arrData = [data]
        console.log(arrData)

        city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
        temp_real_value.innerText = arrData[0].main.temp;
        // temp_status.innerText = arrData[0].weather[0].main;
        const tempMood = arrData[0].weather[0].main;

        if(tempMood === "Clear"){
            temp_status.innerHTML = 
            "<i class='fas fa-sun' style = 'color:#eccc68'></i>"
        }else if(tempMood === "Clouds"){
             temp_status.innerHTML =
               "<i class='fas fa-cloud' style = 'color:#f1f2f6'></i>";
        }else if(tempMood === "Rain"){
             temp_status.innerHTML =
               "<i class='fas fa-cloud-rain' style = 'color:#a4b0be'></i>";
        }else{
             temp_status.innerHTML =
               "<i class='fas fa-sun' style = 'color:#eccc68'></i>";
        }
        datahide.classList.remove("data_hide");
    }
    catch{
         city_name.innerText = "Please enter the proper city name";
         datahide.classList.add("data_hide");
    }
 
  }
}

searchBtn.addEventListener("click" , getInfo)