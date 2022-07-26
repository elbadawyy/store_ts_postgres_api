import { Request, Response } from 'express'
import * as usersController from '../controllers/usersController'
import jwt from 'jsonwebtoken'


// const index = async (req: Request, res: Response) => {
//     try {
//       const { username } = req.body
//       try {
//         const uName = await User.show(verifyAuthToken(req, username))
//         if (!uName) {
//           return res.status(401).json('Invalid user id ' + username)
//         }
//       } catch (err) {
//         return res.status(401).json((err as Error).message)
//       }
//       const users = await User.index()
//       return res.status(200).json(users)
//     } catch (err) {
//       return res.status(401).json((err as Error).message)
//     }
//   }
  
export async function  create(req: Request, res: Response) {
    try {
        // return res.status(200).json(req.body) 
      const { email, password, firstname, lastname } = req.body
    //   if (!firstname || !lastname || !username || !password) {
    //     return res.status(400).json("Missing one or more user's info")
    //   }

        !email && !email?.length  && !password&& !password?.length 
        && !firstname && !firstname.length && !lastname   && !lastname?.length
        && res.status(422).json({"error":"make sure you send all these parameters firstname,lastname,email,password"})

      const user = await usersController.create(req.body)
      const token = jwt.sign({ user }, process.env.JWT_SECRET as unknown as string)
  
      return res.status(200).json({token:token,userInfo:user})
    } catch (err) {
      return res.status(422).json((err as Error).message)
    }
}
  
//   const show = async (req: Request, res: Response) => {
//     try {
//       const { username } = req.params
//       //const { username } = req.body
  
//       if (!verifyAuthToken(req, username)) {
//         return res.status(400).json('Invalid user id ' + username)
//       }
//       const users = await User.show(username)
//       if (users) {
//         return res.status(200).json(users)
//       } else {
//         return res.status(400).json('no user found with id ' + username)
//       }
//     } catch (err) {
//       return res.status(400).json((err as Error).message)
//     }
//   }