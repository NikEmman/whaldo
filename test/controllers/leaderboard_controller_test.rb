require "test_helper"

class Api::LeaderboardControllerTest < ActionDispatch::IntegrationTest
  setup do
    @easy_leaderboard = Leaderboard.create(name: "EasyUser", time: 300, difficulty: "easy")
    @mid_leaderboard = Leaderboard.create(name: "MidUser", time: 600, difficulty: "mid")
    @hard_leaderboard = Leaderboard.create(name: "HardUser", time: 900, difficulty: "hard")
  end

  test "should get easy leaderboards" do
    get api_leaderboard_easy_url
    assert_response :success
    assert_includes @response.body, @easy_leaderboard.to_json
  end

  test "should get mid leaderboards" do
    get api_leaderboard_mid_url
    assert_response :success
    assert_includes @response.body, @mid_leaderboard.to_json
  end

  test "should get hard leaderboards" do
    get api_leaderboard_hard_url
    assert_response :success
    assert_includes @response.body, @hard_leaderboard.to_json
  end

  test "should create leaderboard" do
    assert_difference("Leaderboard.count") do
      post api_leaderboard_index_url, params: { leaderboard: { name: "NewUser", time: 400, difficulty: "easy" } }, as: :json
    end

    assert_response :created
  end

  test "should fail to create leaderboard with invalid data" do
    assert_no_difference("Leaderboard.count") do
      post api_leaderboard_index_url, params: { leaderboard: { name: "", time: -100, difficulty: "" } }, as: :json
    end

    assert_response :unprocessable_entity
  end

  test "should handle empty database" do
    Leaderboard.delete_all
    get api_leaderboard_easy_url
    assert_response :success
    assert_equal [], JSON.parse(@response.body)
  end

  test "should handle invalid data type for time" do
    assert_no_difference("Leaderboard.count") do
      post api_leaderboard_index_url, params: { leaderboard: { name: "InvalidTimeUser", time: "invalid", difficulty: "easy" } }, as: :json
    end

    assert_response :unprocessable_entity
  end

  test "should handle invalid JSON structure" do
    assert_no_difference("Leaderboard.count") do
      post api_leaderboard_index_url, params: "{ invalid: json }", headers: { "Content-Type": "application/json" }, as: :json
    end

    assert_response :bad_request
  end
end
