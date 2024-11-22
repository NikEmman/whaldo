module Api
  class LeaderboardController < ApplicationController
    def easy
      @leaderboards= Leaderboard.where(difficulty: "easy").order("time DESC")
      render json: @leaderboards
    end
    def mid
      @leaderboards= Leaderboard.where(difficulty: "mid").order("time DESC")
      render json: @leaderboards
    end
    def hard
      @leaderboards= Leaderboard.where(difficulty: "hard").order("time DESC")
      render json: @leaderboards
    end
    def create
      @leaderboard = Leaderboard.new(leaderboard_params)

      if @leaderboard.save
        render json: @leaderboard, status: :created
      else
        render json: @leaderboard.errors, status: :unprocessable_entity
      end
    end
    private
    def leaderboard_params
      params.require(:leaderboard).permit(:name, :time, :difficulty)
    end
  end
end
