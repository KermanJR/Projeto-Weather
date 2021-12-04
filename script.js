

function boxCidades(){
    function campoGrande(){
        const url = ' https://api.weatherapi.com/v1/current.json?key=86a989715fc84969a4640123212511&q=Campo&Grande&lang=pt&aqi=yes';
        const options = {
            method: 'GET',
        }

        const temp = fetch(url, options);
        temp.then(r=>{
            return r.json();
        }).then(r=>{
            console.log(r);
            var box = document.querySelectorAll('.container .item');
            var box_p = document.querySelector('.box-2 .background'); 
            var dt = new Date();

            if(r.current.condition.text === 'Parcialmente nublado' && dt.getHours() >= 19){
                box[0].style.display = 'block';
                box[0].classList.add('night');
                box[0].children[0].classList.add('moon');
                box[0].children[1].innerText = r.location.name;
                box[0].children[2].innerText = r.current.temp_c + '°';
               
            }else if(r.current.condition.text === 'Parcialmente nublado' ){
                box[0].style.display = 'block';
                box[0].classList.add('breezy');
                box[0].children[0].classList.add('cloudr');
                box[0].children[1].innerText = r.location.name;
                box[0].children[2].innerText = r.current.temp_c + '°';

            }

            if(r.current.condition.text === 'Sol'){
                box[0].style.display = 'block';
                box[0].classList.add('hot');
                box[0].children[0].classList.add('sun');
                box[0].children[1].innerText = r.location.name;
                box[0].children[2].innerText = r.current.temp_c + '°';
               
            }

           /*if(r.current.condition.text === 'Céu limpo' && dt.getHours() >= 1){
                box[0].style.display = 'block';
                box[0].classList.add('night');
                box[0].children[0].classList.add('moon');
                box[0].children[1].innerText = r.location.name;
                box[0].children[2].innerText = r.current.temp_c + '°';
               
            }*/

            else if(r.current.condition.text === 'Céu limpo'){
                box[0].style.display = 'block';
                box[0].classList.add('cloudy');
                box[0].children[0].classList.add('cloud');
                box[0].children[1].innerText = r.location.name;
                box[0].children[2].innerText = r.current.temp_c + '°';
               
            }


            if(r.current.condition.text === 'Chuva moderada ou forte com trovoada'){
                box[0].style.display = 'block';
                box[0].classList.add('breezy-2');
                box[0].children[0].classList.add('cloudr');
                box[0].children[1].innerText = r.location.name;s
                box[0].children[2].innerText = r.current.temp_c + '°';
            }

            if(r.current.condition.text === 'Chuva fraca'){
                box[0].classList.add('breezy-3');
                box[0].children[0].classList.add('cloudr');
                box[0].children[1].innerText = r.location.name;s
                box[0].children[2].innerText = r.current.temp_c + '°';
            }


        })
    }


    function dourados(){
        const url = ' https://api.weatherapi.com/v1/current.json?key=86a989715fc84969a4640123212511&q=Dourados&lang=pt';
        const options = {
            method: 'GET',
        }

        const temp = fetch(url, options);
        temp.then(r=>{
            return r.json();
        }).then(r=>{
            console.log(r);
            var box = document.querySelectorAll('.container .item');

           
            if(r.current.condition.text === 'Parcialmente nublado'){
                box[1].style.display = 'block';
                box[1].classList.add('breezy');
                box[1].children[0].classList.add('cloudr');
                box[1].children[1].innerText = r.location.name;
                box[1].children[2].innerText = r.current.temp_c + '°';
            
            }

            if(r.current.condition.text === 'Sol'){
                box[1].style.display = 'block';
                box[1].classList.add('hot');
                box[1].children[0].classList.add('sun');
                box[1].children[1].innerText = r.location.name;
                box[1].children[2].innerText = r.current.temp_c + '°';
               
            }

            if(r.current.condition.text === 'Céu limpo'){
                box[1].style.display = 'block';
                box[1].classList.add('cloudy');
                box[1].children[0].classList.add('cloud');
                box[1].children[1].innerText = r.location.name;
                box[1].children[2].innerText = r.current.temp_c + '°';
               
            }

            if(r.current.condition.text === 'Chuva moderada ou forte com trovoada'){
                box[1].style.display = 'block';
                box[1].classList.add('breezy');
                box[1].children[0].classList.add('cloudr');
                box[1].children[1].innerText = r.location.name;
                box[1].children[2].innerText = r.current.temp_c + '°';
            }


        })
    }


    function coxim(){
        const url = ' https://api.weatherapi.com/v1/current.json?key=86a989715fc84969a4640123212511&q=coxim&lang=pt';
        const options = {
            method: 'GET',
        }

        const temp = fetch(url, options);
        temp.then(r=>{
            return r.json();
        }).then(r=>{
            console.log(r);
            var box = document.querySelectorAll('.container .item');

            
            if(r.current.condition.text === 'Parcialmente nublado'){
                box[2].style.display = 'block';
                box[2].classList.add('breezy');
                box[2].children[0].classList.add('cloudr');
                box[2].children[1].innerText = r.location.name;
                box[2].children[2].innerText = r.current.temp_c + '°';
               
            }

            if(r.current.condition.text === 'Sol'){
                box[2].style.display = 'block';
                box[2].classList.add('hot');
                box[2].children[0].classList.add('sun');
                box[2].children[1].innerText = r.location.name;
                box[2].children[2].innerText = r.current.temp_c + '°';
               
            }

            if(r.current.condition.text === 'Céu limpo'){
                box[2].style.display = 'block';
                box[2].classList.add('cloudy');
                box[2].children[0].classList.add('cloud');
                box[2].children[1].innerText = r.location.name;
                box[2].children[2].innerText = r.current.temp_c + '°';
               
            }

            if(r.current.condition.text === 'Chuva moderada ou forte com trovoada'){
                box[2].style.display = 'block';
                box[2].classList.add('breezy');
                box[2].children[0].classList.add('cloudr');
                box[2].children[1].innerText = r.location.name;
                box[2].children[2].innerText = r.current.temp_c + '°';
            }

        })
    }

        function portoMurtinho(){
            const url = ' https://api.weatherapi.com/v1/current.json?key=86a989715fc84969a4640123212511&q=porto%murtinho&lang=pt';
            const options = {
                method: 'GET',
            }
    
            const temp = fetch(url, options);
            temp.then(r=>{
                return r.json();
            }).then(r=>{
                console.log(r);
                var box = document.querySelectorAll('.container .item');
    
                
            if(r.current.condition.text === 'Parcialmente nublado'){
                box[3].style.display = 'block';
                box[3].classList.add('breezy');
                box[3].children[0].classList.add('cloudr');
                box[3].children[1].innerText = r.location.name;
                box[3].children[2].innerText = r.current.temp_c + '°';
               
            }

            if(r.current.condition.text === 'Sol'){
                box[3].style.display = 'block';
                box[3].classList.add('hot');
                box[3].children[0].classList.add('sun');
                box[3].children[1].innerText = r.location.name;
                box[3].children[2].innerText = r.current.temp_c + '°';
               
            }

            if(r.current.condition.text === 'Céu limpo'){
                box[3].style.display = 'block';
                box[3].classList.add('cloudy');
                box[3].children[0].classList.add('cloud');
                box[3].children[1].innerText = r.location.name;
                box[3].children[2].innerText = r.current.temp_c + '°';
               
            }

            if(r.current.condition.text === 'Chuva moderada ou forte com trovoada'){
                box[3].style.display = 'block';
                box[3].classList.add('breezy');
                box[3].children[0].classList.add('cloudr');
                box[3].children[1].innerText = r.location.name;
                box[3].children[2].innerText = r.current.temp_c + '°';
            }
    
            })
    }

    campoGrande();
    dourados();
    coxim();
    portoMurtinho();

}

