import pool from "../config/connection.js";
    
const getUsers = async (req, res) => {
    try{
        const query = "SELECT * FROM users";
        const [rows] = await (await pool).query(query);
        if(rows.length === 0){
            return res.status(404).json({message: "No users found"});
        }
        res.status(200).json({
            status: "success",
            data: {
                users: rows
            }
        });
    }catch(err){  
        res.status(500).json({
            status: "error",
            message: err.message
        });
    }
}

export {getUsers};