export default function male_bath_1(hotspot) {
    return {
        title: "BAÑO MASCULINO - ENTRADA",
        type: "equirectangular",
        panorama: "low_img/male/1.jpg",
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
