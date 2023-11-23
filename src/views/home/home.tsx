import { IntlSwitcher, Trans } from '../../components';

const Home = () => {
    return (
        <div>
            <IntlSwitcher />
            <hr />
            <Trans
                alias="hello-world"
                fallback="d one"
            />
            <hr />
            <Trans
                alias="page.home"
                fallback="d two"
            />
        </div>
    );
};

export default Home;
