export default function bath_door(hotspot) {
    return {
        title: "TATSUNOYU BATH",
        type: "equirectangular",
        panorama: "low_img/4A.jpg",
        hotSpots: [
            {
                pitch: -14.5,
                yaw: -176,
                type: "scene",
                sceneId: "bath_path",
                createTooltipFunc: hotspot
            },
            {
                pitch: -20,
                yaw: 0,
                type: "scene",
                sceneId: "bath",
                createTooltipFunc: hotspot
            },
        ]
    };
}
