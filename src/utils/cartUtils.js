// Функция для получения корзины из localStorage
const getCartFromLocalStorage = () => {
  try {
    const cartString = localStorage.getItem("cart");
    return cartString ? JSON.parse(cartString) : { items: [] };
  } catch (error) {
    console.error("Ошибка при получении данных из localStorage:", error);
    return { items: [] };
  }
};

// Функция для сохранения корзины в localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
  } catch (error) {
    console.error("Ошибка при сохранении данных в localStorage:", error);
  }
};

const getItemIndexInCart = (cart, bookId) => {
  const itemIndex = cart.items.findIndex((item) => item.bookId === bookId);
  return itemIndex;
};

// Функция для добавления товара в корзину
const addToCart = (bookId, quantity = 1) => {
  const cart = getCartFromLocalStorage();
  const itemIndex = getItemIndexInCart(cart, bookId);
  if (itemIndex > -1) {
    // Если товар уже есть в корзине, увеличиваем количество
    cart.items[itemIndex].quantity += quantity;
  } else {
    // Если товара нет в корзине, добавляем его
    cart.items.push({ bookId: bookId, quantity: quantity });
  }
  saveCartToLocalStorage(cart);
};

// Функция для удаления товара из корзины
const removeFromCart = (bookId, quantity = 1) => {
  const cart = getCartFromLocalStorage();
  const itemIndex = cart.items.findIndex((item) => item.bookId === bookId);
  if (itemIndex > -1) {
    const updatedItems = [...cart]; // Копия массива cart
    if (updatedItems[itemIndex].quantity >= quantity) {
      // Уменьшаем количество товара, если quantity меньше, чем доступно
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: updatedItems[itemIndex].quantity - quantity,
      }; // Создаем копию объекта товара
    } else {
      // Удаляем товар из корзины, если quantity больше или равно, чем доступно
      updatedItems.splice(itemIndex, 1);
    }
    const updatedCart = { ...cart, items: updatedItems }; //  Создаем новый объект cart
    saveCartToLocalStorage(updatedCart);
  } else {
    console.log("Книга не найдена в корзине");
  }
};

export {
  getCartFromLocalStorage,
  getItemIndexInCart,
  addToCart,
  removeFromCart,
};
