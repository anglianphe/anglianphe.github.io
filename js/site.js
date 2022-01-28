function addMenuClickHandlers() {
    var sidenavElement = document.getElementById('sidenav');
    document.getElementById('sidenavOpenButton').addEventListener('click', function(){
        sidenavElement.classList.remove('vtoggler-hide');
        sidenavElement.classList.add('vtoggler-show');
    });
    document.getElementById('sidenavCloseButton').addEventListener('click', function(){
        sidenavElement.classList.add('vtoggler-hide');
        sidenavElement.classList.remove('vtoggler-show');
    });
}

if (document.readyState === 'complete') {
    addMenuClickHandlers();
}
else {
    document.addEventListener('DOMContentLoaded', function () {
        addMenuClickHandlers();
    });
}