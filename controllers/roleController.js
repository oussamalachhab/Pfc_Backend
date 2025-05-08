const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await prisma.role.findMany({
      select: {
        id: true,
        name: true
      }
    });
    
    res.json({
      success: true,
      data: roles
    });
  } catch (error) {
    console.error("Error fetching roles:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch roles"
    });
  }
};

exports.createRole = async (req, res) => {
  const { name } = req.body;

  if (!name || !['admin', 'commercial'].includes(name)) {
    return res.status(400).json({
      success: false,
      error: "Valid role name is required (admin or commercial)"
    });
  }

  try {
    const existingRole = await prisma.role.findUnique({
      where: { name }
    });

    if (existingRole) {
      return res.status(400).json({
        success: false,
        error: "Role already exists"
      });
    }

    const newRole = await prisma.role.create({
      data: { name }
    });

    res.status(201).json({
      success: true,
      data: newRole
    });
  } catch (error) {
    console.error("Error creating role:", error);
    res.status(500).json({
      success: false,
      error: "Failed to create role"
    });
  }
};