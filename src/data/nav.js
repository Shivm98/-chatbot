import CreditCard from "../assets/images/credit-card.png";
import DebitCard from "../assets/images/debit-card.png";
import FAQ from "../assets/images/faq.png";
import About from "../assets/images/about.png";

export default [
  {
    title: "my axis bank",
    image: CreditCard,
    "sub links": [
      "account balance",
      "transaction history",
      "credit card due date",
      "credit card due",
      "total credit limit",
      "available credit limit",
    ],
  },
  {
    title: "transactions",
    image: DebitCard,
    "sub links": [
      "transfer funds",
      "EMI On Credit Card Bill",
      "pay credit card bill",
      "Pay Postpaid Mobile",
      "Pay Electricity Bill",
      "recharge mobile",
    ],
  },
  {
    title: "service requests",
    image: FAQ,
    "sub links": [
      "Order Cheque Book",
      "Credit Card Pin Set/Reset",
      "Block Card",
    ],
  },
  {
    title: "apply for new products",
    image: About,
    "sub links": ["accounts", "loan", "card"],
  },
];
