export interface MyDevice {
	vendorId: number;
	productId: number;
	description: string;
	listOfSignals: SignalsOfDevice[];
}

interface SignalsOfDevice {
	description: string;
	signal: string;
}

export const MyDevice: MyDevice = {
	vendorId: 2341,
	productId: 34918,
	description: 'Lakeview Research WiseGroup Ltd, MP-8866 Dual Joypad',
	listOfSignals: [
		{
			description: 'Established communication',
			signal: 'AQDwf39/fw==',
		},
		{
			description: 'Standby status',
			signal: 'AgDwf39/fw==',
		},
		{
			description: 'Square button',
			signal: 'AQjwf39/fw==',
		},
		{
			description: 'Triangle button',
			signal: 'AQHwf39/fw==',
		},
		{
			description: 'Circle button',
			signal: 'AQLwf39/fw==',
		},
		{
			description: 'Crux button',
			signal: 'AQTwf39/fw==',
		},
		{
			description: 'R1 button',
			signal: 'ASDwf39/fw==',
		},
		{
			description: 'R2 button',
			signal: 'AYDwf39/fw==',
		},
		{
			description: 'L1 button',
			signal: 'ARDwf39/fw==',
		},
		{
			description: 'L2 button',
			signal: 'AUDwf39/fw==',
		},
		{
			description: 'Up button',
			signal: 'AQDwfwB/fw==',
		},
		{
			description: 'Right button',
			signal: 'AQDw/39/fw==',
		},
		{
			description: 'Down button',
			signal: 'AQDwf/9/fw==',
		},
		{
			description: 'Left button',
			signal: 'AQDwAH9/fw==',
		},
		{
			description: 'Select button',
			signal: 'AQDyf39/fw==',
		},
		{
			description: 'Start button',
			signal: 'AQDxf39/fw==',
		},
	],
};
