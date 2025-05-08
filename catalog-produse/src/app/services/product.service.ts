import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Produs {
  id: number;
  nume: string;
  pret: number;
  imagine: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduse(): Observable<Produs[]> {
    return this.http.get<Produs[]>('/assets/produse.json');
  }
}
