import initial from './scenes/inicio.js';
import garage from './scenes/garage.js';
import bath_path from './scenes/bath_path.js';
import bath_door from './scenes/bath_door.js';
import bath from './scenes/bath.js';

import washing_path from './scenes/washingRoom_path.js';
import washing_door from './scenes/washingRoom_door.js';
import washing_inside_1 from './scenes/washingRoom_inside_1.js';
import washing_inside_2 from './scenes/washingRoom_inside_2.js';
import washing_inside_3 from './scenes/washingRoom_inside_3.js';
import washing_inside_4 from './scenes/washingRoom_inside_4.js';

import male_bath_1 from './scenes/male/m_zone_1.js';
import male_bath_2 from './scenes/male/m_zone_2.js';

document.addEventListener('DOMContentLoaded', function () {
    // ========== DECLARACIÓN DE VARIABLES ==========
    const minimapContainer = document.getElementById('minimap-container');
    const minimap = document.getElementById('minimap');
    const minimapPosition = document.getElementById('minimap-position');
    const minimapOrbit = document.getElementById('minimap-orbit');
    const minimapFov = document.getElementById('minimap-fov');
    const toggleMinimapBtn = document.getElementById('toggle-minimap');
    const overlay = document.getElementById('fade-overlay');

    // Verificación de elementos críticos
    if (!minimapContainer || !minimap || !minimapPosition || !minimapOrbit || !minimapFov || !toggleMinimapBtn) {
        console.error('Error: Elementos esenciales del minimapa no encontrados');
    }

    // Variables de estado
    let previousSceneId = null;
    let triggeredForwardBySpace = false;
    let animationFrameId = null;
    let isMinimapVisible = true;

    // Mapeo de posiciones en el mapa
    const scenePositions = {
        'initial': { x: '40%', y: '10%' },
        'garage': { x: '40%', y: '25%' },
        'bath_path': { x: '40%', y: '30%' },
        'bath_door': { x: '40%', y: '38%' },
        'bath': { x: '40%', y: '42%' },

        'washing_path': { x: '45%', y: '20%' },
        'washing_door': { x: '55%', y: '20%' },
        'washing_inside_1': { x: '55%', y: '20%' },
        'washing_inside_2': { x: '60%', y: '20%' },
        'washing_inside_3': { x: '60%', y: '18%' },
        'washing_inside_4': { x: '55%', y: '18%' },

        'male_bath_1': { x: '46%', y: '43%' },
        'male_bath_2': { x: '46%', y: '47%' },

    };

    // ========== CONFIGURACIÓN INICIAL DEL VISOR ==========
    const viewer = pannellum.viewer('panorama', {
        "default": {
            "firstScene": "initial",
            "autoLoad": true,
            "sceneFadeDuration": 1000,
            "showZoomCtrl": true,
            "mouseZoom": false,
            "compass": false,
            "northOffset": 0,
            "hotSpotDebug": true,
            // velocidad
            "yawSpeed": 6.0, // Velocidad horizontal (por defecto es 1)
            "pitchSpeed": 6.0, // Velocidad vertical
            "friction": 0, // Sensibilidad al arrastre (menos = más rápido)
            //mobile
            "showControls": false,  // Puedes deshabilitar los controles si prefieres que sea solo con el giroscopio
            "deviceOrientation": true  // Habilita el control por movimiento
        },
        "scenes": {
            initial: initial(hotspot),
            garage: garage(hotspot),
            bath_path: bath_path(hotspot),
            bath_door: bath_door(hotspot),
            bath: bath(hotspot),

            washing_path: washing_path(hotspot),
            washing_door: washing_door(hotspot),
            washing_inside_1: washing_inside_1(hotspot),
            washing_inside_2: washing_inside_2(hotspot),
            washing_inside_3: washing_inside_3(hotspot),
            washing_inside_4: washing_inside_4(hotspot),

            male_bath_1: male_bath_1(hotspot),
            male_bath_2: male_bath_2(hotspot)
        }
    });

    // ========== CONFIGURACIÓN DEL MINIMAPA ==========
    function setupMinimap() {
        // Configuración inicial del estado del minimapa
        minimapContainer.classList.remove('collapsed');
        toggleMinimapBtn.textContent = '−';
        toggleMinimapBtn.style.borderRadius = '50%';
    }

    function updateMinimap(sceneId, yaw) {
        if (!scenePositions[sceneId]) return;

        const pos = scenePositions[sceneId];

        // Actualizar posición del marcador
        minimapPosition.style.left = pos.x;
        minimapPosition.style.top = pos.y;

        // Convertir el yaw a grados CSS (0° = Norte, sentido horario)
        let cssDegrees = (360 + (yaw - 185)) % 360;

        if (sceneId === 'washing_path' ||
            sceneId === 'washing_door' ||
            sceneId === 'washing_inside_1' ||
            sceneId === 'washing_inside_2') {

            cssDegrees = (360 + (yaw + 90)) % 360;

        } else if (sceneId === 'male_bath_1') {

            cssDegrees = (360 + (yaw + 75)) % 360;

        } else if (sceneId === 'washing_inside_3') {

            cssDegrees = (360 + (yaw + 0)) % 360;

        } else if (sceneId === 'washing_inside_4') {

            cssDegrees = (360 + (yaw + 270)) % 360;

        } else if (sceneId === 'male_bath_2') {

            cssDegrees = (360 + (yaw + 170)) % 360;

        }

        // Rotar el contenedor orbital
        minimapOrbit.style.transform = `translate(-50%, -50%) rotate(${cssDegrees}deg)`;
    }

    function animateMinimap() {
        if (viewer.isLoaded()) {
            updateMinimap(viewer.getScene(), viewer.getYaw());
        }
        animationFrameId = requestAnimationFrame(animateMinimap);
    }

    // ========== EVENT LISTENERS ==========
    viewer.on('load', () => {
        setupMinimap();
        animateMinimap();

        const currentSceneId = viewer.getScene();
        const currentYaw = viewer.getYaw();
        updateMinimap(currentSceneId, currentYaw);

        // Lógica de orientación inicial
        const config = viewer.getConfig();
        if (previousSceneId && config.scenes[currentSceneId]) {
            const currentSceneConfig = config.scenes[currentSceneId];
            const returnHotspot = currentSceneConfig.hotSpots?.find(
                hs => hs.type === 'scene' && hs.sceneId === previousSceneId
            );

            if (returnHotspot) {
                const returnYaw = returnHotspot.yaw;
                const returnPitch = returnHotspot.pitch;

                let targetYaw;
                if (triggeredForwardBySpace) {
                    targetYaw = normalizeAngle(returnYaw + 180);
                } else {
                    targetYaw = returnYaw;
                }
                viewer.setYaw(targetYaw, 0);
                viewer.setPitch(returnPitch, 0);
                chargePitchCoords(currentSceneId, targetYaw);
                triggeredForwardBySpace = false;
            }
        }

        previousSceneId = currentSceneId;
    });

    // Control de transición visual
    viewer.on('scenechange', () => {
        overlay.style.opacity = 1;
    });

    viewer.on('scenechangefadedone', () => {
        setTimeout(() => {
            overlay.style.opacity = 0;
        }, 300);
    });

    // Toggle minimapa
    if (toggleMinimapBtn) {
        toggleMinimapBtn.addEventListener('click', function () {
            isMinimapVisible = !isMinimapVisible;
            minimapContainer.classList.toggle('collapsed', !isMinimapVisible);
            this.textContent = isMinimapVisible ? '−' : '+';
            toggleMinimapBtn.textContent === '−' ? toggleMinimapBtn.style.borderRadius = '50%' : toggleMinimapBtn.style.borderRadius = '10px'
        });
    }

    // Navegación con tecla Space
    document.addEventListener('keydown', function (e) {
        if (e.code === 'Space') {
            LookDirectionMove(e);
        }
    });

    // Limpieza al cerrar
    window.addEventListener('beforeunload', () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    });

    // ========== FUNCIONES AUXILIARES ==========
    function normalizeAngle(angle) {
        angle = angle % 360;
        return angle > 180 ? angle - 360 : angle <= -180 ? angle + 360 : angle;
    }

    function chargePitchCoords(currentSceneId, targetYaw) {
        const pitchSettings = {
            "initial": { pitch: -1, yaw: targetYaw >= 0 ? -3 : 1 },
            "garage": { pitch: -1, yaw: targetYaw <= 0 ? -170 : 1 },
            "bath_path": { pitch: -1, yaw: targetYaw >= 180 ? -174 : 0 },
            "bath_door": { pitch: -7, yaw: targetYaw === 180 ? -175 : 0 },
            "bath": { pitch: 0, yaw: targetYaw >= 5 ? 91 : 0 },

            "washing_path": { pitch: -3.6, yaw: targetYaw <= 0 ? -179 : undefined },
            "washing_door": { pitch: -3.6, yaw: targetYaw >= 0 ? -169 : undefined },
            "washing_inside_1": { pitch: -3.6, yaw: targetYaw <= 0 ? 0 : undefined },
            "washing_inside_2": { pitch: -1, yaw: targetYaw <= 0 ? 3 : undefined },
            "washing_inside_3": { pitch: -2, yaw: targetYaw <= 0 ? 2 : undefined },
            "washing_inside_4": { pitch: -7, yaw: targetYaw <= 0 ? 1 : undefined },

            "male_bath_1": { pitch: -1, yaw: targetYaw <= -2 ? -89 : undefined }


        };

        if (pitchSettings[currentSceneId]) {
            const { pitch, yaw } = pitchSettings[currentSceneId];
            viewer.setPitch(pitch);
            if (yaw !== undefined) viewer.setYaw(yaw);
        }
    }

    function hotspot(hotSpotDiv, args) {
        hotSpotDiv.classList.add('custom-tooltip');
        const span = document.createElement('span');
        span.innerHTML = args?.text || '';
        hotSpotDiv.appendChild(span);
        span.style.width = span.scrollWidth - 20 + 'px';
        hotSpotDiv.addEventListener('click', LookDirectionMove);
    }

    function LookDirectionMove(e) {
        e.preventDefault();
        const currentScene = viewer.getScene();
        const userYaw = viewer.getYaw();
        const sceneConfig = viewer.getConfig().scenes[currentScene];

        if (!sceneConfig?.hotSpots) return;

        const closestHotspot = sceneConfig.hotSpots
            .filter(h => h.type === 'scene')
            .map(h => ({
                ...h,
                diff: Math.abs(normalizeAngle(h.yaw - userYaw)),
                originalYaw: h.yaw
            }))
            .filter(h => h.diff <= 45)
            .sort((a, b) => a.diff - b.diff)[0];

        if (closestHotspot) {
            const lookDifference = normalizeAngle(userYaw - closestHotspot.originalYaw);
            triggeredForwardBySpace = Math.abs(lookDifference) <= 45;
            viewer.loadScene(closestHotspot.sceneId);
        }
    }

    // MOBILE ORIENTATION GIROSCOPE
    document.getElementById('accept-instructions').addEventListener('click', async () => {
        if (!viewer.isOrientationSupported()) {
            alert('Tu dispositivo no soporta orientación.');
            return;
        }

        // iOS permission
        if (
            typeof DeviceMotionEvent !== 'undefined' &&
            typeof DeviceMotionEvent.requestPermission === 'function'
        ) {
            try {
                const response = await DeviceMotionEvent.requestPermission();
                if (response !== 'granted') {
                    alert('Permiso denegado para giroscopio.');
                    return;
                }
            } catch (error) {
                alert('Error al solicitar permiso.');
                console.error(error);
                return;
            }
        }

        // Activar orientación
        viewer.startOrientation();

        // Esperar un poco y comprobar si se activó
        setTimeout(() => {
            if (viewer.isOrientationActive()) {
                viewer.setPitch(viewer.getPitch()); // refresco
                alert('Giroscopio activado correctamente.');
            } else {
                alert('No se pudo activar el giroscopio.');
            }
        }, 300);
    });

});

