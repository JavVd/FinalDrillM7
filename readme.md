# Creacion modelos

npx sequelize model:generate --name User --attributes name:string,lastName:string,email:string

npx sequelize model:generate --name Bootcamp --attributes title:string,cue:string,description:string

npx sequelize model:generate --name UserBootcamp --attributes UserId:integer,BootcampId:integer

# Creacion seeders

npx sequelize-cli seed:generate --name users

npx sequelize-cli seed:generate --name bootcamp

npx sequelize-cli db:seed --seed seeders/20250124144053-users.cjs

npx sequelize-cli db:seed --seed seeders/20250124144111-bootcamp.cjs

npx sequelize-cli db:seed --seed seeders/20250124154648-users_bootcamp.cjs