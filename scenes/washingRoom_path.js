export default function washing_path(hotspot) {
    return {
        title: "HABITACIÓN LAVADO - CAMINO",
        type: "equirectangular",
        panorama: "../low_img/1B.jpg",
        hotSpots: [
            {
                pitch: -10,
                yaw: 0.6,
                type: "scene",
                sceneId: "washing_door",
                createTooltipFunc: hotspot
            },

            {
                pitch: -15,
                yaw: -179,
                type: "scene",
                sceneId: "garage",
                createTooltipFunc: hotspot
            }
        ]
    };
}
