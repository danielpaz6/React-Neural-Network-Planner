import * as React from 'react';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { ShapeState } from '../../store/shapes/types';

export interface IArrowsProps {
	shapes: ShapeState;
}

export interface IArrowsState {
}

class Arrows extends React.Component<IArrowsProps, IArrowsState> {
	constructor(props: IArrowsProps) {
		super(props);

		this.state = {

		}
	}
	
	public render() {
		return (
			<React.Fragment>
			{
			this.props.shapes.shapes.map(sourceShape => sourceShape.connectedTo.map(targetShape => {
				
				const x1 = sourceShape.x + sourceShape.centerPosition[0];
				const x2 = targetShape.x + targetShape.centerPosition[0];

				const y1 = sourceShape.y + sourceShape.centerPosition[1];
				const y2 = targetShape.y + targetShape.centerPosition[1];

				const xMid = (x1 + x2) / 2;
				const yMid = (y1 + y2) / 2;

				const points = [
					[xMid + 2,  yMid + 7],
					[xMid + 0,  yMid + 0],
					[xMid + 11, yMid + 7],
					[xMid + 0,  yMid + 14]
				]

				return (
					<polyline 
						marker-mid="url(#arrow)"
						points={`${x1},${y1} ${xMid},${yMid} ${x2},${y2}`}
						fill="none"
						stroke="black"
					/>
				);
			}))
			}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: AppState) => ({
	shapes: state.shapes
});

export default connect(
	mapStateToProps
)(Arrows);