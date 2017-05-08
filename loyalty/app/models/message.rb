class Message < ApplicationRecord
  validates :memo, presence: true
end
