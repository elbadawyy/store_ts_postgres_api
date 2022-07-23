import { Request, Response } from "express";
import db from "../database"


export async function index(req: Request, res: Response): Promise<void> {
    try {
        const result = await db.query('SELECT * FROM users ORDER BY id ASC')
        res.status(200).json(result.rows)


    }catch (e){
        console.error(e)
    }
      
}

export async function create(req: Request, res: Response): Promise<void> {
    try {
        const connection = await db.connect()
        const sql = `INSERT INTO users (email,password  , firstname , lastname ) values ($1 , $2 , $3 , $4 , $5) returning *`
    
        const result = await connection.query(sql, [
          req.body.email,
          req.body.password,
          req.body.firstname,
          req.body.lastname,
        ])
        connection.release()
    
        res.status(200).json(result?.rows[0])

      } catch (err: any) {
        console.error(err)
      }
}

export async function update(req: Request, res: Response): Promise<void> {
    try {
        const connection = await db.connect()
      
        let result = await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [req.body.email, req.body.email, req.body.email])

        connection.release()
        res.status(200).send(`User modified with ID: ${id}`)

      } catch (err: any) {
        console.error(err)
      }
}


export async function show(req: Request, res: Response): Promise<void> {


    const result = await db.query('SELECT * FROM users WHERE id = $1', [req.body.id])
    res.status(200).json(result.rows)

}

export async function remove(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)

        let result = await db.query('DELETE FROM users WHERE id = $1', [id])
        res.status(200).send(`User deleted with ID: ${id}`)

    
    }catch(err){
        console.error(err)
    }
   
  
}
