-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "q" TEXT NOT NULL,
    "a" TEXT[],
    "t" TEXT NOT NULL,
    "p" TEXT,
    "userId" TEXT,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
