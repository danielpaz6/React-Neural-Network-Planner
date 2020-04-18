import * as React from 'react';
import { IDraggableShape } from "../../../interfaces/shapes";

// Positioning
const WIDTH = 20;
const HEIGHT = 40;
const PADDING = 40;
const OFFSET = 2;

// Styling Component
const BG1 = "#f3e2f7";
const BG2 = "#f3e2f7";
const BG3 = "#f3e2f7";
const BORDER1 = "#b89acf";
const BORDER2 = "#b89acf";
const BORDER3 = "#b89acf";
const BORDER_ACTIVE = "red";

export default class Concatenate extends React.Component<IDraggableShape> {
	static centerPosition = [WIDTH / 2, HEIGHT * 3 / 2];

	public render() {
		return (
			<React.Fragment>
				<title>Concatenate Layer</title>
				
				<rect id="svg_1" height={HEIGHT} width={WIDTH} y={OFFSET} x={OFFSET} strokeWidth="1" stroke={this.props.isMarked ? BORDER_ACTIVE : BORDER1} fill={BG1}></rect>
				<rect id="svg_2" height={HEIGHT} width={WIDTH} y={OFFSET + PADDING} x={OFFSET} strokeWidth="1" stroke={this.props.isMarked ? BORDER_ACTIVE : BORDER2} fill={BG2}></rect>
				<rect id="svg_3" height={HEIGHT} width={WIDTH} y={OFFSET + PADDING*2} x={OFFSET} strokeWidth="1" stroke={this.props.isMarked ? BORDER_ACTIVE : BORDER3} fill={BG3}></rect>
			</React.Fragment>
		);
	}
}
