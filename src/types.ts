export type TargetDevice = {
	vendorId: number;
	productId: number;
};

export interface USB_Device {
	vendorId: number;
	productId: number;
	description: string;
	listOfSignals: SignalsOfDevice[];
}

interface SignalsOfDevice {
	signal: string;
	description: string;
	requireManualAction: boolean;
	isTheStandbySignal: boolean;
}
