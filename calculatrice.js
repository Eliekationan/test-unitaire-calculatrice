
class Calculatrice{
    constructor({a,b}){
        this.a = a;
        this.b = b;
    }
    //l' addition de a et b
    
    static add(){
        return a + b;
    }

    static multiple(){
        return a*b;
    }

    static minus(){
        return a-b;

    }
    static div(){
        if(b == 0){
            return false;
        }
        return a / b;
    }
}

module.exports = Calculatrice;