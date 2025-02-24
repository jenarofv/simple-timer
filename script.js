const sayHi = () => {
  alert('Time\'s up!');
}

const getTotalTime = () => {
  const hours = document.getElementById("hours").value;
  const minutes = document.getElementById("minutes").value;
  const seconds = document.getElementById("seconds").value;

  if (
      (0 <= hours & hours <= 24 ) |
      (0 <= minutes & minutes <= 60 ) |
      (0 <= seconds & seconds <= 60 )
    ) {
    window.alert(
      "Hours, minutes or seconds value outside allowed values"
    );
    return null;
  }
  const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
  const totalTime = totalTimeInSeconds * 1000;
  return totalTime;
}

const sendNotification = () => {
  const timeToWait = getTotalTime();
  if (timeToWait === null) {
    return;
  } else {
    setTimeout(sayHi, timeToWait);
  }
}

const timerButton = document.getElementById("timerButton");
timerButton.addEventListener('click', sendNotification);
