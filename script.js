// script.js
function updateStatus() {
  const start = document.getElementById('startTime').value;
  const end = document.getElementById('endTime').value;
  const statusBox = document.getElementById('status');

  const now = new Date();
  const [startH, startM] = start.split(':').map(Number);
  const [endH, endM] = end.split(':').map(Number);

  const startTime = new Date(now);
  startTime.setHours(startH, startM, 0);

  const endTime = new Date(now);
  endTime.setHours(endH, endM, 0);

  if (endTime < startTime) endTime.setDate(endTime.getDate() + 1); // handles overnight fasting

  const isEating = now >= startTime && now <= endTime;

  statusBox.innerText = isEating
    ? "You're in your eating window 🍽️"
    : "You're fasting ⏳";
}

// Automatically check every minute
setInterval(updateStatus, 60 * 1000);
window.onload = updateStatus;
