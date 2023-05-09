
let page = document.getElementsByTagName("body")[0];
let clock = document.createElement("div");
clock.className = "CL-clock";
page.appendChild(clock);
let startTimer = setInterval(updateTime, 1000);


clock.addEventListener("mouseover", function() {
    clock.classList.add("CL-shrink");
    setTimeout(function() {
        clock.classList.remove("CL-shrink");
    }, 1000);

 
});


async function handleVisibilityChange() {
    if (document.visibilityState === "visible") {
      startTimer = setInterval(() => updateTime(), 1000);

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      ); //remove event listener to avoid multiple executions
    } else {
      clearInterval(startTimer);
    }
  }





  document.addEventListener("visibilitychange", handleVisibilityChange);
function updateTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    console.log('options', options)
    const time = now.toLocaleTimeString([], options);
  clock.innerHTML = '<p class="CL-innerText">' + time.replace(/(\d+:\d+):(\d+)/, '$1<span class="CL-seconds">$2</span>') + '</p>'; ;
}


