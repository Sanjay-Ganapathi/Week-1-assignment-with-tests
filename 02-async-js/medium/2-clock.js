function counter1() {
  setInterval(() => {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let formattedHour = hour < 10 ? `0${hour}` : hour;
    let formattedMinute = minute < 10 ? `0${minute}` : minute;
    let ampm = hour < 12 ? "AM" : "PM";
    hour = hour % 12;
    hour = hour ? hour : 12;
    console.log(
      `Counter 1 Time: ${formattedHour}:${formattedMinute}:${second} ${ampm}`
    );
  }, 1000);
}

function counter2() {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let formattedHour = hour < 10 ? `0${hour}` : hour;
  let formattedMinute = minute < 10 ? `0${minute}` : minute;
  let ampm = hour < 12 ? "AM" : "PM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  console.log(
    `Counter 2 Time:  ${formattedHour}:${formattedMinute}:${second} ${ampm}`
  );

  setTimeout(counter2, 1000);
}
counter1();

counter2();
