export default function male_bath_2(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/male/2.jpg"  //  mobile
        : "low_img/male/2.jpg";    //  desktop

    return {
        title: "BAÑO MASCULINO - TAQUILLAS",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
             {
                pitch: -9,
                yaw: -179,
                type: "scene",
                sceneId: "male_bath_1",
                createTooltipFunc: hotspot
            },
            {
                pitch: -16,
                yaw: -91,
                type: "scene",
                sceneId: "male_bath_3",
                createTooltipFunc: hotspot
            }
        ]
    };
}
