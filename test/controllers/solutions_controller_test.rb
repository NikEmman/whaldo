require "test_helper"

class Api::SolutionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @easy_solution = Solution.create(difficulty: "easy", x: 10, y: 20)
    @mid_solution = Solution.create(difficulty: "mid", x: 30, y: 40)
    @hard_solution = Solution.create(difficulty: "hard", x: 50, y: 60)
  end

  test "should get easy solutions" do
    get api_solutions_easy_url
    assert_response :success
    assert_includes @response.body, @easy_solution.to_json
  end

  test "should not get mid,hard solutions on easy request" do
    get api_solutions_easy_url
    assert_response :success
    assert_not_includes @response.body, @mid_solution.to_json
    assert_not_includes @response.body, @hard_solution.to_json
  end

  test "should get mid solutions" do
    get api_solutions_mid_url
    assert_response :success
    assert_includes @response.body, @mid_solution.to_json
  end
  test "should not get easy/hard  solutions on mid request" do
    get api_solutions_mid_url
    assert_response :success
    assert_not_includes @response.body, @easy_solution.to_json
    assert_not_includes @response.body, @hard_solution.to_json
  end
  test "should get hard solutions" do
    get api_solutions_hard_url
    assert_response :success
    assert_includes @response.body, @hard_solution.to_json
  end
  test "should not get easy/mid solutions on hard request" do
    get api_solutions_hard_url
    assert_response :success
    assert_not_includes @response.body, @easy_solution.to_json
    assert_not_includes @response.body, @mid_solution.to_json
  end
end
