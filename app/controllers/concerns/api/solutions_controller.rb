module Api
class SolutionsController < ApplicationController
  def easy
    @solutions= Solution.where(difficulty: "easy")
    render json: @solutions
  end
  def mid
    @solutions= Solution.where(difficulty: "mid")
    render json: @solutions
  end
  def hard
    @solutions= Solution.where(difficulty: "hard")
    render json: @solutions
  end
end
end
