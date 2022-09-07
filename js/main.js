// gsap.from('li', 
//     {
//         delay: 0.7,
//         duration:0.7, 
//         x:-40,
//         ease: "power2.out",
//         delay: 3,
//         stagger: 0.1
//     }
// )
// gsap.to('ul', 
//     {
//         delay: 0.7,
//         duration:0.7, 
//         x:-40,
//         ease: "power2.out",
//         delay: 3,
//         stagger: 0.1
//     }
// )

// gsap.fromTo(
//     'header', 
//     {x: -40}, 
//     {
//         x: 40,  
//         repeat: 2, 
//         duration: 0.5, 
//         ease: 'power2.inOut', 
//         yoyo: true,
//     }
// )

const timeline = gsap.timeline()

timeline

.from (
    'body',
    {
        backgroundColor: '#FFF',
        duration: 0.5,
    }
)
.from(
    'h1, .intro',
    {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        y: -100
    }
)

.from(
    'img, h2',
    {
        opacity: 0,
        x: -100,
    },
)

.fromTo(
    'li',
    {
        opacity: 0,
        y: -30,
        x: -100
    },
    {
        opacity: 1,
        y: 0,
        x: 0,
        stagger: 0.1,
        duration: 1,
    }
)

