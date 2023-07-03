import {Request , Response , NextFunction} from "express"
import jwt from '../utils/jwt'


export default (req:Request, res:Response, next:NextFunction) => {
  try {
    const { token } = req.headers
    if(!token){
      throw new Error('token required')
    }
    const user_id = jwt.verify(token)
    next()
  } catch (error) {
    console.log(error)
  }
}