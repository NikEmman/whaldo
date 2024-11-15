Rails.application.routes.draw do
 get "*path", to: "homepage#index", constraints: ->(req) { req.format.html? }
 end
