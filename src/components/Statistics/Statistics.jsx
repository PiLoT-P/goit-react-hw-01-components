import PropTypes from "prop-types";
import StatisticsItem from "components/StatisticsItem/StatisticsItem";
import css from "./Statistics.module.css";

const Statistics = (props) => {
    const { statistic, title } = props;

    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
            <ul className={css.list}>
                {statistic.map(({ id, label, percentage }) => {
                    return (
                        <StatisticsItem
                            key={id}
                            label={label}
                            percentage={percentage}
                        />
                    );
                })}
            </ul>
        </section>
    );  
};

Statistics.propTypes = {
    statistic: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default Statistics;