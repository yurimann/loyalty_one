FactoryGirl.define do
  factory :message do
    memo { Faker::Lorem.paragraph }
    user_id {rand(2)}
  end
end
