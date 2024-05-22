Rails.application.routes.draw do
  devise_for :users
  get 'dashboard/index'
  root 'balls#index'
  resources :balls
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
