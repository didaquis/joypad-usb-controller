/**
signal detected: AQDwf39/fw==
signal detected: AgDwf39/fw==

signal detected: AQjwf39/fw==
signal detected: AQHwf39/fw==
signal detected: AQLwf39/fw==
signal detected: AQTwf39/fw==
signal detected: ASDwf39/fw==
signal detected: AYDwf39/fw==
signal detected: ARDwf39/fw==
signal detected: AUDwf39/fw==
signal detected: AQDwfwB/fw==
signal detected: AQDw/39/fw==
signal detected: AQDwf/9/fw==
signal detected: AQDwAH9/fw==
signal detected: AQDyf39/fw==
signal detected: AQDxf39/fw==
 */

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
			signal: '',
		},
		{
			description: 'Triangle button',
			signal: '',
		},
		{
			description: 'Circle button',
			signal: '',
		},
		{
			description: 'Crux button',
			signal: '',
		},
		{
			description: 'R1 button',
			signal: '',
		},
		{
			description: 'R2 button',
			signal: '',
		},
		{
			description: 'L1 button',
			signal: '',
		},
		{
			description: 'L2 button',
			signal: '',
		},
		{
			description: 'Up button',
			signal: '',
		},
		{
			description: 'Right button',
			signal: '',
		},
		{
			description: 'Down button',
			signal: '',
		},
		{
			description: 'Left button',
			signal: '',
		},
		{
			description: 'Select button',
			signal: '',
		},
		{
			description: 'Start button',
			signal: '',
		},
	],
};
