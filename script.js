
    function light_night(){
        let imagen = document.getElementById("img");
        imagen.src = "/imgs/big-ben-night.jpg";
        let light = document.getElementById("container");
        let paragrafos = document.getElementsByClassName("formContainer")[0];
        let i1 = document.getElementsByClassName("inputs")[0];
        let i2 = document.getElementsByClassName("inputs")[1];
        let i3 = document.getElementsByClassName("inputs")[2];
        let send = document.getElementsByClassName("send")[0];
        paragrafos.style.color = "bisque";
        i1.style.backgroundColor = "bisque";
        i2.style.backgroundColor = "bisque";
        i3.style.backgroundColor = "bisque";
        send.style.backgroundColor = "bisque";
        send.style.color = "#000000";
        light.style.backgroundColor = "black";



    }


    function light_day(){
        let imagen = document.getElementById("img");
        imagen.src = "/imgs/big_ben.png";
        let light = document.getElementById("container");
        let paragrafos = document.getElementsByClassName("formContainer")[0];
        let i1 = document.getElementsByClassName("inputs")[0];
        let i2 = document.getElementsByClassName("inputs")[1];
        let i3 = document.getElementsByClassName("inputs")[2];
        let send = document.getElementsByClassName("send")[0];
        paragrafos.style.color = "black";
        i1.style.backgroundColor = "bisque";
        i2.style.backgroundColor = "bisque";
        i3.style.backgroundColor = "bisque";
        send.style.backgroundColor = "black";
        send.style.color = "white";
        light.style.backgroundColor = "bisque";
    }


