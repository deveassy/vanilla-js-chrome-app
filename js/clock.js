const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // padStart()를 사용하기 위해서는 string형으로 변환이 필요함
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 페이지가 로드되자마자 처음에 함수 우선 실행 후 setInterval 1초간격으로 실행
setInterval(getClock, 1000);
