export default function male_bath_4(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/male/4.jpg"  //  mobile
        : "low_img/male/4.jpg";    //  desktop

    return {
        title: "BAÑO MASCULINO - 4",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
             {
                pitch: -22,
                yaw: -178.5,
                type: "scene",
                sceneId: "male_bath_3",
                createTooltipFunc: hotspot
            },
            {
                pitch: -4,
                yaw: -89.5,
                type: "scene",
                sceneId: "male_bath_5",
                createTooltipFunc: hotspot
            }
        ]
    };
}
