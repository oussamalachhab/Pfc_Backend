const { PrismaClient, AuditAction, AuditEntity } = require('@prisma/client');
const prisma = new PrismaClient();


exports.createAuditLog = async(req, res) =>{
    const { action, entity, entityId, performedByUserId } = req.body;

    // Validate input
    if (!action || !entity || !entityId || !performedByUserId) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      // Verify the user exists
      const user = await prisma.user.findUnique({
        where: { id: performedByUserId },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Create the audit log
      const auditLog = await prisma.auditLog.create({
        data: {
          action,
          entity,
          entityId,
          performedByUserId,
        },
        include: {
          performedBy: true,
        },
      });

      return res.status(201).json(auditLog);
    } catch (error) {
      console.error('Error creating audit log:', error);
      return res.status(500).json({ error: 'Failed to create audit log' });
    }
  },

  // Get all audit logs
exports.getAllAuditLogs = async(req, res) =>{
    try {
      const auditLogs = await prisma.auditLog.findMany({
        include: {
          performedBy: true,
        },
        orderBy: {
          timestamp: 'desc',
        },
      });
      return res.json(auditLogs);
    } catch (error) {
      console.error('Error fetching audit logs:', error);
      return res.status(500).json({ error: 'Failed to fetch audit logs' });
    }
  }