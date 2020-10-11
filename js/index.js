import Highway from "@dogstudio/highway";
import FadeID from './transition';
import FadeDI from './derecha-izq';

const H = new Highway.Core({
    transitions: {
        home: FadeDI,
        about: FadeID,
        contact: FadeID
    }
    

});

