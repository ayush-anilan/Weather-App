(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");if(n.length)for(var c=n.length-1;c>-1&&!t;)t=n[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"058d1121e95348721a5e.png",r=e.p+"3ec9fceeaf172ea8b31f.png",n=(e.p,document.querySelector(".search input")),c=document.querySelector(".search button"),o=document.querySelector(".weather-icon");c.addEventListener("click",(()=>{!async function(e){const n=await fetch("http://api.weatherapi.com/v1/current.json?key=4d337d5311b94690bbe164121230508&q="+e);if(400==n.status)document.querySelector(".error").style.display="block",document.querySelector(".weather").style.display="none";else{var c=await n.json();console.log(c),document.querySelector(".city").innerHTML=c.location.name,document.querySelector(".temp").innerHTML=Math.round(c.current.temp_c)+"°C",document.querySelector(".humidity").innerHTML=c.current.humidity+"%",document.querySelector(".wind").innerHTML=c.current.wind_kph+" km/h","Partly cloudy"==c.current.condition.text?o.src=t:("Sunny"==c.current.condition.text||"Clear"==c.condition.text||(c.current.condition.text="Mist"))&&(o.src=r),document.querySelector(".weather").style.display="block",document.querySelector(".error").style.display="none"}}(n.value)}))})();