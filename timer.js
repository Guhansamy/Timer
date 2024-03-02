var k = 0;
var k1 = 0;
var k2 = 0;

var tt = document.getElementById("num");
var tt1 = document.getElementById("num1");
var tt2 = document.getElementById("num2");
var flag = document.getElementById("flag");

var vv;

function inc() {
    vv = setInterval(() => {
        k++;
        tt.innerText = k.toString().padStart(2, "0");
        if (k === 60) {
            k1++;
            var yt = k1.toString().padStart(2, "0");
            tt1.innerHTML = yt;
            k = 0;
            k = k.toString().padStart(2, "0");

            if (k1 === 60) {
                k1 = 0;
                k1 = k1.toString().padStart(2, "0");
                k2++;
                var xt = k2.toString().padStart(2, "0");
                tt2.innerHTML = xt;
            }
        }
    }, 100);
    console.log(k);
}

function sto() {
    clearInterval(vv);  
}

function too() {
    k = 0;
    tt.innerText = k.toString().padStart(2, "0");
    tt1.innerText = k.toString().padStart(2, "0");
    tt2.innerText = k.toString().padStart(2, "0");

    var tbody = document.querySelector('.tbod');

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

function getCurrentTime() {
    return `${k2.toString().padStart(2, "0")}:${k1
        .toString()
        .padStart(2, "0")}:${k.toString().padStart(2, "0")}`;
}

var isStart = true;
function Starting() {
    var flagButton = document.getElementById("startButton");

    if (isStart) {
        flagButton.innerHTML = "Stop";

        console.log("hello");
        inc();
    } else {
        flagButton.innerHTML = "Start";

        console.log("Pudhusu");
        sto();
    }

    isStart = !isStart;
}

var tb = document.getElementsByClassName("tbod")[0];
var tr, td;

function flagFn() {
    tr = document.createElement("tr");
    td = document.createElement("td");

    td.innerHTML = getCurrentTime();
    tr.appendChild(td);

    tb.appendChild(tr);
}