from playwright.sync_api import Page, expect

def test_new_concepts(page: Page):
    # Navigate to the app
    page.goto("http://localhost:3000")

    # Wait for the page to load
    expect(page.get_by_role("heading", name="React Concepts")).to_be_visible()

    # Check for the new concepts
    expect(page.get_by_text("Conditional Rendering")).to_be_visible()
    expect(page.get_by_text("Lists and Keys")).to_be_visible()
    expect(page.get_by_text("Controlled Components")).to_be_visible()

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/new_concepts_verification.png")
