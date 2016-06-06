import * as React from 'react';

interface Props {
	visibile: boolean;
}

export default class Spinner extends React.Component<Props, {}> {
	render() {
		if (this.props.visibile) {
			return (
				<span className="ui spinner">
					<i className="fa fa-circle-o-notch fa-spin fa-fw"></i> &nbsp;
					<span className="sr-only">Loading...</span>
				</span>
			);
		}
		else {
			return <span className="ui spinner" />;
		}
	}
}
