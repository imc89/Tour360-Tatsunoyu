export default function bath(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/1C.jpg"  //  mobile
        : "low_img/1C.jpg";    //  desktop

    return {
        title: "TATSUNOYU BATH - INTERIOR",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
            {
                pitch: -11,
                yaw: -177,
                type: "scene",
                sceneId: "bath_door",
                createTooltipFunc: hotspot
            },
            {
                pitch: -10,
                yaw: -91,
                type: "scene",
                sceneId: "male_bath_1",
                createTooltipFunc: hotspot
            }
        ]
    };
}
