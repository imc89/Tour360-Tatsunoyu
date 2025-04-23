export default function garage(hotspot) {

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const panoramaPath = isMobile
        ? "mobile_img/2A.jpg"  //  mobile
        : "low_img/2A.jpg";    //  desktop

    return {
       "title": "GARAJE",
        "type": "equirectangular",
        "panorama": panoramaPath,
        "hotSpots": [
            {
                "pitch": -15,
                "yaw": 0.5,
                "type": "scene",
                "sceneId": "bath_path",
                "createTooltipFunc": hotspot
            },
            {
                "pitch": -15,
                "yaw": -83,
                "type": "scene",
                "text": "Volver (a 1A)",
                "sceneId": "washing_path",
                "createTooltipFunc": hotspot
            },
            {
                "pitch": -16,
                "yaw": -170,
                "type": "scene",
                "text": "bath_door",
                "sceneId": "initial",
                "createTooltipFunc": hotspot
            }
        ]
    };
}
