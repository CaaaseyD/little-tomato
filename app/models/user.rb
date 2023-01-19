class User < ApplicationRecord
  has_many :todos, dependent: :destroy
  has_many :tomatoclocks, dependent: :destroy
end
