export default function washing_path(hotspot) {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/1B.jpg"  //  mobile
        : "low_img/1B.jpg";    //  desktop

    return {
        title: "HABITACIÓN LAVADO - CAMINO",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
            {
                pitch: -10,
                yaw: 0.6,
                type: "scene",
                sceneId: "washing_door",
                createTooltipFunc: hotspot
            },

            {
                pitch: -15,
                yaw: -179,
                type: "scene",
                sceneId: "garage",
                createTooltipFunc: hotspot
            }
        ]
    };
}
