const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllSubscriptions = async(req,res)=>{
    try {
        const subscriptions = await prisma.subscription.findMany({
            select : {
                id : true,
                subscriber : {
                    select : {
                        name : true
                    }
                },
                startDate : true,
                endDate : true,
                status : true,
                createdBy : {
                    select : {
                        name : true
                    }
                },
                updatedBy : {
                    select : {
                        name : true
                    }
                }
            }
        });
        res.json({
            success : true,
            data : subscriptions
        })
    }catch (error) {
        console.error("Error fetching subscriptions:", error);
        res.status(500).json({
          success: false,
          error: "Failed to fetch subscriptions"
        });
    }
}
exports.CreateSubscription = async(req, res) => {
    const subscriptionData = req.body;
    const {
        subscriberId,
        startDate,
        endDate,
        status,
        createdByUserId,
        updatedByUserId,
    } = subscriptionData;

    try {
        
        if (!subscriberId || !startDate || !endDate || !status || !createdByUserId || !updatedByUserId) {
            return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
        }

        
        if (!['actif', 'expirant', 'inactif'].includes(status.toLowerCase())) {
            return res.status(400).json({ error: 'Statut invalide. Doit être : actif, expirant ou inactif' });
        }

        
        const start = new Date(startDate);
        const end = new Date(endDate);
        const now = new Date();
        
        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            return res.status(400).json({ error: 'Format de date invalide' });
        }

        if (start >= end) {
            return res.status(400).json({ error: 'La date de fin doit être après la date de début' });
        }

        let calculatedStatus = status.toLowerCase();
        const sevenDaysFromNow = new Date();
        sevenDaysFromNow.setDate(now.getDate() + 7);

        if (end < now) {
            calculatedStatus = 'inactif';
        } else if (end <= sevenDaysFromNow) {
            calculatedStatus = 'expirant Soon';
        } else {
            calculatedStatus = 'actif';
        }

        // Création de l'abonnement
        const newSubscription = await prisma.subscription.create({
            data: {
                subscriberId,
                startDate: start,
                endDate: end,
                status: calculatedStatus,
                createdByUserId,
                updatedByUserId
            },
            include: {
                subscriber: true,
                createdBy: true,
                updatedBy: true
            }
        });

        res.status(201).json(newSubscription);
    } catch (error) {
        console.error('Erreur lors de la création de l\'abonnement:', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};