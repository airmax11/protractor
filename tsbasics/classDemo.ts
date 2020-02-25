export class classDemo{
    username:string;
    password:number;
    ssn:any;

    constructor(){
        this.ssn = 123456789;
    }

    setUsername(username:string){
        this.username = username;
        }

    setSSN(){
        this.ssn = 456789852;
    }

    getUsername(){
        return this.username;
    }

    getSSN(){
        return this.ssn;
    }

}


// let airmax = new classDemo();

// airmax.setUsername('Maximus 1');
// console.log(airmax.getUsername());
// console.log(airmax.getSSN());
// airmax.setSSN();
// console.log(airmax.ssn)