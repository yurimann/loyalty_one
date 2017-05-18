require 'test_helper'

class UserTest < ActiveSupport::TestCase

  setup do
    @user = FactoryGirl.create(:user)
    @message = FactoryGirl.create :message, user_id: @user.id
  end

  test "User can be created" do
    assert @user.valid?
  end

  test "User can have messages" do
    assert_equal @user.messages.last, @message
  end

  test "user can own multiple messages" do
    msg = FactoryGirl.create :message, user_id: @user.id
    assert_equal 2, @user.messages.length
  end

  test "user can be updated" do
    @user.location = "Oakville"
    assert @user.valid?
  end

end
