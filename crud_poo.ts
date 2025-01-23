interface User {
  id: number;
  name: string;
  puesto: string;
  area: string;
}

class UserClass implements User {
  static idCounter = 0;
  id: number;
  name: string;
  puesto: string;
  area: string;

  constructor(name: string, puesto: string, area: string) {
    this.id = UserClass.idCounter++;
    this.name = name;
    this.puesto = puesto;
    this.area = area;
  }
}

class UsersClass {
  private users: UserClass[] = [];

  createUser(name: string, puesto: string, area: string): void {
    const user = new UserClass(name, puesto, area);
    this.users.push(user);
    console.log(`Usuario creado: ${JSON.stringify(user)}`);
  }

  readUsers(): UserClass[] {
    console.log(this.users);
    return this.users;
  }

  updateUser(id: number, name: string, puesto: string, area: string): void {
    const user = this.users.find(u => u.id === id);
    if (user) {
      user.name = name;
      user.puesto = puesto;
      user.area = area;
      console.log(`Usuario actualizado: ${JSON.stringify(user)}`);
    } else {
      console.log(`Usuario con ID ${id} no encontrado.`);
    }
  }

  deleteUser(id: number): void {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      const removedUser = this.users.splice(index, 1);
      console.log(`Usuario eliminado: ${JSON.stringify(removedUser[0])}`);
    } else {
      console.log(`Usuario con ID ${id} no encontrado.`);
    }
  }
}

// Ejemplo de uso
const bdUsers = new UsersClass();
bdUsers.createUser('Juan', 'Frontend Junior', 'Desarrollo Web');
bdUsers.createUser('Pablo', 'Backend Junior', 'Desarrollo Móvil');
bdUsers.createUser('D', 'Jefe', 'DevOps');
bdUsers.readUsers();
bdUsers.updateUser(2, 'D R', 'Gerente', 'Gerencia');
bdUsers.readUsers();
bdUsers.deleteUser(1);
bdUsers.readUsers();
