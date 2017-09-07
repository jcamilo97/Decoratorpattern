import { AutoDecorator } from '../AutoDecorator';
import { Vendible } from '../Vendible';

export class Turbo extends AutoDecorator {
    constructor(vendible: Vendible){
        super(vendible);
    }

    getDescripcion():string{
        return this.getVendible().getDescripcion() + " + Turbo";
    }

    getPrecio():number{
        return this.getVendible().getPrecio() + 2800;
    }

}