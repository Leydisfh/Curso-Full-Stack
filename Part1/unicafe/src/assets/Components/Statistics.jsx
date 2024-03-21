import StatisticLine from "./StatisticLine"

const Statistics = ({good, neutral,bad,total,average, positive }) => {
    return (
        <table>
            <StatisticLine  text={'Good'} value={good}/>
            <StatisticLine  text={'Neutral'} value={neutral}/>
            <StatisticLine  text={'Bad'} value={bad}/>
            <StatisticLine  text={'All'} value={total}/>
            <StatisticLine  text={'Averange'} value={average}/>
            <StatisticLine  text={'Positive'} value={positive + '%'}/>
        </table>
    )
}

export default Statistics