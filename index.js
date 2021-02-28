const getCovidData= async () => {
    let response = await fetch(` https://api.covid19api.com/summary`);
    let data = await response.json();
  
    return data;
    
    }
const getCovidCityData= async (city) => {
        let response = await fetch(` https://api.covid19api.com/summary`);
        let data = await response.json();
        
        return data;
        
        }  
const createHTML1 = (name, value) => `
        <div class='card container bg-info ' >
        
        <div class="card-body">
          <p class="card-text fw-bold text-center fs-3">${name}: ${value}</p>
        </div>
     
        </div>               
        `
// const createHTML2 = (value) => `
//         <div class='card container bg-light ' >
//             <div class='container'>
//                 <div class='row'>
//                     <div class = 'col-sm-10 col-lg-6'>
//                         <h3 class = 'fw-bold'>New Deaths<h3>
//                      </div>
//                      <div class = 'col-sm-10 col-lg-6 pt-2 fw-bold '>
//                         ${value}
//                      </div>
//                 </div>
//             </div>
//         </div>               
//         `
// const createHTML3 = (value) => `
//         <div class='card container bg-light ' >
//             <div class='container'>
//                 <div class='row'>
//                     <div class = 'col-sm-10 col-lg-6'>
//                         <h3 class = 'fw-bold'>New Recovered<h3>
//                      </div>
//                      <div class = 'col-sm-10 col-lg-6 pt-2 fw-bold '>
//                         ${value}
//                      </div>
//                 </div>
//             </div>
//         </div>               
//         `
// const createHTML4 = (value) => `
//         <div class='card container bg-light ' >
//             <div class='container'>
//                 <div class='row'>
//                     <div class = 'col-sm-10 col-lg-6'>
//                         <h3 class = 'fw-bold'>Total Confirmed<h3>
//                      </div>
//                      <div class = 'col-sm-10 col-lg-6 pt-2 fw-bold '>
//                         ${value}
//                      </div>
//                 </div>
//             </div>
//         </div>               
//         `
// const createHTML5 = (value) => `
//         <div class='card container bg-light ' >
//             <div class='container'>
//                 <div class='row'>
//                     <div class = 'col-sm-10 col-lg-6'>
//                         <h3 class = 'fw-bold'>Total Deaths<h3>
//                      </div>
//                      <div class = 'col-sm-10 col-lg-6 pt-2 fw-bold '>
//                         ${value}
//                      </div>
//                 </div>
//             </div>
//         </div>               
//         `
//     const createHTML6 = (value) => `
//         <div class='card container bg-light ' >
//             <div class='container'>
//                 <div class='row'>
//                     <div class = 'col-sm-10 col-lg-6'>
//                         <h3 class = 'fw-bold'>Total Recovered<h3>
//                      </div>
//                      <div class = 'col-sm-10 col-lg-6 pt-2 fw-bold '>
//                         ${value}
//                      </div>
//                 </div>
//             </div>
//         </div>               
//         `
const createHTML2 = (country, value) => `
    <div class='card container bg-info ' >
            
        <div class="card-body">
        <p class="card-text fw-bold text-center fs-3">${country}: ${value}</p>
        </div>
    </div>
                  
    `
const button1 = document.querySelector('#newConfirmed');
const button2 = document.querySelector('#nConfirmed');
const covid = document.querySelector('#covid')
const countryName = document.querySelector('#country1');
const button3 = document.querySelector('#newDeaths');
const button5 = document.querySelector('#newRecovered');
const button7 = document.querySelector('#totalConfirmed');
const button9 = document.querySelector('#totalDeaths');
const button11 = document.querySelector('#totalRecovered');
const button4 = document.querySelector('#nDeaths');
const button6 = document.querySelector('#nRecovered');
const button8 = document.querySelector('#totConfirmed');
const button10 = document.querySelector('#totDeaths');
const button12 = document.querySelector('#totRecovered');


