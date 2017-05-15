class Message < ApplicationRecord
  belongs_to :user
  belongs_to :parent, class_name: "Message", foreign_key: "parent_message_id"
  has_many :child_messages, class_name: "Message", foreign_key: "parent_message_id"

  validates :memo, presence: true
  validates :user_id, presence: true

  def self.primary_message
    Message.where(parent_message_id: nil)
  end

  def self.ascending
    Message.order('created_at DESC')
  end

  def self.group(test, results_arr=[])
    test.each do |tst|
      results_arr << tst
      if tst.child_messages.any?
        temp = Message.where(parent_message_id: tst.id ).order(:created_at)
        temp.each do |x|
          temp_2 = Message.where(parent_message_id: x.id).order(:created_at)
          Message.group(temp_2, results_arr)
        end
      end
    end
    results_arr
  end

end
