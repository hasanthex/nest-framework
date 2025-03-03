import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserStore {
  private store = new Map<number, User>();

  addUser(user: User): void {
    this.store.set(user.id, user);
  }

  getUser(id: number): User | undefined {
    return this.store.get(id);
  }

  updateUser(id: number, user: User): void {
    this.store.set(id, user);
  }

  removeUser(id: number): string {
    if (this.store.delete(id)) {
      return `User with id ${id} has been deleted`;
    }
    return `User with id ${id} does not exist`;
  }

  getAllUsers(): User[] {
    return Array.from(this.store.values());
  }
}
