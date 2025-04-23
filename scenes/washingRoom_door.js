export default function washing_door(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/2B.jpg"  //  mobile
        : "low_img/2B.jpg";    //  desktop


    return {
        title: "HABITACIÓN LAVADO - PUERTA ",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
            {
                pitch: -13,
                yaw: 179,
                type: "scene",
                sceneId: "washing_path",
                createTooltipFunc: hotspot
            },
            {
                pitch: -29,
                yaw: 0.2,
                type: "scene",
                sceneId: "washing_inside_1",
                createTooltipFunc: hotspot
            }
        ]
    };
}
