module.exports = class Data1674844779131 {
    name = 'Data1674844779131'

    async up(db) {
        await db.query(`CREATE TABLE "burn" ("id" character varying NOT NULL, "block" integer NOT NULL, "address" text NOT NULL, "value" numeric NOT NULL, "tx_hash" text NOT NULL, CONSTRAINT "PK_dcb4f14ee4534154b31116553f0" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_fc3726cbc7f5d4edf4340ae298" ON "burn" ("address") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "burn"`)
        await db.query(`DROP INDEX "public"."IDX_fc3726cbc7f5d4edf4340ae298"`)
    }
}
