from playwright.sync_api import Page, expect

def test_dark_mode(page: Page):
    # Navigate to the app
    page.goto("http://localhost:3000")

    # Wait for the page to load
    expect(page.get_by_role("heading", name="React Concepts")).to_be_visible()

    # Switch to dark mode
    toggler = page.get_by_role("button", name="Switch Theme")
    toggler.click()

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/dark_mode_verification.png")
