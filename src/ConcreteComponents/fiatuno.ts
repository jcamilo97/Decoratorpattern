import { Auto } from '../Component/Auto'

export class FiatUno extends Auto {
    getDescripcion():string {
        return "Fiat Uno modelo 2006";
    }
  
    getPrecio():number{
        return 15000;
    }
  }