class User < ApplicationRecord
    has_many :games

    validates :username, presence: true, uniqueness: true, length: { minimum: 6 }

    validates :age, presence: true
    validates :age, numericality: { greater_than_or_equal_to: 18, message: "Must be 18 or older" }
end