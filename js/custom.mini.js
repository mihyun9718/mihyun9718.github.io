$(function () {
    const tl = gsap.timeline({
        repeat: -1
    });

    tl.to(`#gg02`, {
        motionPath: {
            path: `#path1`,
            align: `#path1`,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,

        },
        duration: 5,
        // delay: 5 * num,
    })
})