boxCidades();

setInterval(()=>{
    boxCidades();
}, 50000)



const btn = document.querySelector('#btn-search');
function changeWeather(event){
    event.preventDefault();
    const search = document.querySelector('.container .box-1 #search').value;
    console.log(search);
    const url = ' https://api.weatherapi.com/v1/forecast.json?key=86a989715fc84969a4640123212511&q='+search+'&lang=pt&alerts=yes&aqi=yes';

    const options = {
        method: 'GET',
    }

    const temp = fetch(url, options);
    temp.then(r=>{
        return r.json();
    }).then(r=>{
        console.log(r);
        var cou_res = document.querySelector('.box-3 .loc #cou-res').value = r.location.country;
        var reg_res = document.querySelector('.box-3 .loc #reg-res').value = r.location.region;
        var city_res = document.querySelector('.box-3 .loc #city-res').value = r.location.name;
        var local_res = document.querySelector('.box-3 .loc #local-res').value = r.location.localtime;
        var cel_res = document.querySelector('.box-4 .cond #cel-res').value = r.current.temp_c + '°';
        var far_res = document.querySelector('.box-4 .cond #far-res').value = r.current.temp_f + '°';
        var hum_res = document.querySelector('.box-4  #hum-res').value = r.current.humidity + '%';
        var vel_vento = document.querySelector('.box-4 #vel_vento').value = r.current.wind_kph + ' kph';
        var sens_term = document.querySelector('.box-4 #sens_term').value = r.current.feelslike_c + '°';
        var co = document.querySelector('.container .box-4 .quali-ar #co').value = r.current.air_quality.co;
        var no2 = document.querySelector('.container .box-4 .quali-ar #no2').value = r.current.air_quality.no2;
        var o3 = document.querySelector('.container .box-4 .quali-ar #o3').value = r.current.air_quality.o3;
        var so2 = document.querySelector('.container .box-4 .quali-ar #so2').value = r.current.air_quality.so2;
        var alerts = document.querySelector('.container .box-3 .loc #alertas');
       
      
        console.log(co);
        //= document.querySelector('.box-2').innerHTML = '<img src="'+ r.current.condition.icon + '"/>';

        var box_2 = document.querySelectorAll('.box-2 .background div'); 
        var box_principal = document.querySelectorAll('.box-2 .background'); 

        if(r.current.condition.text === 'Parcialmente nublado'){
            box_2.forEach((item)=>{
                item.style.display = 'none';
            })
            box_2[2].style.display = 'block';
            box_2[2].children[1].innerText =  r.location.name;
            box_2[2].children[2].innerText = r.current.temp_c + '°';
            box_2[2].children[3].innerText =  r.current.condition.text;
            
           
        }

        if(r.current.condition.text === 'Sol'){
            box_2.forEach((item)=>{
                item.style.display = 'none';
            })
            box_2[0].style.display = 'block';
            box_2[0].children[2].innerText =  r.location.name;
            box_2[0].children[3].innerText = r.current.temp_c + '°';
            box_2[0].children[4].innerText = r.current.condition.text;
           
        }

        if(r.current.condition.text === 'Céu limpo'){
            box_2.forEach((item)=>{
                item.style.display = 'none';
            })
            box_2[1].style.display = 'block';
            box_2[1].children[2].innerText =  r.location.name;
            box_2[1].children[4].innerText = r.current.condition.text;
            box_2[1].children[3].innerText = r.current.temp_c + '°';
    
        }

        if(r.current.condition.text === 'Chuva moderada ou forte com trovoada'){
            box_2.forEach((item)=>{
                item.style.display = 'none';
            })
            box_2[3].style.display = 'block';
            box_2[3].children[1].innerText =  r.location.name;
            box_2[3].children[2].innerText = r.current.temp_c + '°';
            box_2[3].children[3].innerText = r.current.condition.text;
        }

        if(r.current.condition.text === 'Chuva fraca' || r.current.condition.text === 'Chuva fraca irregular' || r.current.condition.text === 'Chuva moderada'  || r.current.condition.text === 'Chuva fraca com neve'){
            box_2.forEach((item)=>{
                item.style.display = 'none';
            })
            box_2[4].style.display = 'block';
            box_2[4].children[1].innerText =  r.location.name;
            box_2[4].children[2].innerText = r.current.temp_c + '°';
            box_2[4].children[3].innerText = r.current.condition.text;
        }
        
        
        if(r.current.condition.text === 'Nevoeiro' || r.current.condition.text === 'Queda de neve irregular e fraca' || r.current.condition.text === 'Queda de neve moderada'){
            box_2.forEach((item)=>{
                item.style.display = 'none';
            })
            box_2[5].style.display = 'block';
            box_2[5].children[3].innerText =  r.location.name;
            box_2[5].children[4].innerText = r.current.temp_c + '°';
            box_2[5].children[5].innerText = r.current.condition.text;
        }


    })
}


btn.addEventListener('click', changeWeather);


function acionaPrincipal(){
    var box_2 = document.querySelectorAll('.box-2 .background div'); 
    box_2[2].style.display = 'block';

}

window.addEventListener('load', acionaPrincipal);






