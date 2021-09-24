export type TargetDevice = {
	vendorId: number;
	productId: number;
}

export interface USB_Device {
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
