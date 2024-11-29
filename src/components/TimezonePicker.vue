

<script setup>
import { ref, onMounted, nextTick } from "vue";

const timezones = [
  { id: "-1", path: "./canvas/-1.png" },
  { id: "-2", path: "./canvas/-2.png" },
  { id: "-3", path: "./canvas/-3.png" },
  { id: "-4", path: "./canvas/-4.png" },
  { id: "-5", path: "./canvas/-5.png" },
  { id: "-6", path: "./canvas/-6.png" },
  { id: "-7", path: "./canvas/-7.png" },
  { id: "-8", path: "./canvas/-8.png" },
  { id: "-9", path: "./canvas/-9.png" },
  { id: "-10", path: "./canvas/-10.png" },
  { id: "-11", path: "./canvas/-11.png" },
  { id: "+1", path: "./canvas/+1.png" },
  { id: "+2", path: "./canvas/+2.png" },
  { id: "+3", path: "./canvas/+3.png" },
  { id: "+4", path: "./canvas/+4.png" },
  { id: "+5", path: "./canvas/+5.png" },
  { id: "+6", path: "./canvas/+6.png" },
  { id: "+7", path: "./canvas/+7.png" },
  { id: "+8", path: "./canvas/+8.png" },
  { id: "+9", path: "./canvas/+9.png" },
  { id: "+10", path: "./canvas/+10.png" },
  { id: "+11", path: "./canvas/+11.png" },
  { id: "+12", path: "./canvas/+12.png" },
  { id: "+13", path: "./canvas/+13.png" },
  { id: "0", path: "./canvas/0.png" },
];

const canvasContainer = ref(null); // Conteneur des canvases
const baseImage = ref(null); // Référence pour l'image de base
const info = ref(""); // Informations affichées lors du hover
const allCanvas = []; // Tableau pour stocker les canvases

// Fonction pour initialiser les canvases
function initCanvas() {
  if (!canvasContainer.value) {
    console.error("canvasContainer est invalide");
    return;
  }

  timezones.forEach((item) => {
    fetch(item.path)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur de chargement : ${item.path}`);
        }
        return response.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob); // Génère une URL temporaire pour le blob
        const img = new Image();

        img.onload = () => {
          // Crée un canvas pour chaque image
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = baseImage.value.width;
          canvas.height =baseImage.value.height;
          ctx.drawImage(img, 0, 0, baseImage.value.width, baseImage.value.height);

          // Ajoute des classes pour le style
          canvas.classList.add("absolute", "opacity-80", "z-40");

          // Ajoute le canvas au conteneur
          canvasContainer.value.appendChild(canvas);
          allCanvas.push({id: item.id, canvas : canvas});

          // Libère l'URL temporaire
          URL.revokeObjectURL(url);
        };

        img.onerror = () => {
          console.error("Erreur lors du chargement de l'image :", item.path);
        };

        img.src = url;
      })
      .catch((error) => {
        console.error("Erreur lors du traitement de l'image :", error);
      });
  });
}

// Fonction déclenchée lors du déplacement de la souris
function detectHover(event) {
  info.value = `X: ${event.offsetX}, Y: ${event.offsetY}`;

  let xMousePos = event.offsetX 
  let yMousePos = event.offsetY 

  allCanvas.forEach((item) => {
      const ctxItem = item.canvas.getContext("2d");
      const imageDataItem = ctxItem.getImageData(xMousePos, yMousePos, 1, 1);
      const [r, g, b, a] = imageDataItem.data; // Couleurs RGBA

      if (a > 0){
        item.canvas.classList.remove("opacity-80")
        item.canvas.classList.add("opacity-10");
        info.value = `X: ${event.offsetX}, Y: ${event.offsetY}` + " Zone "+ item.id;

      }
      else{
          item.canvas.classList.remove("opacity-10")
          item.canvas.classList.add("opacity-80");
          item.canvas.classList.add("transition-opacity");
      }
  })


}

// Fonction pour réinitialiser les canvases
function resetCanvas() {
  console.log("Réinitialisation des canvases");
}

// Initialisation des canvases au montage du composant
onMounted(() => {
  nextTick( () => {
    setTimeout( () => {
      initCanvas();
    }, 100 )
  }) 
});
</script>

<template>
  <div class="flex flex-col">
    <div
      ref="canvasContainer"
      class="relative cursor-pointer"
      style="height: 300px"
      @mouseleave="resetCanvas"
      @mousemove="detectHover"
    >
      <!-- Image de base -->
      <img
        ref="baseImage"
        src="/canvas/fuseau-heure.png"
        class="absolute z-20"
        alt="Fuseau horaire"
      />
    </div>

    <!-- Affichage des coordonnées -->
    <h1 class="mt-5">Info : {{ info }}</h1>
  </div>
</template>

<style scoped>

</style>