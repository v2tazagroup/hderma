import { environment } from "../environment";
export function GetImage(data:any) {
  if(data)
  {
   const checkhderma =  data.toLowerCase().includes('hderma')
   const checkhttp =  data.toLowerCase().includes('http')
   const result = checkhttp?data:checkhderma?`${environment.BaseImage+data}`:`${environment.BaseImage+'hderma/'+data}`
   return result
  }
  else {
    return environment.BaseImage+"assets/image/logo.svg";
  }
}
export function nest(items: any[], id:any = '', link:any = 'pid'):any {
      if (items) {
        return items.filter((item) => item[link] == id)
          .map((item) => ({
            ...item,
            children: nest(items, item.id),
          }));
      };
}
export function sharedFunction(): void {
          // Your shared function logic goes here
}
