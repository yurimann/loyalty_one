FactoryGirl.define do
  factory :message do
    memo { Faker::Lorem.paragraph }
  end
end
