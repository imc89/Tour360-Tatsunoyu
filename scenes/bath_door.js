export default function bath_door(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/4A.jpg"  //  mobile
        : "low_img/4A.jpg";    //  desktop

    return {
        title: "TATSUNOYU BATH",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
            {
                pitch: -14.5,
                yaw: -176,
                type: "scene",
                sceneId: "bath_path",
                createTooltipFunc: hotspot
            },
            {
                pitch: -20,
                yaw: 0,
                type: "scene",
                sceneId: "bath",
                createTooltipFunc: hotspot
            },
        ]
    };
}
