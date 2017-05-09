class Message < ApplicationRecord
  validates :memo, presence: true

  def self.ascending
    Message.order('created_at DESC')
  end
end
