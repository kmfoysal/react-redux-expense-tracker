

const getCalculations = (transactions) => {
  let income = 0;

  let expense = 0;

  transactions.forEach((transaction) => {
    const { type, amount } = transaction;

    if (type === "income") {
      income += amount;
    } else if (type === "expense") {
      expense += amount;
    }
  });

  return { income, expense };
};


export default getCalculations;