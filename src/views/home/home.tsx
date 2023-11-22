import { FormattedMessage } from 'react-intl';

import { IntlSwitcher } from '../../components/intl-switcher';

const Home = () => (
    <div>
        <IntlSwitcher />
        <hr />
        <FormattedMessage
            defaultMessage="Hello, World!!!!! default"
            id="hello-world"
        />
    </div>
);

export default Home;
