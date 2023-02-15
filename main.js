let order = {
  name: 'Abduvali',
  surname: 'Shoqosimov',
  middlename: 'Baxtiyorovich',
  getSummary: function () {
    console.log(this, 'this');
    return `${this.name} writing by ${this.surname} ${this.name}  ${this.middlename} ${this.getSummary}`;
  },
};

console.log(order.getSummary());
