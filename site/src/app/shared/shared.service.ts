import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

constructor() { }
GetImage(data:any)
  {
   const checkhttp =  data.toLowerCase().includes('http')
   const result = checkhttp?data:`https://hderma/${data}`
   return result
   }
}
