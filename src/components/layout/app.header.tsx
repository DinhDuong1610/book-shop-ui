import { useCurrentApp } from "components/context/app.context";

const AppHeader = () => {
    const { user } = useCurrentApp();
    return (
        <header>
            <h1>Header</h1>
            <div>
                {JSON.stringify(user)}
            </div>
        </header>
    )
}

export default AppHeader