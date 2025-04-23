export default function washing_inside_3(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/5B.jpg"  //  mobile
        : "low_img/5B.jpg";    //  desktop

    return {
        title: "HABITACIÓN LAVADO - INTERIOR",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
            {
                pitch: -31,
                yaw: -86,
                type: "scene",
                sceneId: "washing_inside_4",
                createTooltipFunc: hotspot
            },
            {
                pitch: -27,
                yaw: -177,
                type: "scene",
                sceneId: "washing_inside_2",
                createTooltipFunc: hotspot
            }
        ]
    };
}
