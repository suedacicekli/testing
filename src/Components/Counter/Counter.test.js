import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './index';


describe("Counter Test", () => {

    let increaseBtn, decreaseBtn, count;

    beforeEach(() => {
        console.log("her testten önce Çalıştı");
        render(<Counter />);
        count = screen.getByText('0');
        decreaseBtn = screen.getByText("Decrease");
        increaseBtn = screen.getByText("Increase")

    });

    beforeAll(() => {
        console.log("İlk başta bir kere beforeAll Çalıştı");
    });
    afterEach(() => {
        console.log("Her testten sonra bir kere afterEach çalıştı");
    });
    afterAll(() => {
        console.log("En sonda bir kere afterAll Çalıştı");
    });

    test("increase btn", () => {
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    });
    test("decrease btn", () => {
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    });

})

