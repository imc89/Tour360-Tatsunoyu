export default function male_bath_5(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/male/5.jpg"  //  mobile
        : "low_img/male/5.jpg";    //  desktop

    return {
        title: "BAÑO MASCULINO - 5",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
             {
                pitch: -17,
                yaw: 180,
                type: "scene",
                sceneId: "male_bath_4",
                createTooltipFunc: hotspot
            }
        ]
    };
}
