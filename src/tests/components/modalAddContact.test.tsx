import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ModalAddContact } from "../../components/ModalAddContact";

describe("Add contact modal", () => {
  it("Add button is disabled when empty name", () => {
    render(
      <ModalAddContact isOpen={true} onClose={() => {}} onConfirm={() => {}} />
    );

    const addButton = screen.getByRole("button", { name: /add/i });
    expect(addButton).toBeDisabled();
  });

  it("Add button is enabled when name is not empty", () => {
    render(
      <ModalAddContact isOpen={true} onClose={() => {}} onConfirm={() => {}} />
    );

    const addButton = screen.getByRole("button", { name: /add/i });
    const inputTextName = screen.getByRole("textbox", { name: /name/i });

    userEvent.type(inputTextName, "bar");
    expect(addButton).not.toBeDisabled();
  });

  it("Add button is disabled when invalid format email and not empty name", () => {
    render(
      <ModalAddContact isOpen={true} onClose={() => {}} onConfirm={() => {}} />
    );

    const addButton = screen.getByRole("button", { name: /add/i });
    userEvent.type(screen.getByRole("textbox", { name: /name/i }), "bar");
    const inputEmail = screen.getByRole("textbox", { name: /email address/i });
    userEvent.type(inputEmail, "badEmail");
    expect(addButton).toBeDisabled();
  });

  it("Add button is enabled when valid format email and not empty name", () => {
    render(
      <ModalAddContact isOpen={true} onClose={() => {}} onConfirm={() => {}} />
    );

    const addButton = screen.getByRole("button", { name: /add/i });
    userEvent.type(screen.getByRole("textbox", { name: /name/i }), "bar");
    const inputEmail = screen.getByRole("textbox", { name: /email address/i });

    userEvent.type(inputEmail, "bar@foo.com");
    expect(addButton).not.toBeDisabled();
  });
});
