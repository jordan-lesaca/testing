class Game < ApplicationRecord
    belongs_to :user

    validates :title, presence: true

    validates :release_year, presence: true, length: { is: 4, message: "Thats not a real date!" }
end
