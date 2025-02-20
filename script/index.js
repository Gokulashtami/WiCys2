gsap.registerPlugin(ScrollTrigger);

gsap.set('.fixed', {
    transformOrigin: '50% 0%'
});

gsap.to('.fixed', {
    scale: 0.5,
    yPercent: -10,
    opacity: 0,
    scrollTrigger: {
        trigger: '.first-section',
        start: 'top top',
        end: 'bottom 50%',
        scrub: 0.5
    }
});
