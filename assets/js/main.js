// dark mode,light mode
const modeBtn = document.querySelector("#toggleB");

// change dark
const changeDark = () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark')
}

// change light
const changeLight = () => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light')
}
modeBtn.addEventListener("click", () => {
    let theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        changeLight()
    } else {
        changeDark()
    }
});

let theme = localStorage.getItem('theme');
if (theme === "dark") {
    changeDark();
    modeBtn.setAttribute("checked", "checked");
} else {
    changeLight();
}



// loader
const loading = document.querySelector(".loading");
window.addEventListener("load", () => {
    loading.style.display = "none";
});

const menuBar = document.getElementById("menuBar");
const menus = document.getElementById("menu");
const menuCloase = document.getElementById("close");

menuBar.addEventListener("click", () => {
    menus.style.left = "0";
});

menuCloase.addEventListener("click", () => {
    menus.style.left = "100%";
});



//waypoint
const navbarSlide = document.querySelector(".navbar-slide");

var waypoint = new Waypoint({
    element: document.getElementById("chat"),
    handler: function(direction) {
        if (direction === "down") {
            navbarSlide.classList.add(
                "fixed",
                "w-full",
                "animate__fadeInDown",
                "shadow-lg",
                "z-10"
            );
        } else {
            navbarSlide.classList.remove(
                "fixed",
                "shadow-lg",
                "w-full",
                "animate__fadeInDown",
                "z-10"
            );
        }
    },
    offset: "75%",
});

const navLinks = document.querySelectorAll(".nav-link");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
        menus.style.left = "100%";
    });
}



// Nav Scroll Active link
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Document ထဲမှာရှိသမျှ section အားလုံးကို select လုပ်ထားပါတယ်။
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    // Browser ကို Scroll ဆွဲလိုက်တဲ့အခါ Scroll ရောက်နေတဲ့ Height ကိုရရှိနေမှာဖြစ်ပါတယ်။
    const scrollY = window.pageYOffset; // scroll height

    // forEach နဲ့ ရှိသမျှ section အကုန်လုံးကို loop လုပ်လိုက်တာဖြစ်ပါတယ်။
    // current.offsetHeight လက်ရှိရောက်နေတဲ့ section ရဲ့ Height ကို ရယူလိုက်တာပါ။
    // current.offsetTop - 58 လက်ရှိရောက်နေတဲ့ section ရဲ့ Top ကို ရယူလိုက်တာပါ။
    // current.getAttribute("id") လက်ရှိရောက်နေတဲ့ section ရဲ့ id ကို ရယူလိုက်တာပါ။
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight, // get current height
            sectionTop = current.offsetTop - 58, // get current section of height
            sectionId = current.getAttribute("id"); // get current section id

        // scrollyY သည် sectionTop ထက်ကြီးနေတယ်ဆိုရင် True အနေနဲ့ သတ်မှတ်မှာဖြစ်ပြီး
        // လက်ရှိရောက်နေတဲ့ section ရဲ့ Top နဲ့ လက်ရှိရောက်နေတဲ့ section ရဲ့ Height နှစ်ခုကိုပေါင်းပြီး
        // scrollyY သည် ငယ်နေတယ်(သို့) ညီနေတယ်ဆိုရင် True ကိုရရှိမှာပါ။
        // && သည် Comparsion Operator ဖြစ်ပြီး နှင်းယှဉ်ထားတဲ့ တန်ဖိုးနှစ်ခုလုံး True && True ဖြစ်မှသာ
        // if statement ကိုအလုပ်လုပ်မှာဖြစ်ပါတယ်။ နှိုင်းယှဉ်လိုက်တဲ့ တန်ဖိုးက false ဖြစ်နေလျှင် else ကို အလုပ်လုပ်သွားမှာဖြစ်ပါတယ်။
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector("a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector("a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
// function သည် ကြေညာလိုက်ရုံနဲ့ အလုပ်မလုပ်ပါဘူး။
// သူ့ကို ပြန်ခေါ်သုံးမှသာ အလုပ်လုပ်တာဖြစ်ပါတယ်။
// ဒါကြောင့် Browser ကို Scroll လုပ်လိုက်လျှင် scrollActive ကို အလုပ်လုပ်ပေးပါလို့ပြောလိုက်ခြင်းဖြစ်ပါတယ်။
window.addEventListener("scroll", scrollActive);


// scroll reveal
ScrollReveal().reveal(".headline", {
    delay: 500,
    origin: "bottom",
    distance: "50px",
    interval: 200,
    scale: 0.85,
    reset: true,
});