import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";

// Assim 
// import { teste1, teste2 } from "./modules/teste.js"
// teste1();
// teste2();

// Ou assim
import * as teste from "./modules/teste.js"
teste.teste1();
teste.teste2();
console.log(teste.senha)

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
