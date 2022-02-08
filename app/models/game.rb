class Game < ApplicationRecord
    belongs_to :user

    validates :title, presence: true, uniqueness: true
    validates :release_year, presence: true, length: { is: 4, message: "Please enter a valid date!" }
    validates :release_year, numericality: { less_than: 2023, message: "Must have valid date" }
    validates :genre, presence: true
end