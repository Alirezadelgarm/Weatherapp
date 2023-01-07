
    const appWrap=document.querySelector(".app-wrap")
    const searchBox=document.querySelector(".search-box")

    searchBox.addEventListener("keydown",(event)=>{
        if(event.code==="Enter"){
        const city= searchBox.value
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9a9604afeb7d5cb4e898a5960c07b85`)
           .then(res=>res.json())
           .then(data=>{
             console.log(data)
             const{country}=data.sys
             const{temp,temp_min,temp_max}=data.main
             
               appWrap.lastElementChild.innerHTML=`
               <section class="location">
                <div class="city">${city}, ${country}</div>
                <div class="date">${showDate()}</div>
               </section>
                <div class="current">
                <div class="temp">${Math.floor(temp-273.15)}<span>°c</span></div>
                <div class="weather">${data.weather[0].main}</div>
                <div class="hi-low">${Math.floor(temp_min-273.15)}°c /${Math.floor(temp_max-273.15)}°c</div>
               </div>
               `
           })
           

        }

    })


   const showDate=()=>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let now=new Date()
    let day=days[now.getDay()]
    let month=months[now.getMonth()]
    let year =now.getFullYear()
    let date=now.getDate()
    return `${day} ${date} ${month} ${year}`

   }