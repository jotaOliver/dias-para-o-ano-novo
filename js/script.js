import Countdown from './countdown.js';

const diasAnoNovo = new Countdown('31 December 2020 23:59:59 GMT-0300','#dias','#horas','#minutos','#segundos');
diasAnoNovo.totalContador();
setInterval(()=>{
    diasAnoNovo.totalContador();
}, 1000);
