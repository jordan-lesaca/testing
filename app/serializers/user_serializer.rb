class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :competitive

  has_many :games, serializer: GameSerializer 
  #Rails is still using UserSerializer to render the JSON, 
  #but now UserSerializer is passing the data request along to the new simplified serializer
end
