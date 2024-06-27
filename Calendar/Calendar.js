const date = document.getElementById("date");
        const day = document.getElementById("day");
        const month = document.getElementById("month");
        const year = document.getElementById("year");

        const today = new Date();
        // console.log(today);
        const weekDays = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];


        date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();////if the date is less than 10 means 8 it will add 0 result will 08 
        // day.innerHTML = today.getDay();

        day.innerHTML = weekDays[today.getDay()];
        month.innerHTML = monthNames[today.getMonth()];
        year.innerHTML = today.getFullYear();