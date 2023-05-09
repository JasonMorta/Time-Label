
let page = document.getElementsByTagName("body")[0];
let clock = document.createElement("div");
clock.className = "CL-clock";
page.appendChild(clock);

clock.addEventListener("mouseover", function() {
    // clock.classList.add("CL-shrink");
    // setTimeout(function() {
    //     clock.classList.remove("CL-shrink");
    // }, 1000);

 
});





function updateTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    console.log('options', options)
    const time = now.toLocaleTimeString([], options);
  clock.innerHTML = '<p class="CL-innerText">' + time.replace(/(\d+:\d+):(\d+)/, '$1<span class="CL-seconds">$2</span>') + '</p>'; ;


}
updateTime()
setInterval(updateTime, 1000);
