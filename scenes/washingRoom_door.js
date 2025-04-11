export default function washing_door(hotspot) {
    return {
        title: "HABITACIÓN LAVADO - PUERTA ",
        type: "equirectangular",
        panorama: "../low_img/2B.jpg",
        hotSpots: [
            {
                pitch: -13,
                yaw: 179,
                type: "scene",
                sceneId: "washing_path",
                createTooltipFunc: hotspot
            },
            {
                pitch: -29,
                yaw: 0.2,
                type: "scene",
                sceneId: "washing_inside_1",
                createTooltipFunc: hotspot
            }
        ]
    };
}
