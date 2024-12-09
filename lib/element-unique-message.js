import { Message as u } from "element-ui";
const r = /* @__PURE__ */ new Set(), t = function(e) {
  typeof e == "string" && (e = {
    message: e,
    type: "info"
  });
  const { message: s, type: o, onClose: f, ...c } = e, n = `${o}:${s}`;
  if (!s || r.has(n))
    return;
  r.add(n);
  const a = {
    message: s,
    type: o,
    onClose: (g) => {
      r.delete(n), typeof f == "function" && f(g);
    },
    ...c
  };
  return u(a);
}, i = ["success", "warning", "info", "error"];
i.forEach((e) => {
  t[e] = (s) => t(typeof s == "string" ? {
    type: e,
    message: s
  } : {
    ...s,
    type: e
  });
});
export {
  t as default
};
