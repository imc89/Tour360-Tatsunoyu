export default function male_bath_1(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/male/1.jpg"  //  mobile
        : "low_img/male/1.jpg";    //  desktop


    return {
        title: "BAÑO MASCULINO - ENTRADA",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
             {
                pitch: -1,
                yaw: 94,
                type: "scene",
                sceneId: "male_bath_2",
                createTooltipFunc: hotspot
            },
            {
                pitch: -24,
                yaw: 179,
                type: "scene",
                sceneId: "bath",
                createTooltipFunc: hotspot
            }
        ]
    };
}
