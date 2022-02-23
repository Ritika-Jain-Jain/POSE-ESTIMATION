//importing packages
import express from "express"
import cors from "cors"
import mongoose from "mongoose"

//Configuring
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//DB
mongoose.connect("mongodb://localhost:27017/PoseEstimationDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")      //When DB gets connected successfully
})

//user schema to store details
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

//Create model of DB
const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req,res)=> {
    //res.send("My API login")
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if(user){
            if(password === user.password){
                res.send( {message: "Login successful", user: user} )
            } else {
                res.send( {message : "Password didn't match"} )
            }//Restart server
        }
        else{
            res.send( {message: "User not found"} )
        }
    })
})

app.post("/signup", (req,res)=> {
    //res.send("My API signup")
    //console.log(req.body)
    const { email, password } = req.body
    //DB Store the info
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send( {message: "User already registered"} )
        }
        else{
            const user = new  User({
                email,
                password
            })
            user.save( err => {
                if(err){
                    res.send(err)
                }
                else{
                    res.send( { message: "Successfully Registered "} )
                }
            })
        }
    })
})

app.listen(9002,() => {
    console.log("Started at port 9002")
})