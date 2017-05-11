class Message < ApplicationRecord
  belongs_to :user
  validates :memo, presence: true
  validates :user_id, presence: true


  def self.ascending
    Message.order('created_at DESC')
  end
end
