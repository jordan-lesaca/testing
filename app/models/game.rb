class Game < ApplicationRecord
    belongs_to :user

    validates :title, presence: true
    validates :release_year, presence: true, length: { is: 4, message: "Thats not a real date!" },
    numericality: { less_than: 2023, message: "is an invalid date"}

    validates :genre, presence: true
end