class Car {
  id?: string;
  name: string;
  brand: string;
  description?: string;
  price: string;
  user_id: string;
  phone: string;

  private constructor({ name, brand, description, price, user_id, phone }: Car) {
    return Object.assign(this, {
      name,
      brand,
      description,
      price,
      user_id,
      phone,
    });
  }

  static create({ name, brand, description, price, user_id, phone }: Car) {
    const car = new Car({
      name,
      brand,
      description,
      price,
      user_id,
      phone,
    });
    return car;
  }
}

export { Car };
