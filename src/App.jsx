import useIdle from './hooks/useIdle.hook.jsx'

function App() {
    const isIdle = useIdle(2000);
    return (
        <>
            {isIdle ? (
                <p>You are idle!</p>
            ) : (
                <p>You are active!</p>
            )}
        </>
    )
}

export default App
