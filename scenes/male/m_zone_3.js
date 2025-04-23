export default function male_bath_3(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/male/3.jpg"  //  mobile
        : "low_img/male/3.jpg";    //  desktop

    return {
        title: "BAÑO MASCULINO - 3",
        type: "equirectangular",
        panorama: panoramaPath,
        hotSpots: [
             {
                pitch: -22,
                yaw: -178,
                type: "scene",
                sceneId: "male_bath_2",
                createTooltipFunc: hotspot
            },
            {
                pitch: -24,
                yaw: -1,
                type: "scene",
                sceneId: "male_bath_4",
                createTooltipFunc: hotspot
            },
            {
                pitch: -9,
                yaw: 90.5,
                type: "scene",
                sceneId: "male_bath_6",
                createTooltipFunc: hotspot
            }
        ]
    };
}
