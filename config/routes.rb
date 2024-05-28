Rails.application.routes.draw do
  
  # API routes should be in /api/v1
  namespace :api do
    namespace :v1 do
      get 'search/posts'
      resources :posts
      resources :users

      get 'login', to: 'sessions#new'
      post 'login', to: 'sessions#create'
      delete 'logout', to: 'sessions#destroy'
      
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
