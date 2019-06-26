export const saveCart = (state) => {
    try {
      const cartState = JSON.stringify(state);
      localStorage.setItem('shopping-cart', cartState);
    } catch {
      // ignore write errors
    }
  };


export const hydrateCart = () => {
    try {
      const cartState = localStorage.getItem('shopping-cart');
      if (cartState === null) {
        return undefined;
      }
      return JSON.parse(cartState);
    } catch (err) {
      return undefined;
    }
  }; 