button1.addEventListener('click', (event) => {
            event.preventDefault();
            // getCovidData();
            // console.log(getCovidData())
            const name = 'NewConfirmed Cases';
            getCovidData()
            .then(data => {
                const value = data.Global.NewConfirmed
                const name = 'New Confirmed Cases';
            const cardHtml1 = createHTML1(name, value);
            covid.innerHTML = cardHtml1
    })
})
button3.addEventListener('click', (event) => {
    event.preventDefault();
    // getCovidData();
    // console.log(getCovidData())
    getCovidData()
    .then(data => {
        const value = data.Global.NewDeaths
        const name = 'New Death Cases'
    const cardHtml2 = createHTML1(name, value);
    covid.innerHTML = cardHtml2
})
})
button5.addEventListener('click', (event) => {
    event.preventDefault();
    // getCovidData();
    // console.log(getCovidData())
    getCovidData()
    .then(data => {
        const value = data.Global.NewRecovered
        const name = 'New Recovered Cases'
    const cardHtml3 = createHTML1(name, value);
    covid.innerHTML = cardHtml3
})
})
button7.addEventListener('click', (event) => {
    event.preventDefault();
    // getCovidData();
    // console.log(getCovidData())
    getCovidData()
    .then(data => {
        const value = data.Global.TotalConfirmed
        const name = 'Total Confirmed Cases'
    const cardHtml4 = createHTML1(name, value);
    covid.innerHTML = cardHtml4
})
})
button9.addEventListener('click', (event) => {
    event.preventDefault();
    // getCovidData();
    // console.log(getCovidData())
    getCovidData()
    .then(data => {
        const value = data.Global.TotalDeaths
        const name = 'Total Death Cases'
    const cardHtml5 = createHTML1(name,value);
    covid.innerHTML = cardHtml5
})
})
button11.addEventListener('click', (event) => {
    event.preventDefault();
    // getCovidData();
    // console.log(getCovidData())
    getCovidData()
    .then(data => {
        const value = data.Global.TotalRecovered
        const name = 'Total Recovered Cases'
    const cardHtml6 = createHTML1(name,value);
    covid.innerHTML = cardHtml6
})
})
button2.addEventListener('click', (event) => {
    
    const city = countryName.value;
        
    getCovidCityData(city)
        .then(data => {
          
          // get the data we need for our html from the response
        const country = city;
        let value;
        let names = [];
        const countries = data.Countries
        console.log(countries)
        for(let i=0; i<countries.length; i++) {
              let result;
               result = data.Countries[i].Country
               names.push(result)
            }
           console.log(names)       
            for(let j=0; j<names.length; j++) {
                if(names[j] === country) {
                    value =  data.Countries[j].NewConfirmed
                }
            }
         
        console.log(value)
        const cardHtml7 = createHTML2(country, value);
      
          // render!
        covid.innerHTML = cardHtml7;
    })
})

button4.addEventListener('click', (event) => {
   
    const city = countryName.value;
        
    getCovidCityData(city)
        .then(data => {
          
          // get the data we need for our html from the response
        const country = city;
        let value;
        let names = [];
        const countries = data.Countries
        console.log(countries)
        for(let i=0; i<countries.length; i++) {
              let result;
               result = data.Countries[i].Country
               names.push(result)
            }
           console.log(names)       
            for(let j=0; j<names.length; j++) {
                if(names[j] === country) {
                    value =  data.Countries[j].NewDeaths
                }
            }
         
        console.log(value)
        const cardHtml8 = createHTML2(country, value);
      
          // render!
        covid.innerHTML = cardHtml8;
    })
})

button6.addEventListener('click', (event) => {
   
    const city = countryName.value;
        
    getCovidCityData(city)
        .then(data => {
          
          // get the data we need for our html from the response
        const country = city;
        let value;
        let names = [];
        const countries = data.Countries
        console.log(countries)
        for(let i=0; i<countries.length; i++) {
              let result;
               result = data.Countries[i].Country
               names.push(result)
            }
           console.log(names)       
            for(let j=0; j<names.length; j++) {
                if(names[j] === country) {
                    value =  data.Countries[j].NewRecovered
                }
            }
         
        console.log(value)
        const cardHtml9 = createHTML2(country, value);
      
          // render!
        covid.innerHTML = cardHtml9;
    })
})
button8.addEventListener('click', (event) => {
    
    const city = countryName.value;
        
    getCovidCityData(city)
        .then(data => {
          
          // get the data we need for our html from the response
        const country = city;
        let value;
        let names = [];
        const countries = data.Countries
        console.log(countries)
        for(let i=0; i<countries.length; i++) {
              let result;
               result = data.Countries[i].Country
               names.push(result)
            }
           console.log(names)       
            for(let j=0; j<names.length; j++) {
                if(names[j] === country) {
                    value =  data.Countries[j].TotalConfirmed
                }
            }
         
        console.log(value)
        const cardHtml10 = createHTML2(country, value);
      
          // render!
        covid.innerHTML = cardHtml10;
    })
})

button10.addEventListener('click', (event) => {
    
    const city = countryName.value;
        
    getCovidCityData(city)
        .then(data => {
          
          // get the data we need for our html from the response
        const country = city;
        let value;
        let names = [];
        const countries = data.Countries
        console.log(countries)
        for(let i=0; i<countries.length; i++) {
              let result;
               result = data.Countries[i].Country
               names.push(result)
            }
           console.log(names)       
            for(let j=0; j<names.length; j++) {
                if(names[j] === country) {
                    value =  data.Countries[j].TotalDeaths
                }
            }
         
        console.log(value)
        const cardHtml11 = createHTML2(country, value);
      
          // render!
        covid.innerHTML = cardHtml11;
    })
})
button12.addEventListener('click', (event) => {
  
    const city = countryName.value;
        
    getCovidCityData(city)
        .then(data => {
          
          // get the data we need for our html from the response
        const country = city;
        let value;
        let names = [];
        const countries = data.Countries
        console.log(countries)
        for(let i=0; i<countries.length; i++) {
              let result;
               result = data.Countries[i].Country
               names.push(result)
            }
           console.log(names)       
            for(let j=0; j<names.length; j++) {
                if(names[j] === country) {
                    value =  data.Countries[j].TotalRecovered
                }
            }
         
        console.log(value)
        const cardHtml12 = createHTML2(country, value);
      
          // render!
        covid.innerHTML = cardHtml12;
    })
})