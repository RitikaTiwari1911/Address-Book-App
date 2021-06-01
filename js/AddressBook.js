class AddressBookData {
   
    get id() { return this._id;}
    set id(id){
        this._id = id;
    }

    get fullname(){ return this._fullname; }
    set fullname(fullname){
        let nameRegex = RegExp('^[A-Z_]{1}[a-zA-Z_ ]{3,}$');
        if( nameRegex.test(fullname)){
            this._fullname=fullname;
        }
        else throw 'Invalid Name';  
    }

    get phone(){ return this._phone; }
    set phone(phone){
        let phoneRegex = RegExp(/^[0-9]{10}$/im);
        if( phoneRegex.test(phone)){
            this._phone=phone;
        }
        else throw 'Invalid Phone Number';  
    }

    get address(){ return this._address; }
    set address(address){
        let addressRegex = RegExp('^[a-zA-Z0-9_][a-zA-Z0-9_ ]{4,}$');
        if( addressRegex.test(address)){
            this._address=address;
        }
        else throw 'Invalid Address';  
    }
    
    get city(){ return this._city; }
    set city(city){
        this._city=city;
    }
    
    get state(){ return this._state; }
    set state(state){
        this._state=state;
    }

    get zip(){ return this._zip; }
    set zip(zip){
        let zipRegex = RegExp('^[1-9]{1}[0-9]{5}$');
        if( zipRegex.test(zip)){
            this._zip=zip;
        }
        else throw 'Invalid Zip-Code';  
    }
    
    toString(){
        return "[ Name: "+this.fullname+", Address: "+this.address+
                ", City: "+this.city+", State: "+this.state+", Zip Code: "+this.zip+", Phone Number: "+
                this.phone+" ]";

    }
}