var menubutton = document.querySelector('.menubutton');
console.log(menubutton);

var sidebar = document.querySelector('.left-mid');
console.log(sidebar);

var smallSidebar = document.querySelector('.mid-mid');
console.log(smallSidebar);

var rightDiv = document.querySelector('.right-mid');
console.log(rightDiv);





menubutton.addEventListener('click', function () {
    sidebar.classList.toggle('hide-sidebar');
    smallSidebar.classList.toggle('show-small-sidebar');

    if(sidebar.classList.contains('hide-sidebar')) {
        rightDiv.style.width = '95%';
    } else {
        rightDiv.style.width = '85%';
    }
});  