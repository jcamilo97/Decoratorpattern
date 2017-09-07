import { AutoDecorator } from '../AutoDecorator'
import { Vendible } from '../Vendible'

export class AireAcondicionado extends AutoDecorator {
     constructor(vendible: Vendible) {
            super(vendible);
        }
    
    getDescripcion():string{
         return this.getVendible().getDescripcion() + " + Aire Acondicionado";
    }
    
    getPrecio():number{
        return this.getVendible().getPrecio() + 1500;
    }
    
    }