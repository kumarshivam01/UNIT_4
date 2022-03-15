
const express = require("express");

const {body, validationResult} = require("express-validator");

const User = require("../models/user.model");

// const User = require("./models/user.model")

const router = express.Router();

router.post("/",// body("id").isLength({min:1}),
                 body("first_name").isLength({min:1}).withMessage("first name is required"), 
                 body("last_name").isLength({min:1}) ,
                 body("email").isEmail().withMessage("Please Enter valid Email address "),
                 body("pincode").isLength({min:6, max:6}).withMessage("Please Enter six digit Pin-code"),
                 body("age").isLength({min:1,max:2}).withMessage("age is required"),
                 body("gender").isLength({min:3}),
                 async(req,res) => {  

                    const error = validationResult(req)
                    if(!error.isEmpty()){
                        return res.status(500).json({data:error.array()})
                    }
                

                const user = await User.create(req.body);

                return res.status(200).json({data:user})
                res.send("hello")
})

module.exports= router;