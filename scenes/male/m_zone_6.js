export default function male_bath_6(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/male/6.jpg"  //  mobile
        : "low_img/male/6.jpg";    //  desktop

    return {
        title: "BAÑO MASCULINO - 6",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
             {
                pitch: -19,
                yaw: -1,
                type: "scene",
                sceneId: "male_bath_4",
                createTooltipFunc: hotspot
            },
            {
                pitch: -24,
                yaw: 178,
                type: "scene",
                sceneId: "male_bath_3",
                createTooltipFunc: hotspot
            },
        ]
    };
}
