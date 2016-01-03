Rails.application.routes.draw do
  resources :groups
  root to: 'test#index'

  # root to: 'users#new'

  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]

  # namespace :api, defaults: { format: :json } do
  #   # resources :groups
  #   # resources :events
  #   # resources :comments
  #   # resources :event_members
  #   # resources :group_members
  #   # resources :ratings
  #   # resources :images
  #   resources :users, only: [:index, :show, :update]
  # end

  namespace :api do
    resources :users, only: [:index, :show, :update]
  end

end
