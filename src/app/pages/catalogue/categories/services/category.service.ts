import { Injectable } from '@angular/core';

import { CrudService } from '../../../shared/services/crud.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private crudService: CrudService
  ) {
  }

  getListOfCategories(): Observable<any> {
    const params = {
      'store': 'DEFAULT ',
      'lang': 'en'
    };
    return this.crudService.get(`/v1/category`, params);
  }

  getCategoryById(id): Observable<any> {
    return this.crudService.get(`/v1/category/${ id }`);
  }

  addCategory(category): Observable<any> {
    return this.crudService.post(`/v1/private/category`, category);
  }

  updateCategory(category): Observable<any> {
    return this.crudService.post(`/v1/private/category/${category.id}`, category);
  }

  deleteCategory(id): Observable<any> {
    return this.crudService.delete(`/v1/category/${ id }`);
  }

  checkCategoryCode(code): Observable<any> {
    const params = {
      'code': code,
    };
    return this.crudService.get(`/v1/private/category/unique`, params);
  }

}
