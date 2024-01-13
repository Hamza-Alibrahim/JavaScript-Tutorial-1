let div = document.querySelector(".slider-container");
div.children[0].innerHTML = "Slide #1 of 5";
let img = document.getElementsByTagName("img");
img[0].className = "active";
let bullets = document.getElementById("indicators");
let ul = document.createElement("ul");
for (let i = 0; i < 5; i++) {
    let li1 = document.createElement("li");
    li1.innerHTML = i + 1;
    ul.appendChild(li1);
}
ul.children[0].className = "active";
bullets.appendChild(ul);
let li = document.getElementsByTagName("li");
let pre = document.getElementById("prev");
pre.classList.add("disabled");
let next = document.getElementById("next");
pre.onclick = function () {
    if (!pre.classList.contains("disabled")) {
        for (let i = img.length - 1; i >= 0; i--) {
            if (img[i].className === "active") {
                let x = i - 1;
                img[i].classList.remove("active");
                li[i].classList.remove("active");
                img[x].classList.add("active");
                li[x].classList.add("active");
                div.children[0].innerHTML = `Slide #${x + 1} of ${img.length}`;
                if (x == 0) {
                    pre.classList.add("disabled");
                }
                if (next.classList.contains("disabled")) {
                    next.classList.remove("disabled");
                }
                break;
            }
        }
    }
}
next.onclick = function () {
    if (!next.classList.contains("disabled")) {
        for (let i = 0; i <= img.length - 1; i++) {
            if (img[i].className === "active") {
                let x = i + 1;
                img[i].classList.remove("active");
                li[i].classList.remove("active");
                img[x].classList.add("active");
                li[x].classList.add("active");
                div.children[0].innerHTML = `Slide #${x + 1} of ${img.length}`;
                if (x == img.length - 1) {
                    next.classList.add("disabled");
                }
                if (pre.classList.contains("disabled")) {
                    pre.classList.remove("disabled");
                }
                break;
            }
        }
    }
}
ul.onmouseenter = function () {
    for (let i = 0; i < 5; i++) {
        ul.children[i].onclick = function () {
            for (let i = 0; i <= img.length - 1; i++) {
                img[i].classList.remove("active");
                li[i].classList.remove("active");
                let x = this.textContent;
                if (x == 5) {
                    next.classList.add("disabled");
                    pre.classList.remove("disabled");
                } else if (x == 1) {
                    pre.classList.add("disabled");
                    next.classList.remove("disabled");
                } else {
                    pre.classList.remove("disabled");
                    next.classList.remove("disabled");
                }
                img[x - 1].classList.add("active");
                li[x - 1].classList.add("active");
                div.children[0].innerHTML = `Slide #${+x} of ${img.length}`;
            }
        }
    }
}
