const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllSubscribers = async (req, res) => {
    try {
      const subscribers = await prisma.subscriber.findMany(
        {
            select : {
                id : true,
                name : true,
                email : true,
                createdBy : {
                    select : {
                        id : true,
                        name : true
                    }
                },
                updatedBy : {
                    select : {
                        id : true,
                        name : true
                    }
                }
            }
        }
      ); 
      res.json({
        success: true,
        data: subscribers
      });
    } catch (error) {
      console.error("Error fetching roles:", error);
      res.status(500).send("Internal Server Error");
    }
}

exports.CreateSubscriber = async(req ,res) => {
    const subscriberData = req.body;
    const {
        name,
        email,
        createdByUserId,
        updatedByUserId,
    } = subscriberData;

    try{
        let subscriberData = {
            name,
            email,
            createdByUserId : parseInt(createdByUserId),
            updatedByUserId : parseInt(updatedByUserId),
        }
        const subscriber = await prisma.subscriber.create({
            data: subscriberData
        });
        res.status(201).json({
            success: true,
            data: subscriber,
            message: "subscriber created successfully",
        });
    }catch (error) {
        console.error("Error in addUser:", error);
        res.status(500).json({
          success: false,
          error: "Internal Server Error",
        });
    }
}
exports.UpdateSubscriber = async(req,res) => {
    try {
        const subscriberData = req.body;
        const {
            name,
            email,
            createdByUserId,
            updatedByUserId,
        } = subscriberData;
        const subscriber = await prisma.subscriber.update({
          where: { id: parseInt(req.params.id) },
          data:subscriberData,
        });
        
        res.status(201).json({
            success: true,
            data: subscriber,
            message: "subscriber Updated successfully",
          });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.deleteSubscriber = async (req, res) => {
    try {
        const subscriber = await prisma.subscriber.delete({
          where: { id: parseInt(req.params.id) },
        });
        res.status(201).json({
            data : subscriber,
            message: "subscriber deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete record" });
    }
}