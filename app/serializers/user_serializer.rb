class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :usertype
  has_many :jobs
end
