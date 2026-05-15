CREATE TABLE IF NOT EXISTS "users" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR(50),
	"surename" VARCHAR(100),
	"password" VARCHAR(255),
	"role" VARCHAR(20),
	"email" VARCHAR(255),
	"is_active" BOOLEAN,
	PRIMARY KEY("id")
);




CREATE TABLE IF NOT EXISTS "products" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR(100),
	"category_id" INTEGER,
	"retail_price" DECIMAL(10, 2),
	"purchase_price" DECIMAL(10, 2),
	"stock_qty" INTEGER,
	"photo_url" VARCHAR(255),
	PRIMARY KEY("id")
);




CREATE TABLE IF NOT EXISTS "categories" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR(100),
	"discriptions" TEXT,
	PRIMARY KEY("id")
);




CREATE TABLE IF NOT EXISTS "sales" (
	"id" SERIAL NOT NULL,
	"user_id" INTEGER,
	"sale_date" TIMESTAMP,
	"total_amount" DECIMAL(10, 2),
	PRIMARY KEY("id")
);




CREATE TABLE IF NOT EXISTS "sale_item" (
	"id" SERIAL NOT NULL,
	"sale_id" INTEGER,
	"product_id" INTEGER,
	"qty" INTEGER,
	"r_price_at sale" DECIMAL(10, 2),
	"p_price_at sale" DECIMAL(10, 2),
	"subtotal" DECIMAL(10, 2),
	PRIMARY KEY("id")
);




CREATE TABLE IF NOT EXISTS "incoming" (
	"id" SERIAL NOT NULL,
	"user_id" INTEGER,
	"product_id" INTEGER,
	"qty" INTEGER,
	"p_price" DECIMAL(10, 2),
	"receive_date" TIMESTAMP,
	PRIMARY KEY("id")
);



ALTER TABLE "sale_item"
ADD FOREIGN KEY("product_id") REFERENCES "products"("id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "sale_item"
ADD FOREIGN KEY("sale_id") REFERENCES "sales"("id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "products"
ADD FOREIGN KEY("category_id") REFERENCES "categories"("id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "sales"
ADD FOREIGN KEY("user_id") REFERENCES "users"("id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "products"
ADD FOREIGN KEY("id") REFERENCES "incoming"("product_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "users"
ADD FOREIGN KEY("id") REFERENCES "incoming"("user_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;