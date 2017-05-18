require 'test_helper'

class UserFlowTest < ActionDispatch::IntegrationTest
  setup do
    Capybara.current_driver = :poltergeist
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
    # assert page.has_content?('Test Title')
  end

  test 'submit a message' do
    visit root_path

    click_on('#new-message')

    assert true
  end
end
