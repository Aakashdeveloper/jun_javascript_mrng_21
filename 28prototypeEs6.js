class geo{
    constructor(){
        this.lat=43.55;
        this.long=32.11;
    }
}

class language extends geo{
    constructor(name,city,country){
        super(lat,long)

        this.name = name;
        this.country = country;
        this.city = city;
        this.lat = lat
    }
}

