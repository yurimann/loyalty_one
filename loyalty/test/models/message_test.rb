require 'test_helper'

class MessageTest < ActiveSupport::TestCase

  setup do
    @user = FactoryGirl.create(:user)
    @message = FactoryGirl.create :message, user_id: @user.id
    @second_message = FactoryGirl.create :message, parent_message_id: @user.id
  end

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

  test "message saved in database has created at" do
    message = FactoryGirl.create(:message)
    assert message.created_at != nil
  end

  test "Messages belong to a user" do
    assert_equal User.find(@second_message.parent_message_id), @user
  end

end
