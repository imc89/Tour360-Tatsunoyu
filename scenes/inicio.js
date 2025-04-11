export default function initial(hotspot) {
    return {
        title: "ENTRADA",
        type: "equirectangular",
        panorama: "low_img//1A.jpg",
        yaw: -3,
        hotSpots: [
            {
                pitch: -13,
                yaw: -3.072718226210974,
                type: "scene",
                sceneId: "garage",
                createTooltipFunc: hotspot
            }
        ]
    };
}