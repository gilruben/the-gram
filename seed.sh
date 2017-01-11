#!/bin/bash
sequelize db:seed --seeders-path ./back/seeders --config ./back/config/config.json --seed ./back/seeders/user-seeder
sequelize db:seed --seeders-path ./back/seeders --config ./back/config/config.json --seed ./back/seeders/post-seeder
sequelize db:seed --seeders-path ./back/seeders --config ./back/config/config.json --seed ./back/seeders/comment-seeder
node ./back/seeders/like-alt-seeder  
