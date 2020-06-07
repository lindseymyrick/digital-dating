
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

 CREATE TABLE "date_rooms" (
	"id" SERIAL PRIMARY KEY, 
    "api_url" VARCHAR (200), 
    "in_use" boolean DEFAULT false, 
);

 CREATE TABLE "user_rooms" (
	"id" SERIAL PRIMARY KEY, 
	"username_user" VARCHAR (100), 
	"username_partner" VARCHAR (100), 
	"room_id" INT
);

CREATE TABLE "favorite_drink" (
	"id" SERIAL PRIMARY KEY,  
    "api_id" INT, 
    "drink_name" VARCHAR (50),
    "image_url" VARCHAR (100), 
    "method" VARCHAR (500), 
    "comments" VARCHAR (500), 
    "user_id" INT
);

CREATE TABLE "favorite_drink_ingredients" (
    "id" SERIAL PRIMARY KEY, 
    "recipe_id" INT, 
    "ingredient_measurement" VARCHAR (100)

);

CREATE TABLE "deleted_drinks" (
	"id" SERIAL PRIMARY KEY, 
    "api_id" INTEGER, 
    "drink_name" VARCHAR (50)
);

