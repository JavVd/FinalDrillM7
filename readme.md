npx sequelize model:generate --name User --attributes name:string,lastName:string,email:string

npx sequelize model:generate --name Bootcamp --attributes title:string,cue:string,description:string

npx sequelize model:generate --name UserBootcamp --attributes UserId:integer,BootcampId:integer