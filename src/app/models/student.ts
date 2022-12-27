import { Address } from "./address";

export class Student {


constructor(
    
	    public id:number,
        public name: string,
	    public admissionNumber:string,
	    public  section:string,
	    public division:string,
	    public totalMarks:number,
	    public percentage:number,
	    public result:string,
        public dateOfBirth:Date,
	    public gender:string,
	    public nationality:string,
	    public address:Address,
	    public schoolName:string,
	    public mediumOfInstruction:string,
	    public phoneNumber:number,
	    public emergencyContact:number,
	    public  email:string,
	  	public  religion:string,
	    public fathername:string,
	    public occupation:string,
	    public annualIncome:number,
	    public remark:string
){}
	    
}
