# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(username: "Chronx", age: 30 , competitive: false)
user2 = User.create(username: "Juggernaut", age: 23, competitive: true)
user3 = User.create(username: "CantTouchThis", age: 28, competitive: true)
user4 = User.create(username: "FauxHaux", age: 21, competitive: false)
user5 = User.create(username: "Vanquisher", age: 20, competitive: false)

game1 = Game.create(title: "Final Fantasy VII Remake", release_year: 2020, genre: "RPG", user_id: 1)
game2 = Game.create(title: "Call of Duty: Vanguard", release_year: 2021, genre: "FPS", user_id: 2)
game3 = Game.create(title: "DOTA 2", release_year: 2013, genre: "MOBA", user_id: 3)
game4 = Game.create(title: "League of Legends", release_year: 2009, genre: "MOBA", user_id: 3)
game5 = Game.create(title: "Super Smash Bros. Ultimate", release_year: 2018, genre: "Fighting", user_id: 4)
game6 = Game.create(title: "Oxenfree", release_year: 2017, genre: "Adventure", user_id: 4)
game7 = Game.create(title: "Horizon Zero Dawn", release_year: 2017, genre: "ARPG", user_id: 5)
game8 = Game.create(title: "Resident Evil 2 Remake", release_year: 2019, genre: "Survival Horror", user_id: 5)