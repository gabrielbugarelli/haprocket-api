/*
  Warnings:

  - You are about to drop the column `userId` on the `feedbacks` table. All the data in the column will be lost.
  - Added the required column `fk_id_user` to the `feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_feedbacks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL,
    "feedbackType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fk_id_user" TEXT NOT NULL,
    CONSTRAINT "feedbacks_fk_id_user_fkey" FOREIGN KEY ("fk_id_user") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_feedbacks" ("createdAt", "description", "feedbackType", "id") SELECT "createdAt", "description", "feedbackType", "id" FROM "feedbacks";
DROP TABLE "feedbacks";
ALTER TABLE "new_feedbacks" RENAME TO "feedbacks";
CREATE UNIQUE INDEX "feedbacks_id_key" ON "feedbacks"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
