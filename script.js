

const btn = document.querySelector('#btn-search');
function changeWeather(event){
    event.preventDefault();
    const search = document.querySelector('.container .form-background #search').value;
    const url = ' http://api.weatherapi.com/v1/current.json?key=86a989715fc84969a4640123212511&q='+search+'&lang=pt';

    const options = {
        method: 'GET',
        
    }

    const temp = fetch(url, options);
    temp.then(r=>{
        return r.json();
    }).then(r=>{
        console.log(r);
        var cou_res = document.querySelector('.section-search .loc #cou-res').value = r.location.country;
        var reg_res = document.querySelector('.section-search .loc #reg-res').value = r.location.region;
        var city_res = document.querySelector('.section-search .loc #city-res').value = r.location.name;
        var local_res = document.querySelector('.section-search .loc #local-res').value = r.location.localtime;
        var cel_res = document.querySelector('.section-search .cond #cel-res').value = r.current.temp_c + '°';
        var far_res = document.querySelector('.section-search .cond #far-res').value = r.current.temp_f + '°';
        var hum_res = document.querySelector('.section-search .cond #hum-res').value = r.current.humidity + '%';
        var img_cond = document.querySelector('.img-condition').innerHTML = '<img src="'+ r.current.condition.icon + '"/>';
        if(r.current.temp_c <= 20 && r.current.temp_c > 0){
            var cor = document.querySelector('.color-background .background').classList.add('ativo3');
        }
        if(r.current.temp_c > 20 && r.current.temp_c < 30){
            var cor = document.querySelector('.color-background .background').classList.add('ativo1');
        }
        if(r.current.temp_c >= 30){
            var cor = document.querySelector('.color-background .background').classList.add('ativo2');
        }

        if(r.current.temp_c <= 0){
            var cor = document.querySelector('.color-background .background').classList.add('ativo4');
        }

        if(r.current.temp_c >= 35 &&  r.current.temp_c < 40){
            var cor = document.querySelector('.color-background .background').classList.add('ativo5');
        }
    })
}


btn.addEventListener('click', changeWeather);



