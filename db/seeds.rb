# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Solution.create(difficulty: "mid", x: 28.32, y: 36.84)
Solution.create(difficulty: "easy", x: 65.65, y: 94.72)
Solution.create(difficulty: "hard", x: 62.01, y: 37.78)
