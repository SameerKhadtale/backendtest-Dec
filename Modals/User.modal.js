import mongoose, { Schema } from "mongoose";

const user = new Schema({
    username : "String",
    useremail : "String",
    password : "String",
})