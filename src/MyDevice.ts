export interface MyDevice {
	vendorId: number;
	productId: number;
	description: string;
	listOfSignals: SignalsOfDevice[];
}

interface SignalsOfDevice {
	description: string;
	signal: string;
	requireManualAction: boolean;
	isTheStandbySignal: boolean;
}

/**
 * Cuando el botón ANALOG esta ON, el rotor de la izquierda puede llegar a transmitir la misma señal que "arriba", "derecha", "abajo", e "izquierda" con la luz OFF.
 */
export const MyDevice: MyDevice = {
	vendorId: 2341,
	productId: 34918,
	description: 'Lakeview Research WiseGroup Ltd, MP-8866 Dual Joypad',
	listOfSignals: [
		{
			description: 'Established communication',
			signal: 'AQDwf39/fw==',
			requireManualAction: false,
			isTheStandbySignal: false,
		},
		{
			description: 'Standby status',
			signal: 'AgDwf39/fw==',
			requireManualAction: false,
			isTheStandbySignal: true,
		},
		{
			description: 'Square button',
			signal: 'AQjwf39/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			description: 'Triangle button',
			signal: 'AQHwf39/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			description: 'Circle button',
			signal: 'AQLwf39/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			description: 'Crux button',
			signal: 'AQTwf39/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			description: 'R1 button',
			signal: 'ASDwf39/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			description: 'R2 button',
			signal: 'AYDwf39/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			description: 'L1 button',
			signal: 'ARDwf39/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			description: 'L2 button',
			signal: 'AUDwf39/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			description: 'Up button',
			signal: 'AQDwfwB/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			description: 'Right button',
			signal: 'AQDw/39/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			description: 'Down button',
			signal: 'AQDwf/9/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			description: 'Left button',
			signal: 'AQDwAH9/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			description: 'Select button',
			signal: 'AQDyf39/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			description: 'Start button',
			signal: 'AQDxf39/fw==',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
	],
};
