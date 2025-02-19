import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo");
  //Check if Logo is loaded

  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Cart should have zero items ", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
  //Check if Logo is loaded
  expect(cart.innerHTML).toBe("Cart- 0 items");
});
