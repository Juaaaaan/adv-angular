const mongoose = require('mongoose');



const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('BBDD Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BBDD');
    }
    // const Cat = mongoose.model('Cat', { name: String });
    
    // const kitty = new Cat({ name: 'Zildjian' });
    // kitty.save().then(() => console.log('meow'));
    
}


module.exports = {
    dbConnection
}
