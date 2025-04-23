export default function bath_path(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/3A.jpg"  //  mobile
        : "low_img/3A.jpg";    //  desktop

    return {
        title: "BAÑO - CAMINO",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
            {
                pitch: -13,
                yaw: 0,
                type: "scene",
                sceneId: "bath_door",
                createTooltipFunc: hotspot
            },
            {
                pitch: -14,
                yaw: -175,
                type: "scene",
                sceneId: "garage",
                createTooltipFunc: hotspot
            }
        ]
    };
}
