export default async function male_bath_1(hotspot) {
    const localImage = "low_img/male/1.jpg";
    const fallbackImage = "https://raw.githubusercontent.com/imc89/Tour360-Tatsunoyu/refs/heads/main/low_img/1A.jpg";

    // Función que prueba si una imagen existe
    const imageExists = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    };

    const panoramaImage = await imageExists(localImage) ? localImage : fallbackImage;

    return {
        title: "BAÑO MASCULINO - ENTRADA",
        type: "equirectangular",
        panorama: panoramaImage,
        hotSpots: [
            {
                pitch: -1,
                yaw: 94,
                type: "scene",
                sceneId: "male_bath_2",
                createTooltipFunc: hotspot
            },
            {
                pitch: -24,
                yaw: 179,
                type: "scene",
                sceneId: "bath",
                createTooltipFunc: hotspot
            }
        ]
    };
}
