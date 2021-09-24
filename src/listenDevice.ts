import usb from 'usb';
import { USB_Device } from './types';

export const listenDevice = (joypad: USB_Device): void => {
	// eslint-disable-next-line no-console
	console.log(`Listen the device: ${joypad.description}...`);
	//const device = usb.findByIds(joypad.vendorId, joypad.productId);
};
