import { Vendible } from './Vendible';

export abstract class AutoDecorator implements Vendible {
    vendible: Vendible;
    constructor(carvendible:Vendible) {
        this.setVendible(carvendible);          
    }
    
    setVendible(vendible:Vendible){
        this.vendible = vendible;
    }

    getVendible():Vendible{
        return this.vendible;
    }
 
    getDescripcion():string{
        return this.getDescripcion();
    }

    getPrecio():number{
        return this.getPrecio();
    }
}