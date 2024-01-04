import { Title, Section, List } from './Statistics.styled';
import StatisticsItem from 'components/StatisticsItem/StatisticsItem';

const Statistics = ({
    title,
    stats,
}) => {
    return (
        <Section>
            {title && <Title>{title}</Title>}

            <List>
                 {stats.map(({ id, label, percentage }) => (
                <StatisticsItem key={id} label={label} percentage={percentage} />
                ))}
            </List>
        </Section>
    );
};

export default Statistics;