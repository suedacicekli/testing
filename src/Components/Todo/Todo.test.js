import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToDo from "./index";

describe("Todo Testleri", () => {
    let button, input;

    beforeEach(() => {
        render(<ToDo />);
        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");
        console.log("deneme testi tamam");
    });

    test('Varsayılan olarak verilen 3 nesne render edilmeli', () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
        console.log("deneme testi tmsmsmsmsmsmamam");
    });
    test('İnput ve button dökümanda bulunmalı', () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });
    test("Inputa text girilip butona basılınca listeye eklenmeli", () => {
        // inputu doldur
        const name = "Sueda";
        userEvent.type(input, name)

        //buttona tıkla
        userEvent.click(button);
        //assertion kontrol kısmı
        expect(screen.getByText(name)).toBeInTheDocument();
    })
});
