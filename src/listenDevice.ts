import usb from 'usb';
import { USB_Device } from './types';

export const listenDevice = (joypad: USB_Device): void => {
	// eslint-disable-next-line no-console
	console.log(`Listen the device: ${joypad.description}...`);

	const device = usb.findByIds(joypad.vendorId, joypad.productId);

	if (device === undefined) {
		// eslint-disable-next-line no-console
		console.error('Device not detected! \n * Did you configure the device? \n * Is the device connected?');
		process.exit();
	}

	try {
		// Close the communication with the device.
		// This situation may occur if the last run ended without closing the device properly.
		device.close();
	} catch {
		// An error may occur if we try to close the communication with a device and the communication is not opened.
		// We don't need to handle this error.
	}
	device.open();

	const firstInterface = device.interface(0);

	if (firstInterface && firstInterface.isKernelDriverActive()) {
		firstInterface.detachKernelDriver();
	}
	firstInterface.claim();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const inEndpoint: any = firstInterface.endpoint(129); /* an "IN endpoint" means "device to PC" */

	const closeCommunicationWithTheDevice = (cb?: () => void) => {
		try {
			firstInterface.release(true, () => {
				device.close();
				if (cb) {
					cb();
				}
			});
		} catch {
			if (cb) {
				cb();
			}
		}
	};

	if (inEndpoint.direction === 'in') {
		inEndpoint.startPoll();
		inEndpoint.on('data', (buffer: Buffer): void => {
			const signalDetected = buffer.toString('base64');

			const signal = joypad.listOfSignals.find((signalToLog) => {
				return signalToLog.signal === signalDetected && signalToLog.requireManualAction;
			});

			if (signal) {
				// eslint-disable-next-line no-console
				console.log(signal.description);
			}
		});
		inEndpoint.on('error', (error: unknown): void => {
			// eslint-disable-next-line no-console
			console.log('error event!', error);
			closeCommunicationWithTheDevice(() => {
				process.exit();
			});
		});
	}

	process.on('SIGINT', () => {
		// eslint-disable-next-line no-console
		console.log('\n Stopping the application...');
		closeCommunicationWithTheDevice(() => {
			process.exit();
		});
	});
};
