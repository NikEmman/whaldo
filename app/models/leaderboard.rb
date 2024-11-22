class Leaderboard < ApplicationRecord
  validates :name, presence: true
  validates :time, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :difficulty, presence: true
end
