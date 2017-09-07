import { Auto } from '../Component/Auto';

export class FordFiesta extends Auto {
    getDescripcion():string {
        return "Ford Fiesta modelo 2008";
    }
  
    getPrecio():number{
        return 25000;
    }
  }