Rails.application.routes.draw do

  resources :games
  resources :users

  get "/me", to: "users#show"
  get "/mygames", to: "users#myGames"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"  

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!