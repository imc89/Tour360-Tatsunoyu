export default function washing_inside_1(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/3B.jpg"  //  mobile
        : "low_img/3B.jpg";    //  desktop

    return {
        title: "HABITACIÓN LAVADO - INTERIOR",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
            {
                pitch: -21,
                yaw: -176,
                type: "scene",
                sceneId: "washing_door",
                createTooltipFunc: hotspot
            },
            {
                pitch: -24,
                yaw: -1,
                type: "scene",
                sceneId: "washing_inside_2",
                createTooltipFunc: hotspot
            },
            {
                pitch: -31,
                yaw: -90,
                type: "scene",
                sceneId: "washing_inside_4",
                createTooltipFunc: hotspot
            }

        ]
    };
}
