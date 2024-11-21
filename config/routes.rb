Rails.application.routes.draw do
  root to: "homepage#index"
  namespace :api do
    get "solutions/easy", to: "solutions#easy"
    get "solutions/mid", to: "solutions#mid"
    get "solutions/hard", to: "solutions#hard"

    get "leaderboard/easy", to: "leaderboard#easy"
    get "leaderboard/mid", to: "leaderboard#mid"
    get "leaderboard/hard", to: "leaderboard#hard"
    resources :leaderboard, only: [ :create ]
  end

  # Specific routes for your app
  get "/leaderboards", to: "homepage#index"
  get "/game", to: "homepage#index"

  # Catch-all route for React Router with exclusion for static files
  get "*path", to: "homepage#index", constraints: ->(req) { req.format.html? && !req.path.start_with?("/images", "/assets") }
end
