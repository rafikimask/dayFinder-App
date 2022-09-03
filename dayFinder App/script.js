
// connecting script to dom
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const getDay = document.getElementById("getDay");
// console.log(date, month);
const result = document.getElementById("result");

// breathing life into the date form, using eventListener for click and arrow function
getDay.addEventListener("click", () => {
    let dateObj = new Date(`${date.value} ${month.value} ${year.value}`);
    
    let day = dateObj.toString();
    day = day.slice(0, 3);

    // console.log(day);

    result.innerText = day;
})