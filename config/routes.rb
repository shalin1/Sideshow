Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :events, except: [:new, :edit]
    resources :categories, except: [:new, :edit]
    resources :category_memberships, only: [:create, :destroy ]
    resources :tickets, only: [:create, :destroy, :show, :index]
    resources :bookmarks, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  get '/api/email/', to: 'api/users#email', as: 'user_exists',
   defaults: {format: :json}

end
