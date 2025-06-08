function updateStatus() {
  const start = document.getElementById('startTime').value;
  const end = document.getElementById('endTime').value;
  const statusText = document.getElementById('statusText');
  const statusCircle = document.getElementById('statusCircle');

  const now = new Date();
  const [startH, startM] = start.split(':').map(Number);
  const [endH, endM] = end.split(':').map(Number);

  const startTime = new Date(now);
  startTime.setHours(startH, startM, 0);

  const endTime = new Date(now);
  endTime.setHours(endH, endM, 0);

  if (endTime < startTime) endTime.setDate(endTime.getDate() + 1);

  const isEating = now >= startTime && now <= endTime;

  if (isEating) {
    statusText.innerText = "You're in your eating window 🍽️";
    statusCircle.style.background = "#4caf50"; // Green
  } else {
    statusText.innerText = "You're fasting ⏳";
    statusCircle.style.background = "#e53935"; // Red
  }
}

setInterval(updateStatus, 60 * 1000);
window.onload = updateStatus;
