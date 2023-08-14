import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import countdown from "./dom/cuenta_regresiva.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";



const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
  hamburgerMenu(".panel-btn",".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma-morning-mix.mp3",
  "#activar-alarma",
   "#desactivar-alarma");
  countdown("countdown","jul 18, 2024 20:55:19", "Feliz Cumpleaños Danny😎");
  scrollTopButton(".scroll-top-btn");
  
});

d.addEventListener("keydown", (e)=>{
  shortcuts(e);
  moveBall(e,".ball", ".stage");
});

  darkTheme(".dark-theme-btn", "dark-mode");