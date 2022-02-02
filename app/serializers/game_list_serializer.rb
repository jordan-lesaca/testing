class GameListSerializer < ActiveModel::Serializer
    attributes :id, :title, :release_year, :genre, :user_id
end