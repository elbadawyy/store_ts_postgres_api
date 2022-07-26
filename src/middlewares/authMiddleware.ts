import { NextFunction, Request } from 'express'
import { verify, JwtPayload } from 'jsonwebtoken'

export function verifyAuthToken(req: Request, res: Response ,next:NextFunction): string {
  try {
    const authorizationHeader = req.headers.authorization
    const token = authorizationHeader?.split(' ')[1]
    const decoded = verify(token as string, process.env.JWT_SECRET as string) as JwtPayload
    if (req.body.user_id && decoded.user.id !== req.body.user_id) {
      throw new Error('Wrong Token')
    }
    return decoded.users.id
  } catch (error ) {
    throw new Error('Authorization failed! ')
  }
}