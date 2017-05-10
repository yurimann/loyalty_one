Rails.application.routes.draw do

  root to: "messages#index"

  resources :users
  resources :user_sessions
  resources :messages, only: [:new, :create, :edit, :update]

  get 'login' => 'user_sessions#new', :as => :login
  post 'logout' => 'user_sessions#destroy', :as => :logout

end
