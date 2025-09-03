import { rest } from "msw";
const baseUrl = `https://bar.foo.com`;

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
];
