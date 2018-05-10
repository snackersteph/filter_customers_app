# README

## Ruby version: ruby 2.5.1p111

## System dependencies
* ruby (2.5.1p57)
* bundler (1.16.1)
* yarn (1.6.0)
* sqlite3 (3.16.0)

## Setup
* bundle install
* npm install
* rails db:create

## How to run the test suite
* Controller Tests: rails test
* JavaScript Tests: yarn test

## Generate data
rails db:migrate
rails db:seed

## Trying it out
* start the server: rails s -b 0.0.0.0
* navigate to the home page: 0.0.0.0:3000