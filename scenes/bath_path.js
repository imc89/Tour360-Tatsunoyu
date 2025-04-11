export default function bath_path(hotspot) {
    return {
        title: "BAÑO - CAMINO",
        type: "equirectangular",
        panorama: "../low_img/3A.jpg",
        hotSpots: [
            {
                pitch: -13,
                yaw: 0,
                type: "scene",
                sceneId: "bath_door",
                createTooltipFunc: hotspot
            },
            {
                pitch: -14,
                yaw: -175,
                type: "scene",
                sceneId: "garage",
                createTooltipFunc: hotspot
            }
        ]
    };
}
