import {myQueue} from "./interface";

class myClass implements myQueue
{
    myArray:Array<string> = [];

    addTask(task:string):number{
    
        let count:number = this.myArray.push(task);
        console.log("Item "+task+ " added to array.")
    
        return count;
    }
    
    listAllTasks()
    {
        for(let item of this.myArray)
        {
            console.log(item)
        }
    }
    
    
    deleteTask(task:string):number{
        let index:number = this.myArray.indexOf(task);
        if(index > -1)
        {
            this.myArray.splice(index,1);
            console.log("We have deleted "+task)
            }
        
        return this.myArray.length;
    }
    


}

let newClass = new myClass();
let x = newClass.addTask("Hello");
console.log(x)


