export interface MyDevice {
	vendorId: number;
	productId: number;
	description: string;
	listOfSignals: SignalsOfDevice[];
}

interface SignalsOfDevice {
	description: string;
	signal: string;
	requiresManualAction: boolean;
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
			requiresManualAction: false,
		},
		{
			description: 'Standby status',
			signal: 'AgDwf39/fw==',
			requiresManualAction: false,
		},
		{
			description: 'Square button',
			signal: 'AQjwf39/fw==',
			requiresManualAction: true,
		},
		{
			description: 'Triangle button',
			signal: 'AQHwf39/fw==',
			requiresManualAction: true,
		},
		{
			description: 'Circle button',
			signal: 'AQLwf39/fw==',
			requiresManualAction: true,
		},
		{
			description: 'Crux button',
			signal: 'AQTwf39/fw==',
			requiresManualAction: true,
		},
		{
			description: 'R1 button',
			signal: 'ASDwf39/fw==',
			requiresManualAction: true,
		},
		{
			description: 'R2 button',
			signal: 'AYDwf39/fw==',
			requiresManualAction: true,
		},
		{
			description: 'L1 button',
			signal: 'ARDwf39/fw==',
			requiresManualAction: true,
		},
		{
			description: 'L2 button',
			signal: 'AUDwf39/fw==',
			requiresManualAction: true,
		},
		{
			description: 'Up button',
			signal: 'AQDwfwB/fw==',
			requiresManualAction: true,
		},
		{
			description: 'Right button',
			signal: 'AQDw/39/fw==',
			requiresManualAction: true,
		},
		{
			description: 'Down button',
			signal: 'AQDwf/9/fw==',
			requiresManualAction: true,
		},
		{
			description: 'Left button',
			signal: 'AQDwAH9/fw==',
			requiresManualAction: true,
		},
		{
			description: 'Select button',
			signal: 'AQDyf39/fw==',
			requiresManualAction: true,
		},
		{
			description: 'Start button',
			signal: 'AQDxf39/fw==',
			requiresManualAction: true,
		},
	],
};
