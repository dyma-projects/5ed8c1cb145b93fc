import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users : BehaviorSubject<string[]> = new BehaviorSubject(["Jean", "Pascal"]);

  constructor() { }

  addUser(user: string) : void {
    const userArr : string[] = this.users.value;
    userArr.push(user);
    this.users.next(userArr);
  }

}
