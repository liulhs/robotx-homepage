import { test, expect } from "@playwright/test";

test.describe("RobotX Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/RobotX/);
  });

  test("hero section renders with heading", async ({ page }) => {
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("One Brain.");
    await expect(heading).toContainText("Any Robot.");
    await expect(heading).toContainText("Any Task.");
  });

  test("hero has video element", async ({ page }) => {
    const video = page.locator("section").first().locator("video");
    await expect(video).toBeAttached();
  });

  test("hero CTA buttons are visible", async ({ page }) => {
    await expect(page.getByText("Explore Solutions")).toBeVisible();
    await expect(page.getByText("Contact Us").first()).toBeVisible();
  });

  test("navbar shows logo and links on desktop", async ({ page }) => {
    const logo = page.locator("nav img").first();
    await expect(logo).toBeVisible();

    await expect(page.locator("nav").getByText("Solutions")).toBeVisible();
    await expect(page.locator("nav").getByText("Products")).toBeVisible();
    await expect(page.locator("nav").getByText("About")).toBeVisible();
    await expect(page.locator("nav").getByText("Contact")).toBeVisible();
  });

  test("overview section renders", async ({ page }) => {
    const heading = page.getByText("Where AI Meets the Real World");
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
  });

  test("body-agnostic section renders with cards", async ({ page }) => {
    const heading = page.getByRole("heading", {
      name: /True Physical AI is body-agnostic/,
    });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();

    await expect(page.getByText("Universal Control Layer")).toBeVisible();
    await expect(page.getByText("Dynamic Adaptation")).toBeVisible();
  });

  test("solutions section shows all three solutions", async ({ page }) => {
    const security = page.getByRole("heading", {
      name: "Security & Inspection",
    });
    await security.scrollIntoViewIfNeeded();
    await expect(security).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Firefighting & Rescue" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Industrial Automation" })
    ).toBeVisible();
  });

  test("platform section renders", async ({ page }) => {
    const heading = page.locator("#platform h2");
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Embodied AI");
    await expect(heading).toContainText("Mobile Manipulation");
  });

  test("partners section with logos", async ({ page }) => {
    const heading = page.getByText("Trusted by some of the best.");
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();

    // Check at least some partner logos loaded
    const partnerImages = page
      .locator("section")
      .filter({ hasText: "Trusted by" })
      .locator("img");
    const count = await partnerImages.count();
    expect(count).toBeGreaterThan(5);
  });

  test("footer shows company info", async ({ page }) => {
    const footer = page.locator("footer");
    await footer.scrollIntoViewIfNeeded();

    await expect(footer.getByText("Privacy Policy")).toBeVisible();
    await expect(footer.getByText("Terms of Use")).toBeVisible();
    await expect(footer.getByText(/Irvine/)).toBeVisible();
  });

  test("mobile hamburger menu appears on small viewport", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    // Hamburger button should be visible
    const hamburger = page.getByLabel("Toggle menu");
    await expect(hamburger).toBeVisible();

    // Desktop nav links should be hidden
    const desktopNav = page.locator("nav .hidden.md\\:flex");
    await expect(desktopNav).not.toBeVisible();
  });

  test("no console errors on page load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });

    await page.goto("/");
    // Allow some time for page to fully load
    await page.waitForTimeout(2000);

    // Filter out expected browser warnings (e.g., CORS for external videos)
    const criticalErrors = errors.filter(
      (e) => !e.includes("CORS") && !e.includes("net::ERR")
    );
    expect(criticalErrors).toHaveLength(0);
  });
});
