import UserModal from './Modal/UserModal.js';
export const Login = (req,res) =>{
    res.send("Hello from login") = req.body
}

export const Register = async (req,res) =>{
    try{
        const { name, email, password } = req.body;
        if ( !name || !email || !password )
return res.status(200).json({suxxess : true, message : "All feilds are mandatory .."})
    }catch{

        return res.status(200).json({suxxess : false, message : "Registration successful .."})
    }


}