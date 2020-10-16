const Chuck  = require('chucknorris-io');
      
class ChuckService{
    // U servis ChuckService importovati ovaj paket i napraviti metodu getRandomJoke
    constructor(){
        this.client = new Chuck();
    
    }
    async getRandomJoke(){
        const joke = await this.client.getRandomJoke();
        return joke
    }
    
    
   

}

const chuckService = new ChuckService();
export default chuckService;