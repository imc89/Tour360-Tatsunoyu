export default function initial(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/1A.jpg"  //  mobile
        : "low_img/1A.jpg";    //  desktop

    return {
        title: "ENTRADA",
        type: "equirectangular",
        panorama: panoramaPath,
        yaw: -3,
        hotSpots: [
            {
                pitch: -13,
                yaw: -3.072718226210974,
                type: "scene",
                sceneId: "garage",
                createTooltipFunc: hotspot
            }
        ]
    };
}