
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');
var button = document.querySelectorAll('button');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
})

button.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
})



// add current year
function setYearForCopyright(){
    const currentYearElem = document.getElementById("currentYear")

    const year = new Date().getFullYear()
    currentYearElem.innerText = year;
}
setYearForCopyright();


// nav full screen open btn
function openFullScreenNav() {
    const navFullScreen = document.getElementById("navFullScreen")
    
    navFullScreen.classList.remove("nav-fullscreen-close")
    navFullScreen.classList.add("nav-fullscreen-open")
}
function closeFullScreenNav() {
    const navFullScreen = document.getElementById("navFullScreen")
    navFullScreen.classList.add("nav-fullscreen-close")
    navFullScreen.classList.remove("nav-fullscreen-open")
    
}

  const macbook = document.querySelector('.macbook');
  const container = document.querySelector('.container');

  container.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;  // Horizontal rotation
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25; // Vertical rotation

    macbook.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;  // Apply rotation based on mouse position
  });

  // Reset the rotation when the mouse leaves the container
  container.addEventListener('mouseleave', () => {
    macbook.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
