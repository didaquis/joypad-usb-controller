import { USB_Device } from './types';

/**
 * Cuando el botón ANALOG esta ON, el rotor de la izquierda puede llegar a transmitir la misma señal que "arriba", "derecha", "abajo", e "izquierda" con la luz OFF.
 */
export const joypad: USB_Device = {
	vendorId: 2341,
	productId: 34918,
	description: 'Lakeview Research WiseGroup Ltd, MP-8866 Dual Joypad',
	listOfSignals: [
		{
			signal: 'AQDwf39/fw==',
			description: 'Established communication',
			requireManualAction: false,
			isTheStandbySignal: false,
		},
		{
			signal: 'AgDwf39/fw==',
			description: 'Standby status',
			requireManualAction: false,
			isTheStandbySignal: true,
		},
		{
			signal: 'AQjwf39/fw==',
			description: 'Square button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			signal: 'AQHwf39/fw==',
			description: 'Triangle button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			signal: 'AQLwf39/fw==',
			description: 'Circle button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			signal: 'AQTwf39/fw==',
			description: 'Crux button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			signal: 'ASDwf39/fw==',
			description: 'R1 button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			signal: 'AYDwf39/fw==',
			description: 'R2 button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			signal: 'ARDwf39/fw==',
			description: 'L1 button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			signal: 'AUDwf39/fw==',
			description: 'L2 button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			signal: 'AQDwfwB/fw==',
			description: 'Up button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			signal: 'AQDw/39/fw==',
			description: 'Right button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			signal: 'AQDwf/9/fw==',
			description: 'Down button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			signal: 'AQDwAH9/fw==',
			description: 'Left button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			signal: 'AQDyf39/fw==',
			description: 'Select button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
		{
			signal: 'AQDxf39/fw==',
			description: 'Start button',
			requireManualAction: true,
			isTheStandbySignal: false,
		},
	],
};
