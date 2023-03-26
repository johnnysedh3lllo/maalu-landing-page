import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectdb =  () => {
    try {
        const conn =  mongoose.connect(process.env.MONGO_URL).then((res) => {
            console.log(`mongodb connected on : ${res.connection.host}`)
        })
        .catch((err)=> {
            console.log(err)
        })

        
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

export default connectdb;