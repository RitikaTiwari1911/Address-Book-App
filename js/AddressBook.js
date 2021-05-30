class AddressBookData{

    get fullname(){ 
        return this._fullname; 
    }
    set fullname(fullname){
        //regex for name
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if( nameRegex.test(fullname)){
            this._fullname=fullname;
        }
        else throw 'Invalid Name';  
    }

    get phone(){ 
        return this._phone; 
    }
    set phone(phone){
        //regex for phone number
        let phoneRegex = RegExp('^[0-9]{10}$');

        if( phoneRegex.test(phone)){
            this._phone=phone;
        }
        else throw 'Invalid Phone Number';  
    }

    get address(){ 
        return this._address; 
    }
    set address(address){
        //regex for address
        let addressRegex = RegExp('[A-Za-z0-9]{1}[A-Za-z0-9]{5,}');
        if( addressRegex.test(address)){
            this._address=address;
        }
        else throw 'Invalid Address';  
    }
    
    get city(){ 
        return this._city; 
    }
    set city(city){
        this._city=city;
    }
    
    get state(){ return this._state; }
    set state(state){
        this._state=state;
    }

    get zip(){ 
        return this._zip; 
    }
    set zip(zip){
        let zipRegex = RegExp('^[0-9]{6}$');
        if( zipRegex.test(zip)){
            this._zip=zip;
        }
        else throw 'Invalid Zip-Code';  
    }
    
    toString(){
        return "fullname = '"+this.fullname + ", phone = '" + this.phone + ", address ='" + this.address +
                        ", city = '"+this.city+ ", state = '" + this.state +", zip-code = '" + this.zip; 
    }
}
