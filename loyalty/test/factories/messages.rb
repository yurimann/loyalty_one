FactoryGirl.define do
  factory :message do
      memo { Faker::Lorem.paragraph }
      user_id {1}
      city {"Oakville"}
      lat {43.5280029}
      lng {-79.437781}
      weather {20}
  end
end
