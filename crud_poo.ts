
interface User {
  name: string;
  puesto: string;
  area: string;
}

class UserClass implements User {
  name: string = '';
  puesto: string = '';
  area: string = '';

  constructor(n:string, p: string, a: string) {
    this.name = n;
    this.puesto = p;
    this.area = a;
  }
}

interface Users {
  user: UserClass;
  arr: UserClass[]; 
}  

class UsersClass implements Users {
  user = new UserClass('','','');
  arr: UserClass[];

  constructor() {
    this.user = new UserClass('', '', '');  
    this.arr = [];
  }
  createUser = (n:string, p: string, a: string) :void => {
    this.user = new UserClass(n,p,a);
    this.arr.push(this.user)
    console.log('usuario: '+(this.user)+' creado');
  }

  readUsers = ():void => {
    console.log(this.arr)
  }

  updateUser = (k: number, n:string, p: string, a: string):void => {
    this.arr[k] = new UserClass(n,p,a);
    console.log( `usuario ${k}: ${this.arr[k]} `)
  }

  deleteUser = (k:number):void => {
    this.arr.splice(k, 1);
    console.log( `usuario ${k}: borrado `)
  }

}

const bdUsers = new UsersClass();
bdUsers.createUser('Juan', 'fronted junior', 'desarrollo web');
bdUsers.createUser('Pablo', 'backend junior', 'desarrollo movil');
bdUsers.createUser('D', 'jefe', 'dev-ops');
bdUsers.readUsers();
bdUsers.updateUser(2,'D R','gerente','gerencia')
bdUsers.readUsers();
bdUsers.deleteUser(1);
bdUsers.readUsers();