var fecha = new Date();

console.log(
        fecha + '\n\n',
        fecha.getDate() + '\n\n', //Devuelve el día del mes
        fecha.getDay() + '\n\n',   //Devuelve el día de la semana -> 0 domingo - 6 sábado
        fecha.getMonth() + '\n\n',  //0 enero - 11 diciembre
        fecha.getFullYear() + '\n\n', //Devuelve el año actual
        new Date(2018, 11, 25) + '\n\n', //11 corresponde con diciembre (orden en el array)
        fecha.getHours() + '\n\n',
        fecha.getMinutes() + '\n\n',
        fecha.getSeconds() + '\n\n',
        fecha.getMilliseconds() + '\n\n',
        fecha.toString() + '\n\n',
        fecha.toDateString() + '\n\n',
        fecha.toLocaleString() + '\n\n',
        fecha.toLocaleDateString() + '\n\n',
        fecha.toLocaleTimeString() + '\n\n',
        fecha.getTimezoneOffset() + '\n\n', //Diferencia en minutos con respecto al meridiano de Greenwich (zona horaria)
        fecha.getTimezoneOffset() + '\n\n',
        fecha.toUTCString() + '\n\n',
        fecha.getUTCDate() + '\n\n', 
        fecha.getUTCDay() + '\n\n',
        fecha.getUTCMonth() + '\n\n',
        fecha.getUTCFullYear() + '\n\n',
        fecha.getUTCHours() + '\n\n',
        fecha.getUTCMinutes() + '\n\n',
        fecha.getUTCSeconds() + '\n\n',
        fecha.getUTCMilliseconds() + '\n\n',
        Date.now() + '\n\n',
        fecha.valueOf()
        );

