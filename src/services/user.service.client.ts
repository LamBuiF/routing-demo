
import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    user=[
        {_id: 1, Username: 'bob', Password:'bobspassword'},
        {_id: 2, Username: 'mike', Password:'mikespassword'}
    ]
    findUserByCredential(username: string, password: string) {
        for (let i = 0; i < this.user.length; i++) {
            const u = this.user[i];
            if (username == u.Username && password == u.Password) {
              return u;
            }
        }
        return null
    }
    createUser(username: string, password: string) {
        if (username != null && password != null) {
          const u = {_id: this.user.length + 1, Username: username, Password: password}
          this.user = this.user.concat(u)
          return u
        }
        return null
    }
}

