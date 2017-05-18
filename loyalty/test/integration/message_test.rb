require 'test_helper'

class UserFlowTest < ActionDispatch::IntegrationTest
  setup do
    Capybara.current_driver = :poltergeist
    Capybara.ignore_hidden_elements = false
    @user = FactoryGirl.create(:user, email: "test@email.com")
  end

  test 'create a new user' do
    visit new_user_path

    fill_in('name', with: 'Test')
    fill_in('Username', with: 'test_user')
    fill_in('Email', with: 'test_email@gmail.com')
    fill_in('Location', with: 'Toronto')
    fill_in('Password', with: 'password')
    fill_in('Password confirmation', with: 'password')
    click_on('Create User')

    assert_current_path users_path

  end

  test 'allow user to log in' do
    visit login_path

    fill_in('email', with: "test_email@gmail.com")
    fill_in('password', with: "password")
    click_on('Login')

    assert_current_path root_path
  end

  test "User can post messages when logged in" do
    visit login_path

    fill_in('email', with: "test_email@gmail.com")
    fill_in('password', with: "password")
    click_on('Login')

    fill_in("message_memo", with: "Javascript text")
    click_on("Done")
    assert_current_path root_path
  end
end
