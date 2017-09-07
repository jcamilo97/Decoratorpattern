import { AutoDecorator } from '../AutoDecorator'
import { Vendible } from '../Vendible';

export class CdPlayer extends AutoDecorator {
    constructor(vendible: Vendible){
        super(vendible);
    }

    getDescripcion():string{
        return this.getVendible().getDescripcion() + " + CD player";
    }

    getPrecio():number{
        return this.getVendible().getPrecio() + 100;
    }

}