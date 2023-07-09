const rem = document.getElementsByClassName(".home-educa");

try {
    var typed = new Typed(".home-educa",{
        strings:["A Front-end Developer.","A UI/UX Designer.", "A React Developer.", "A Technical Writer."],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true,
    })
} catch (error) {
    rem.innerText = "Front- end Developer."
}