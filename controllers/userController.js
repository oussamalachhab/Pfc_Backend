const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

exports.getAllUsers = async (req, res) => {
    try {
      const users = await prisma.user.findMany(
        {
            select : {
                id : true,
                name : true,
                email : true,
                role : {
                    select : {
                        name : true
                    }
                }
            }
        }
      ); 
      res.json({
        success: true,
        data: users
      });
    } catch (error) {
      console.error("Error fetching roles:", error);
      res.status(500).send("Internal Server Error");
    }
}

exports.CreateUser = async (req, res) => {
    const userData = req.body;
    const {
      name,
      email,
      passwordHash,
      roleId,
    } = userData;
  
    if (!name || !email || !passwordHash || !roleId ) {
      return res.status(400).json({
        success: false,
        error: "All fields are required",
      });
    }
  
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      
  
      if (existingUser) {
        return res.status(400).json({
          success: false,
          error: "User already exists",
        });
      }
  
      const hashedPassword = await bcrypt.hash(passwordHash, 10);
  
      let userData = {
        name,
        email,
        passwordHash: hashedPassword,
        roleId : parseInt(roleId),
      };
  
      const user = await prisma.user.create({
        data: userData,
        include: { role: true },
      });
      res.status(201).json({
        success: true,
        data: user,
        message: "User created successfully",
      });
    } catch (error) {
      console.error("Error in addUser:", error);
      res.status(500).json({
        success: false,
        error: "Internal Server Error",
      });
    }
  }