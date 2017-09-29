Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]

    resources :tasks
    resources :team_members, only: [:show, :index, :create, :destroy]

    get 'teams/search', to: 'teams#search'
    resources :teams do
      resources :projects, only: [:index]
    end



    resources :projects do
      resources :tasks, only: [:index]
    end
  end

  root "static_pages#root"
end
