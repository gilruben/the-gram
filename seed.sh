#!/bin/bash
sequelize db:seed:all --seeders-path ./back/seeders --config ./back/config/config.json
