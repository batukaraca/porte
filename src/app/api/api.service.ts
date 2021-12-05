import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private base_url: any = 'http://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) { }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  checkLogin(id: number): Promise<Object> {  
    return this.http
        .get(this.base_url+id)
        .toPromise()
        .then(response => {
            return response;
        })
        .catch(this.handleError);
  }
}
