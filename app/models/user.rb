class User < ApplicationRecord
    has_many :games

    #Opposite direction. Each User might be associated with zero, one, or many Game objects. 
    #games = Game.last
    #author= Author.last
    #author.post #=> [#<Post @id=3>, #<Post @od=4>]

    validates :username, presence: true, uniqueness: true, length: { minimum: 6 }

    validates :age, presence: true
    validates :age, numericality: { greater_than_or_equal_to: 18, message: "Must be 18 or older" }
end



