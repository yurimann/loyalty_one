require 'test_helper'

class MessageTest < ActiveSupport::TestCase

  test "message cannot be blank" do
    message = Message.new
    assert message.invalid?
    assert message.errors.any?
  end

  test "message can be made" do
    message = FactoryGirl.create(:message)
    assert_equal message, Message.last
  end

  test "message can be replied to" do
    message = FactoryGirl.create(:message)
    reply = FactoryGirl.create(:message, parent_message_id: message.id)
    assert_equal reply.parent, message
    assert_equal message.child_messages.length, 1
  end

end
