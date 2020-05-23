
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "favorite_drink" (
    "id" INT UNIQUE NOT NULL, 
    "drink_name" VARCHAR (50),
    "image_url" VARCHAR (100), 
    "directions" VARCHAR (500), 
    "comments" VARCHAR (500)
);

CREATE TABLE "ingredients" (
    "id" SERIAL PRIMARY KEY, 
    "ingredient_name" VARCHAR (50), 

);

CREATE TABLE "favorite_drink_ingredients" (
    "id" SERIAL PRIMARY KEY, 
    "recipe_id" INT, 
    "ingredient_id" INT

)

CREATE TABLE "deleted_drinks" (
    "id" INTEGER, 
    "drink_name" VARCHAR (50)
)