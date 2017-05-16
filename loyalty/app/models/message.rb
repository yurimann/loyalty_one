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

  def self.group(messages, results_arr=[])
    messages.each do |msg|
# This line puts the parent message in the array if it doesn't exist yet
      if !results_arr.include? msg
        results_arr << msg
      end
      if msg.child_messages.any?
        # Get the child messages of each parent message
        temp = Message.where(parent_message_id: msg.id ).order(:created_at)
        # Iterate through the child message and check if they have children
        temp.each do |x|
          # Push the child messages inside the array
          results_arr << x
          temp_2 = Message.where(parent_message_id: x.id).order(:created_at)
          # Call method again. If the result has no child, the retults array will be returned
          Message.group(temp_2, results_arr)
        end
      end
    end
    results_arr
  end

  def tabify(x = 0)
    if self.parent_message_id == nil
      return x
    end
      # add 5 to value
    msg = Message.find(self.parent_message_id)
    x += 5
    msg.tabify(x)  
  end

end
