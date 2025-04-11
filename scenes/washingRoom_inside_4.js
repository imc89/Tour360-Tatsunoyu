export default function washing_inside_4(hotspot) {
    return {
        title: "HABITACIÓN LAVADO - INTERIOR",
        type: "equirectangular",
        panorama: "../low_img/6B.jpg",
        hotSpots: [
            {
                pitch: -32,
                yaw: -90,
                type: "scene",
                sceneId: "washing_inside_1",
                createTooltipFunc: hotspot
            },
            {
                pitch: -32,
                yaw: -180,
                type: "scene",
                sceneId: "washing_inside_3",
                createTooltipFunc: hotspot
            }
        ]
    };
}
