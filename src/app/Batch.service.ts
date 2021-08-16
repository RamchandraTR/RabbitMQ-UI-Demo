import { Injectable } from '@angular/core';
import { Batch } from './Model/Batch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BatchService {
    batchList: Array<Batch>;
    url: string;
    
    constructor(
        private http: HttpClient) { 
            this.url = "https://localhost:44316/v1/api/Batch";
        }

    GetBatch(): Observable<Batch[]>{
        return this.http.get<Batch[]>(this.url);
    }

    PostBatch(batchList: Array<Batch>){
        return this.http.post(this.url, batchList)

    }

}