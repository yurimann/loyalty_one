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

end
