export default function washing_inside_2(hotspot) {
    return {
        title: "HABITACIÓN LAVADO - INTERIOR",
        type: "equirectangular",
        panorama: "../low_img/4B.jpg",
        hotSpots: [
            {
                pitch: -26,
                yaw: -176,
                type: "scene",
                sceneId: "washing_inside_1",
                createTooltipFunc: hotspot
            },
            {
                pitch: -23,
                yaw: -86,
                type: "scene",
                sceneId: "washing_inside_3",
                createTooltipFunc: hotspot
            }
        ]
    };
}
