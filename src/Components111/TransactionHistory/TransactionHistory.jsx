import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th className={css.thtd}>Type</th>
          <th className={css.thtd}>Amount</th>
          <th className={css.thtd}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className={css.tr} key={item.id}>
            <td className={css.thtd}>{item.type}</td>
            <td className={css.thtd}>{item.amount}</td>
            <td className={css.thtd}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
