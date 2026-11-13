type Grade = "A" | "B" | "C" | "D" | "F";

interface Student {
  id: number;
  name: string;
  marks: number[];     // e.g. [80, 90, 75]
  email?: string;  
 
}

let students: Student[] = [];
let nextId = 1;
function addStudent(name:string,marks:number[]):void{
    students.push({name, marks,id:nextId});
    nextId++;
}
function addMark(id:number,mark:number):void
{
    for(const start of students)
    {
        if(start.id===id)
        { 
          const old =start.marks[0];
           if (old !== undefined) 
           {
            start.marks[0]=old+mark;   
           }
          
        }
    }

}
function getAverage(marks:number[]):number
{
   let total=0;
   
for(let s of marks)
{
    total=s+total;
   
}
 return total/ marks.length;
 

}
function getGrade(avg: number):string
{
if(avg>=90 ) return "A";

else if(avg >=80)    return "B";

else if(avg>=70)    return "C";

else if(avg >= 60)  return "D";

else return "F";

}
function removeStudent(id: number): void
{
    console.log(`student removing loading ............. .`);
    students=students.filter(m=>m.id!==id);
}
function listStudents(): void
{
    for(let dis of students)
    {
        let avg=getAverage(dis.marks);
        console.log(`${dis.id} . ${dis.name} - Average: ${avg} - Grade: ${getGrade(avg)}`);
    }
}
addStudent("hafsa",[80,100,90]);
addStudent("misbah",[90,100,90]);
addStudent("zain",[90,90,100]);
addStudent("junaid",[100,90,80]);
addStudent("hello",[20,10,10]);
addMark(2,20);

listStudents();
removeStudent(5);
listStudents();
/*  Write these functions:

addStudent(name: string, marks: number[]): void
addMark(id: number, mark: number): void adds one more mark to a student
getAverage(marks: number[]): number returns the average (hint: add all with a loop, divide by count; return 0 for an empty array)
getGrade(avg: number): Grade where 90+ is A, 80+ is B, 70+ is C, 60+ is D, below 60 is F
removeStudent(id: number): void
listStudents(): void prints each student like this:
1. Hafsa - Average: 85.00 - Grade: B       */
