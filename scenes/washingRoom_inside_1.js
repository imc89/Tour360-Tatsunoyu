export default function washing_inside_1(hotspot) {
    return {
        title: "HABITACIÓN LAVADO - INTERIOR",
        type: "equirectangular",
        panorama: "../low_img/3B.jpg",
        hotSpots: [
            {
                pitch: -21,
                yaw: -176,
                type: "scene",
                sceneId: "washing_door",
                createTooltipFunc: hotspot
            },
            {
                pitch: -24,
                yaw: -1,
                type: "scene",
                sceneId: "washing_inside_2",
                createTooltipFunc: hotspot
            },
            {
                pitch: -31,
                yaw: -90,
                type: "scene",
                sceneId: "washing_inside_4",
                createTooltipFunc: hotspot
            }

        ]
    };
}
