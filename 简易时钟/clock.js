window.onload = function () {
    function getTime() {
        var time = new Date();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var second = time.getSeconds();
        return {
            hour:hour,
            minute:minute,
            second : second
        }
    }
    var hourEle = document.getElementById("hour");
    var minEle = document.getElementById("minute");
    var secEle = document.getElementById("second");

    function appendToTime(type,ele) {
        ele.innerHTML ="";
        var hourNode = document.createElement("span");
        hourNode.innerHTML = (ele == document.getElementById("second") ? type  : type + ':');
        ele.appendChild(hourNode);
    }
    setInterval(function () {
        var clock = getTime();
        appendToTime(clock.hour,hourEle);
        appendToTime(clock.minute,minEle);
        appendToTime(clock.second,secEle);
    },1000);

}