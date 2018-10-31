function loadEvents(times) {
    
    var i;
    for (i=0; i<times;i++) {
    //var evento = document.createElement('div').classList.add("event");
    var box = document.getElementById("events-container");
    //box.append(evento);
    box.innerHTML += '<div class="event">Title</div>'
    }

    console.log(times);
}