import { Request, Response, NextFunction } from 'express'
import userModel from './../model/user.model'
import jwt from '../utils/jwt'


const LOGIN = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {username , password } = req.body
        const user =await userModel.LOGIN(username , password)
        if(!user) {
            res.status(404).json({
                status:404,
                message:"USER NOT FOUND"
            })
        }
        res.status(200).json({
            status:200,
            message:"Ok"
        })
    } catch (error) {
        console.log(error);
        
    }
}



export default {
    LOGIN
}