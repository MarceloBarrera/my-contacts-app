import { rest } from "msw";
import * as usersDB from "./data/users";

const baseUrl = `https://bar.foo.com`;
const authUrl = process.env.REACT_APP_AUTH_URL;

export const handlers = [
  rest.get(`${baseUrl}/api/v1/contacts`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          createdAt: "2022-02-21T23:00:05.414Z",
          name: "bar",
          avatar: "https://i.pravatar.cc/300",
          email: "Chadrick40@gmail.com",
          phone: "862-784-2087 x469",
          birthday: "2021-11-25T05:29:06.599Z",
          id: "35",
        },
        {
          createdAt: "2022-02-21T23:00:05.414Z",
          name: "marce",
          avatar: "https://i.pravatar.cc/300",
          email: "marce@gmail.com",
          phone: "1111111-784-2087 x469",
          birthday: "2021-11-25T05:29:06.599Z",
          id: "36",
        },
      ])
    );
  }),
  rest.post(`${baseUrl}/api/v1/contacts`, (req, res, ctx) => {
    console.log("POST", req);
    return res(
      ctx.status(201),
      ctx.json({
        ...req.body,
        createdAt: "2022-02-21T23:00:05.414Z",
        id: "99",
      })
    );
  }),
  rest.delete(`${baseUrl}/api/v1/contacts/:id`, (req, res, ctx) => {
    console.log("DELETE", req.params);
    return res(
      ctx.status(200),
      ctx.json({
        ...req.body,
        createdAt: "2022-02-21T23:00:05.414Z",
        id: req.params.id,
      })
    );
  }),
  rest.put(`${baseUrl}/api/v1/contacts/:id`, (req, res, ctx) => {
    console.log("PUT", req.params);
    return res(
      ctx.status(200),
      ctx.json({
        ...req.body,
        createdAt: "2022-02-21T23:00:05.414Z",
      })
    );
  }),

  rest.post(`${authUrl}/login`, async (req, res, ctx) => {
    const { username, password } = req.body;
    const user = await usersDB.authenticate({ username, password });
    return res(ctx.json({ user }));
  }),

  rest.post(`${authUrl}/register`, async (req, res, ctx) => {
    const { username, password } = req.body;
    const userFields = { username, password };
    await usersDB.create(userFields);
    let user;
    try {
      user = await usersDB.authenticate(userFields);
    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({ status: 400, message: error.message })
      );
    }
    return res(ctx.json({ user }));
  }),
];
