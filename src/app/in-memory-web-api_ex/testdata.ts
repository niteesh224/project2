import { InMemoryDbService } from "angular-in-memory-web-api";
import { Book } from "./book";
export class Testdata implements InMemoryDbService {
    createDb(){
        let bookdetails:Book[]=[
            {id:100,name:'angular14',cat:'angularbook'},
            {id:101,name:'reactjs',cat:'reactbook'},
            {id:102,name:'aws',cat:'awsbook'},
            {id:103,name:'nodejs',cat:'nodebook'}];
            return{ book : bookdetails};
    
}
}
