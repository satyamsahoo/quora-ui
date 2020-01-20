import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIRoute } from './api.routes';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    // getAll
    getAll() {
        return this.http.get(APIRoute.getAll());
    }
}