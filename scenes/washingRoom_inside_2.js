export default function washing_inside_2(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/4B.jpg"  //  mobile
        : "low_img/4B.jpg";    //  desktop


    return {
        title: "HABITACIÓN LAVADO - INTERIOR",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
            {
                pitch: -26,
                yaw: -176,
                type: "scene",
                sceneId: "washing_inside_1",
                createTooltipFunc: hotspot
            },
            {
                pitch: -23,
                yaw: -86,
                type: "scene",
                sceneId: "washing_inside_3",
                createTooltipFunc: hotspot
            }
        ]
    };
}
