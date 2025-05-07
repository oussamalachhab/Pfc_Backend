-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `PasswordHash` VARCHAR(191) NOT NULL,
    `RoleId` INTEGER NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL,
    `UpdatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_Email_key`(`Email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Role_Name_key`(`Name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subscriber` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `CreatedByUserId` INTEGER NOT NULL,
    `UpdatedByUserId` INTEGER NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL,
    `UpdatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Subscriber_Email_key`(`Email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `SubscripterId` INTEGER NOT NULL,
    `StartDate` DATETIME(3) NOT NULL,
    `EndDate` DATETIME(3) NOT NULL,
    `Status` VARCHAR(191) NOT NULL,
    `CreatedByUserId` INTEGER NOT NULL,
    `UpdatedByUserId` INTEGER NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL,
    `UpdatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Subscription_Status_key`(`Status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alert` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `SubscriptionId` INTEGER NOT NULL,
    `Type` VARCHAR(191) NOT NULL,
    `Seen` BOOLEAN NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Alert_Type_key`(`Type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AuditLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `action` VARCHAR(191) NOT NULL,
    `entity` VARCHAR(191) NOT NULL,
    `entityId` INTEGER NOT NULL,
    `performedByUserId` INTEGER NOT NULL,
    `timestamp` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_RoleId_fkey` FOREIGN KEY (`RoleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subscriber` ADD CONSTRAINT `Subscriber_CreatedByUserId_fkey` FOREIGN KEY (`CreatedByUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subscriber` ADD CONSTRAINT `Subscriber_UpdatedByUserId_fkey` FOREIGN KEY (`UpdatedByUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subscription` ADD CONSTRAINT `Subscription_CreatedByUserId_fkey` FOREIGN KEY (`CreatedByUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subscription` ADD CONSTRAINT `Subscription_UpdatedByUserId_fkey` FOREIGN KEY (`UpdatedByUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subscription` ADD CONSTRAINT `Subscription_SubscripterId_fkey` FOREIGN KEY (`SubscripterId`) REFERENCES `Subscriber`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alert` ADD CONSTRAINT `Alert_SubscriptionId_fkey` FOREIGN KEY (`SubscriptionId`) REFERENCES `Subscription`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AuditLog` ADD CONSTRAINT `AuditLog_performedByUserId_fkey` FOREIGN KEY (`performedByUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
