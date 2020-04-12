import React from 'react';
import CollectionPresenter from './CollectionPresenter.js';
import { collectionApi } from 'api.js';

export default class extends React.Component {
    state = {
        result: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        const {
            match: {
                params: { id },
            },
            history: { push },
        } = this.props;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push('/');
        }
        let result;
        try {
            ({ data: result } = await collectionApi.showDetail(parsedId));
        } catch {
            this.setState({ error: "Can't find anything." });
        } finally {
            this.setState({ loading: false, result });
        }
    }

    render() {
        const { result, error, loading } = this.state;
        //console.log(result);
        return <CollectionPresenter result={result} error={error} loading={loading} />;
    }
}
