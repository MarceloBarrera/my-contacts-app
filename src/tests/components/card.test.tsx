import { Card } from "../../components/Card";
import { render, screen } from "@testing-library/react";

const contact = {
  createdAt: new Date("2021-12-22T07:11:08.136Z"),
  name: "Olive Sawayn",
  avatar: "https://i.pravatar.cc/300",
  email: "Chadd_MacGyver0@hotmail.com",
  phone: "(264) 221-8092 x4383",
  birthday: "2021-01-14T01:43:04.943Z",
  id: 1,
};

it("Render Card with no Edit mode", () => {
  render(
    <Card
      key={contact.id}
      contact={contact}
      showItemId={-1}
      setShowItemIdHandler={() => {}}
    />
  );

  expect(screen.getByText(contact.name)).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();

  expect(
    screen.queryByRole("button", { name: /edit\-avatar/i })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("button", { name: /close/i })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("button", { name: /delete/i })
  ).not.toBeInTheDocument();
});

it("Render Card in Edit mode", () => {
  render(
    <Card
      key={contact.id}
      contact={contact}
      showItemId={1}
      setShowItemIdHandler={() => {}}
    />
  );

  expect(screen.getByText(contact.name)).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();

  expect(
    screen.queryByRole("button", { name: /edit\-avatar/i })
  ).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: /close/i })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: /delete/i })).toBeInTheDocument();
});
