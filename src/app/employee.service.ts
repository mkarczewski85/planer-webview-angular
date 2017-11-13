import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Injectable} from "@angular/core";

@Injectable()
export class EmployeeService {

  constructor(private http: Http) {
  }

  getAll() {
    return this.http.get('http://localhost:8090/api/employees')
      .map((response: Response) => {
        return response.json();
      });
  }

  getOne(id: number) {
    return this.http.get('http://localhost:8090/api/employees/' + id)
      .map((response: Response) => {
        return response.json();
      });
  }

}
