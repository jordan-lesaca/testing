class Game < ApplicationRecord
    belongs_to :user

    validates :title, presence: true, uniqueness: true
    validates :release_year, presence: true, length: { is: 4, message: "Please enter a valid date!" }
    validates :genre, presence: true

end