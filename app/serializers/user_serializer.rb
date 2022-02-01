class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :competitive
  has_many :games, serializer: GameSerializer
end
