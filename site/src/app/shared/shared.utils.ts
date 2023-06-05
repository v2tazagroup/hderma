import { environment } from "../environment";
export function GetImage(data:any) {
   const checkhttp =  data.toLowerCase().includes('http')
   const result = checkhttp?data:`${environment.BaseUrl+data}`
   return result
}
export function sharedFunction(): void {
          // Your shared function logic goes here
}