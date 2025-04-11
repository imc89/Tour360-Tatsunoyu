export default function bath(hotspot) {
    return {
        title: "TATSUNOYU BATH - INTERIOR",
        type: "equirectangular",
        panorama: "../low_img/1C.jpg",
        hotSpots: [
            {
                pitch: -11,
                yaw: -177,
                type: "scene",
                sceneId: "bath_door",
                createTooltipFunc: hotspot
            },
            {
                pitch: -10,
                yaw: -91,
                type: "scene",
                sceneId: "male_bath_1",
                createTooltipFunc: hotspot
            }
        ]
    };
}
