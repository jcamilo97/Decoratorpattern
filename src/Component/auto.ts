import { Vendible } from '../Vendible';

export abstract class Auto implements Vendible {
    
        getDescripcion():string{
            return this.getDescripcion();
        }
    
        getPrecio():number{
            return this.getPrecio();
        }
    }