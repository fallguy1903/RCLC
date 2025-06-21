import mongoose from "mongoose";

const bloodSchema = new mongoose.Schema({
    patientName:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        min:0,
        max:120
    },
    gender:{
        type:String,
        require:true,
    },
    bloodGroup:{
        type:String,
        require:true,
        trime:true
    },
    requiredDate:{
        type:Date,
        required:true,
    },
    contactPerson:{
        name:{
            type:String,
            require:true,
            trim:true
        },
        relationship:{
            type:String,
            require:true,
        },
        contact:{
            type: String,
            required: true,
            validate: {
            validator: function (v) {
                return /^[6-9]\d{9}$/.test(v); 
            },
            message: props => `${props.value} is not a valid phone number!`,
            },
        },
    },
    hospitalName:{
        type:String,
        require:true
    },
    hospitalLocation:{
        type:String,
    },
    isOpen:{
        type:Boolean,
        default:true,
    },
    postedOn:{
        type:Date,
        default:Date.now
    }
})

const Request = mongoose.model("Request",bloodSchema);
export default Request;