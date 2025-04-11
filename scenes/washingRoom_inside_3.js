export default function washing_inside_3(hotspot) {
    return {
        title: "HABITACIÓN LAVADO - INTERIOR",
        type: "equirectangular",
        panorama: "../low_img/5B.jpg",
        hotSpots: [
            {
                pitch: -31,
                yaw: -86,
                type: "scene",
                sceneId: "washing_inside_4",
                createTooltipFunc: hotspot
            },
            {
                pitch: -27,
                yaw: -177,
                type: "scene",
                sceneId: "washing_inside_2",
                createTooltipFunc: hotspot
            }
        ]
    };
}
