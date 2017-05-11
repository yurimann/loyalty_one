class Message < ApplicationRecord
  belongs_to :user
  belongs_to :parent, class_name: "Message", foreign_key: "parent_message_id"
  has_many :child_messages, class_name: "Message", foreign_key: "parent_message_id"

  validates :memo, presence: true
  validates :user_id, presence: true


  def self.ascending
    Message.order('created_at DESC')
  end
end
