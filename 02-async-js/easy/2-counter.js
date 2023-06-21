let count = 0;

function timer() {
  count++;
  console.log(count);
  setTimeout(timer, 2000);
}

timer();
