import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class FadeDI extends Highway.Transition{
    in({from, to, done}){ //
   
            const tlr = new TimelineLite();
        tlr.fromTo(to, 0.5, {right: "-100%", top:"50%"}, {right: "0%"}) //Inicio de efecto, desde dónde viene hasta adónde se posiciona inicialmente
        .fromTo(to, 0.5, {height: "2vh"}, {height: "90vh", top:"10%", onComplete: () => {from.remove(); done()}})
        .fromTo(to.children[0], 2, {opacity:0}, {opacity:1});
        
        
    }
    out({from, done}){
        done();
    }
}

export default FadeDI;
