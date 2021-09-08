/* eslint-disable no-console */

/*
 * Set here the values of the device to monitor
 */
const TARGET_DEVICE: Record<string, string> = {
	vendorId: '2341',
	productId: '34918',
};

export const monitorDevice = (): void => {
	console.log(
		`Start monitoring the device with vendor id ${TARGET_DEVICE.vendorId} and product id ${TARGET_DEVICE.productId}`,
	);
};
