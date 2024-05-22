require "application_system_test_case"

class BallsTest < ApplicationSystemTestCase
  setup do
    @ball = balls(:one)
  end

  test "visiting the index" do
    visit balls_url
    assert_selector "h1", text: "Balls"
  end

  test "creating a Ball" do
    visit balls_url
    click_on "New Ball"

    fill_in "X", with: @ball.x
    fill_in "Y", with: @ball.y
    fill_in "Z", with: @ball.z
    click_on "Create Ball"

    assert_text "Ball was successfully created"
    click_on "Back"
  end

  test "updating a Ball" do
    visit balls_url
    click_on "Edit", match: :first

    fill_in "X", with: @ball.x
    fill_in "Y", with: @ball.y
    fill_in "Z", with: @ball.z
    click_on "Update Ball"

    assert_text "Ball was successfully updated"
    click_on "Back"
  end

  test "destroying a Ball" do
    visit balls_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ball was successfully destroyed"
  end
end
