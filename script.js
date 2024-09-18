document.getElementById("calculate").addEventListener("click", () => {
    const distance = document.getElementById("distance").value;
    const time = document.getElementById("time").value;
    // console.log(distance)
    // console.log(time)

    const speed = distance / (time / 60);

    document.getElementById("output").innerHTML = 'Din hastighed er ' + speed + ' km/t';
})