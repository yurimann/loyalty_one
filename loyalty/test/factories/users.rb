FactoryGirl.define do
  factory :user do
    name {Faker::Name.name}
    username {Faker::LordOfTheRings.character}
    email {Faker::Internet.email}
    # location {"Toronto"}
    password {'password'}
    password_confirmation {'password'}
  end
end
