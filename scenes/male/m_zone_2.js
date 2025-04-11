export default function male_bath_2(hotspot) {
    return {
        title: "BAÑO MASCULINO - TAQUILLAS",
        type: "equirectangular",
        panorama: "low_img/male/2.jpg",
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
                sceneId: "bath",
                createTooltipFunc: hotspot
            }
        ]
    };
}
