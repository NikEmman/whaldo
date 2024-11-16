Rails.application.routes.draw do
  root to: "homepage#index"

  # Specific routes for your app
  get "/leaderboard", to: "homepage#index"
  get "/game", to: "homepage#index"

  # Catch-all route for React Router with exclusion for static files
  get "*path", to: "homepage#index", constraints: ->(req) { req.format.html? && !req.path.start_with?("/images", "/assets") }
end
