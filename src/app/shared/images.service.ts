import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { catchError,tap,map } from "rxjs/operators";
@Injectable()
export class ImageService{
    private query: any;
    private API_KEY: string = '23246224-2025e6ab3cf7d78fb6f77c7d1';
    private API_URL: string = "https://pixabay.com/api/?key=";
    private URL: string = this.API_URL + this.API_KEY + '&q=';
    private perPage: string = "&per_page=12";

    constructor(private _http: HttpClient){}

    getImage(query: string){
        return this._http.get(this.URL + query + this.perPage)
        .pipe(map((data : any ) => {console.log(data['hits'])
        return data['hits']}));
        
        
      }
}
