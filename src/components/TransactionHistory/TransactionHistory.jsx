import PropTypes from "prop-types";
import TransactionHistoryItem from "components/TransactionHistoryItem/TransactionHistoryItem";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={css.transaction}>
            <thead>
                <tr>
                <th className={css.head}>Type</th>
                <th className={css.head}>Amount</th>
                <th className={css.head}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({id, type, amount, currency}) => {
                    return (
                        <TransactionHistoryItem
                            key={id}
                            type={type}
                            amount={amount}
                            currency={currency}
                        />
                    )
                })}
            </tbody>
        </table>
    );
}

TransactionHistory.protoType = {
    transactions: PropTypes.array.isRequired,  
};

export default TransactionHistory;