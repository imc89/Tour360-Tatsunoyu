export default function washing_inside_4(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/6B.jpg"  //  mobile
        : "low_img/6B.jpg";    //  desktop

    return {
        title: "HABITACIÓN LAVADO - INTERIOR",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
            {
                pitch: -32,
                yaw: -90,
                type: "scene",
                sceneId: "washing_inside_1",
                createTooltipFunc: hotspot
            },
            {
                pitch: -32,
                yaw: -180,
                type: "scene",
                sceneId: "washing_inside_3",
                createTooltipFunc: hotspot
            }
        ]
    };
}
