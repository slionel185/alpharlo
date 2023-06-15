/*
  Warnings:

  - You are about to drop the column `date` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `dateTime` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Event` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[start]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `end` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Event_date_time_key";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "date",
DROP COLUMN "dateTime",
DROP COLUMN "duration",
DROP COLUMN "name",
DROP COLUMN "time",
ADD COLUMN     "end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Event_start_key" ON "Event"("start");
