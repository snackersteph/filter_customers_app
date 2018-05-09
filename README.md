# README

## Ruby version: ruby 2.5.1p111

## System dependencies
* ruby
* bundler (1.16.1)
* sqlite3

## Setup
* bundle install
* rake db:create

## How to run the test suite
* Controller Tests: rails test

## Generate data
rails db:migrate
rails db:seed

## Trying it out
* start the server: bundle exec rails s
* navigate to the home page: http://localhost:3000