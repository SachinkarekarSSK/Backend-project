console.log('this is a main javascriptfile');

let submitbtn = document.getElementById('submitbtn')
let cityName = document.getElementById('cityName')
let city_name = document.getElementById('city_name')
let temp_real_val = document.getElementById('temp_real_val')
let temp_status = document.getElementById('temp_status')

let middle_layer = document.querySelector('.middle_layer')

const getinfo = async(e)=>{
    e.preventDefault()

    let cityvalue = cityName.value;

    // here you use your app id . because this token will not work with you
    let appid = 'e596f5e5aad98aecad3d9d2a9be8e98b'
 
    if (cityvalue === '') {
        city_name.innerText = `please write the name before you search`
        middle_layer.classList.add('data_hide')

    } else {
        try{
            console.log('under try');
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=${appid}`
            const response = await fetch(url)
            const data = await response.json();
            const arrdata = [data]

            city_name.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country}`
            temp_real_val.innerText = arrdata[0].main.temp;

            const tempMood = arrdata[0].weather[0].main
            console.log(tempMood);

            console.log(tempMood);
            // condition to check sunny or cloudy
            if (tempMood === 'Clear') {
                temp_status.innerHTML = `<i class='fas fa-sun' style='color:#eccc68;'></i>`
            }
             else if(tempMood === 'clouds') {
                temp_status.innerHTML = `<i class='fas fa-cloud' style='color:#acaeb6;'></i>`
            }
             else if(tempMood === 'Rain') {
                temp_status.innerHTML = `<i class='fas fa-cloud-rain' style='color:#a9adbb;'></i>`
            }
             else {
                temp_status.innerHTML = `<i class='fas fa-cloud' style='color:#f1f2f6;'></i>`
            }


            middle_layer.classList.remove('data_hide')

        }catch{
            city_name.innerText = `please enter the city name properly`
            middle_layer.classList.add('data_hide')
        }

        
    }



}

submitbtn.addEventListener('click', getinfo)






const currentDay = ()=>{
    let wholeWeek = new Array(7)
    wholeWeek[0] = 'Sunday'
    wholeWeek[1] = 'Monday'
    wholeWeek[2] = 'Tueday'
    wholeWeek[3] = 'Wednesday'
    wholeWeek[4] = 'Thursday'
    wholeWeek[5] = 'Friday'
    wholeWeek[6] = 'Saturday'


    let day = document.getElementById('day')
    let today_number = new Date().getDay()
    day.innerHTML = wholeWeek[today_number]


    
}

currentDay()

let dateandMonth = ()=>{

    
    let today_date = document.getElementById('today_date')
    let currentdate = new Date()
    let nowDate = currentdate.getDate()
    
    let monthArray = ['Jan', 'Feb','Mar', 'Apr','May', 'June', 'July','Aug','Sept','Oct','Nov', 'Dec']
    let month = currentdate.getMonth()

    today_date.innerHTML = `${nowDate} ${monthArray[month]}`
}

dateandMonth()
