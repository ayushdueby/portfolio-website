var tl = gsap.timeline();
var a = 0;
function percentage() {
    setInterval(function () {
        a = a + Math.floor(Math.random() * 15);
        if (a < 100) {
            document.querySelector(".loader h1").innerHTML = a + "%";
        }

        else {
            a = 100;
            document.querySelector(".loader h1").innerHTML = a + "%";
        }

    }, 75);


}
tl.to(".loader h1",
    {
        durations: 0.5,
        delay: 1.5,
        onStart: percentage(),
    })

tl.to(".loader h1",
    {
        fontSize: "30px",
    })
tl.to(".loader",
    {

        top: "1%",
        left: "10%",
        rotate: "360deg",
        borderRadius: "30%",
        width: "100px",
        height: "100px",
        durations: 1.5,
        delay: 0.5,
        padding: "15px",
        backgroundColor: "navy",
        color: "white",
        text: "AYUSH", fontSize: "30px", fontWeight: "bold", border: "5px solid white",
        position: "absolute",

    })
tl.to(".loader2 h1",
    {
        durations: 0.5,

    })

tl.to(".loader2 h1",
    {
        fontSize: "30px",
    })
tl.to(".loader2",
    {

        top: "1%",
        left: "80%",
        rotate: "360deg",
        borderRadius: "30%",
        width: "100px",
        height: "100px",
        durations: 1.5,
        delay: 0.5,
        padding: "15px",
        backgroundColor: "navy",
        color: "white",
        fontSize: "30px",
        fontWeight: "bold", border: "5px solid white",
        zIndex: 0,
        position: "absolute",
        // Text:"hello"

    })
tl.from(".heading ",
    {
        scale: 20,
        opacity: 0,
        durations: 1.5,
        delay: 0.5,
        zIndex: 0,
    })
tl.to(".heading ",
    {
        scale: 1,
        opacity: 1,
        durations: 1.5,
        delay: 0.5,

    })
tl.from(".photo", {
    duration: 0.5,
    ease: "power1.out",
    scale: 0.1,
    y: -50,
    opacity: 0,
});
var i = 1;
while (i--) {
    tl.to(".photo", {
        duration: 0.5,
        ease: "power1.out",
        y: -50,
        // opacity:0,
    });
    tl.to(".photo", {
        duration: 0.5,
        ease: "power1.out",
        y: 0,
    });
}
tl.to(".photo", {
    duration: 0.5,
    ease: "power1.out",
    y: 0,
});
tl.to(".photo", {
    duration: 0.5,
    boxShadow:"0 0 30px 10px #fff, 0 0 100px 30px #000080, 0 0 80px 50px #000080", 
});
tl.to(".box",
    {
        duration: 0.5,
        scale: 2,
        opacity: 1,
    })
tl.from(".box",
    {
        duration: 0.5,
        scale: 1,
    })
gsap.from(".box1,.a,.b",
    {
        duration: 1.5,
        height:0,
        opacity:0,
        scrollTrigger: 
        {
            trigger:".box1",
            scroller:"body",
            start:"top 70%"
        },
        scrub: true,
    })





