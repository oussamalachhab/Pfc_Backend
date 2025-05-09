const { PrismaClient, AlertType } = require('@prisma/client')
const prisma = new PrismaClient();


exports.createAlert = async (req, res) =>{
    const { subscriptionId, type } = req.body;
  
    if (!subscriptionId || !type) {
      return res.status(400).json({ error: 'subscriptionId and type are required' });
    }
  
    if (!Object.values(AlertType).includes(type)) {
      return res.status(400).json({ error: 'Invalid alert type' });
    }
  
    try {
      const subscription = await prisma.subscription.findUnique({
        where: { id: subscriptionId },
      });
  
      if (!subscription) {
        return res.status(404).json({ error: 'Subscription not found' });
      }
  
      const alert = await prisma.alert.create({
        data: {
          subscriptionId,
          type,
        },
        include: {
          subscription: true,
        },
      });
  
      return res.status(201).json(alert);
    } catch (error) {
      console.error('Error creating alert:', error);
      return res.status(500).json({ error: 'Failed to create alert' });
    }
  }