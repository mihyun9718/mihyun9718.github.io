$(function () {
    const tl = gsap.timeline({
        repeat: -1
    });

    tl.to(`#earthicon02`, {
        motionPath: {
            path: `#path1`,
            align: `#path1`,
            alignOrigin: [0.5, 0.7],
            autoRotate: true,

        },
        duration: 6,
        // delay: 5 * num,
    })
})
