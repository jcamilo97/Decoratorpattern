import { Vendible } from './Vendible';
import { FiatUno } from './ConcreteComponents/fiatuno';
import { FordFiesta } from './ConcreteComponents/fordfiesta';
import { CdPlayer } from './ConcreteDecorators/cdplayer';
import { Turbo } from './ConcreteDecorators/turbo';
import { AireAcondicionado } from './ConcreteDecorators/aireacondicionado';

let car:Vendible;
car = new FiatUno();
car = new CdPlayer(car);
car = new Turbo(car);

console.log(car.getDescripcion())
console.log("su precio es " + car.getPrecio())
console.log(" ")

let cartwo:Vendible;
cartwo = new FordFiesta();
cartwo = new AireAcondicionado(cartwo);

console.log(cartwo.getDescripcion())
console.log("su precio es " + cartwo.getPrecio())
