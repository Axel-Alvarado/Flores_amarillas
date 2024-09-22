var sound = new Audio();
      sound.src = "./Flores_Amarillas.mp3";

      function playAudio() {
          sound.play().catch(function(error) {
              console.log("Error al reproducir el audio:", error);
          });
      }
      
      // Intenta reproducir al cargar la página (solo funcionará en algunos navegadores después de una interacción del usuario)
      window.onload = function() {
          document.body.addEventListener('click', playAudio, { once: true });
      };



onload = () => {
  document.body.classList.remove("container");
};