import Stories from "./pages/stories.js";
import Item from "./pages/item.js";
import Favorites from './pages/favorites.js';

var router = new Navigo(null, true, "#");

export default class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      { path: "/", page: Stories },
      { path: "/new", page: Stories },
      { path: "/ask", page: Stories },
      { path: "/show", page: Stories },
      { path: '/item', page: Item },
      { path: '/favorites', page: Favorites}

    ];

    routes.forEach(({page, path}) => {
      router
        .on(path, () => {
          page(path);
        })
        .resolve();
    });
  }
}
