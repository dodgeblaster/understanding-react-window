import List from '../components/VariableList'

const Row = ({ index, style }) => (
    <div
        key={index}
        className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}
        style={style}
    >
        Row {index}
    </div>
)

function App() {
    return (
        <div className="App">
            <List
                className="List"
                height={400}
                itemCount={1000}
                itemSize={(index) => (index % 2 === 0 ? 100 : 200)}
                width={200}
            >
                {Row}
            </List>
        </div>
    )
}

export default App
