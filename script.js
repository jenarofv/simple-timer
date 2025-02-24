const sayHi = () => {
  alert('Time\'s up!');
}

const getTotalTime = () => {
  const hours = document.getElementById("hours").value;
  const minutes = document.getElementById("minutes").value;
  const seconds = document.getElementById("seconds").value;

  if (minutes > 60 | seconds > 60 | hours | 24) {
    window.alert(
      "Hours, minutes or seconds value outside boundaries"
    )
  }
  const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
  const totalTime = totalTimeInSeconds * 1000;
  return totalTime;
}

const sendNotification = () => {
  timeToWait = getTotalTime();
  setTimeout(sayHi, timeToWait);
}

const timerButton = document.getElementById("timerButton");
timerButton.addEventListener('click', sendNotification);
