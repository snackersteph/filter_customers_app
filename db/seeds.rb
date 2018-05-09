# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Faker::UniqueGenerator.clear

companies = 10.times.map do
  Company.create(title: Faker::Company.unique.name)
end

# puts companies

50.times do
  Customer.create(
    firstname: Faker::Name.unique.first_name,
    lastname: Faker::Name.unique.last_name,
    company: companies.sample # grab a random company
  )
end





