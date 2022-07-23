import { Request, Response } from "express";
import db from "../database"


export async function index(req: Request, res: Response): Promise<void> {
    try {
        const result = await db.query('SELECT * FROM products ORDER BY id ASC')
        res.status(200).json(result.rows)


    }catch (e){
        console.error(e)
    }
      
}

export async function create(req: Request, res: Response): Promise<void> {
    try {
        const connection = await db.connect()
        const sql = `INSERT INTO products (name,price  ) values ($1 , $2) returning *`
    
        const result = await connection.query(sql, [
          req.body.name,
          req.body.price,
        ])
        connection.release()
    
        res.status(200).json(result?.rows[0])

      } catch (err: any) {
        console.error(err)
      }
}

export async function update(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)

        const connection = await db.connect()
      
        let result = await db.query('UPDATE products SET name = $1, price = $2 WHERE id = $3', [req.body.name, req.body.price,req.params.id])

        connection.release()
        res.status(200).send(`product modified with ID: ${id}`)

      } catch (err: any) {
        console.error(err)
      }
}


export async function show(req: Request, res: Response): Promise<void> {


    const result = await db.query('SELECT * FROM products WHERE id = $1', [req.params.id])
    res.status(200).json(result.rows)

}

export async function remove(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)

        let result = await db.query('DELETE FROM products WHERE id = $1', [id])
        res.status(200).send(`product deleted with ID: ${id}`)

    
    }catch(err){
        console.error(err)
    }
   
  
}
