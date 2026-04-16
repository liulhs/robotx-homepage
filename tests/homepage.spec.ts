import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/RobotX/);
  });

  test("hero section renders centered heading", async ({ page }) => {
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

  test("hero CTA buttons link to pages", async ({ page }) => {
    const solutions = page.getByText("Explore Solutions");
    await expect(solutions).toBeVisible();
    // Should link to /solutions
    await expect(solutions.locator("..")).toHaveAttribute("href", "/solutions");
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

  test("partners section with logos", async ({ page }) => {
    const heading = page.getByText("Trusted by some of the best.");
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();

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
    await expect(footer.getByText(/Irvine/)).toBeVisible();
  });

  test("mobile hamburger menu appears on small viewport", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    const hamburger = page.getByLabel("Toggle menu");
    await expect(hamburger).toBeVisible();
  });
});

test.describe("Solutions page", () => {
  test("renders solution cards", async ({ page }) => {
    await page.goto("/solutions");
    await expect(page).toHaveTitle(/Solutions.*RobotX/);

    await expect(
      page.getByRole("heading", { name: "Security & Inspection" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Firefighting & Rescue" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Industrial Automation" })
    ).toBeVisible();
  });

  test("nav highlights Solutions", async ({ page }) => {
    await page.goto("/solutions");
    const link = page.locator("nav").getByText("Solutions");
    await expect(link).toHaveClass(/text-accent/);
  });
});

test.describe("Products page", () => {
  test("renders platform section", async ({ page }) => {
    await page.goto("/products");
    await expect(page).toHaveTitle(/Products.*RobotX/);

    const heading = page.locator("#platform h2");
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toContainText("Embodied AI");
  });
});

test.describe("About page", () => {
  test("renders about content", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByText("Pioneering")).toBeVisible();
    await expect(page.getByText("Our Mission")).toBeVisible();

    const values = page.getByText("What Drives Us");
    await values.scrollIntoViewIfNeeded();
    await expect(values).toBeVisible();
  });

  test("renders milestones timeline", async ({ page }) => {
    await page.goto("/about");
    const milestones = page.getByText("Milestones");
    await milestones.scrollIntoViewIfNeeded();
    await expect(milestones).toBeVisible();
    await expect(page.getByText("2020")).toBeVisible();
  });
});

test.describe("Contact page", () => {
  test("renders contact form", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByText("Send a Message")).toBeVisible();
    await expect(page.getByPlaceholder("Your name")).toBeVisible();
    await expect(page.getByPlaceholder("you@company.com")).toBeVisible();
    await expect(
      page.getByPlaceholder("Tell us about your project...")
    ).toBeVisible();
  });

  test("renders contact methods", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByText("info@usrobotx.com")).toBeVisible();
    await expect(
      page.locator("main").getByText("+1 810-519-0881")
    ).toBeVisible();
    await expect(page.locator("main").getByText(/Irvine/)).toBeVisible();
  });

  test("nav highlights Contact", async ({ page }) => {
    await page.goto("/contact");
    const link = page.locator("nav").getByText("Contact");
    await expect(link).toHaveClass(/text-accent/);
  });
});
