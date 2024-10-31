import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("Test Home Page", () => {
    it("should renders home page", () => {
        render(<HomePage />);

        expect(screen.getByText("Get started by editing")).toBeInTheDocument();
    });

    it("should render 'Get Started by'", () => {
        render(<HomePage />);

        expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
    });
});
