/* eslint-disable no-console */

import usb from 'usb';

type TargetDevice = {
	vendorId: number;
	productId: number;
};

/*
 * Set here the values of the device to monitor
 */
const TARGET_DEVICE: TargetDevice = {
	vendorId: 2341,
	productId: 34918,
};

export const monitorDevice = (): void => {
	console.log(
		`Start to monitor the device with vendor id ${TARGET_DEVICE.vendorId} and product id ${TARGET_DEVICE.productId}`,
	);

	const listOfSignalsDetected: string[] = [];

	const device = usb.findByIds(TARGET_DEVICE.vendorId, TARGET_DEVICE.productId);

	if (device !== undefined) {
		try {
			device.close();
		} catch (error) {
			//console.log('\nError trying to close the device\n', error);
			// Can't close device with a pending request    ===>   ¿¿¿???
		}
		device.open();
		//const allInterfaces = device.interfaces;
		/**
		[
			Interface {
				// ...
			}
		]
		 */

		const firstInterface = device.interface(0);

		if (firstInterface && firstInterface.isKernelDriverActive()) {
			firstInterface.detachKernelDriver();
		}
		firstInterface.claim();

		//const allEndpoints = firstInterface.endpoints;
		/*
		[
			InEndpoint {
				// ...
			}
		]
		*/

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const inEndpoint: any = firstInterface.endpoint(129); /* an "IN endpoint" means "device to PC" */

		if (inEndpoint.direction === 'in') {
			inEndpoint.startPoll();
			inEndpoint.on('data', (buffer: Buffer) => {
				const signal = buffer.toString('base64');

				if (!listOfSignalsDetected.includes(signal)) {
					listOfSignalsDetected.push(signal);
					console.log(`signal detected: ${signal}`);
					//console.log(`signal hex: ${buffer.toString('hex')}`); // An alternative method to represent the signal
				}
			});
			inEndpoint.on('error', (error: unknown) => {
				/*
				enum libusb_transfer_status {
					LIBUSB_TRANSFER_COMPLETED = 'Transfer completed without error. Note that this does not indicate that the entire amount of requested data was transferred.',
					LIBUSB_TRANSFER_ERROR = 'Transfer failed.',
					LIBUSB_TRANSFER_TIMED_OUT = 'Transfer timed out.',
					LIBUSB_TRANSFER_CANCELLED = 'Transfer was cancelled.',
					LIBUSB_TRANSFER_STALL = 'For bulk/interrupt endpoints: halt condition detected (endpoint stalled). For control endpoints: control request not supported.',
					LIBUSB_TRANSFER_NO_DEVICE = 'Device was disconnected.',
					LIBUSB_TRANSFER_OVERFLOW = 'Device sent more data than requested.',
				}
				*/
				console.log('error event!', error);
			});
		}
		console.log('\nRunning for 20 seconds. Please press all buttons on your device one at a time\n');

		const twentySeconds = 20000;
		setTimeout(function (): void {
			console.log('\nlistOfSignalsDetected :\n', listOfSignalsDetected);

			firstInterface.release(true, () => {
				device.close();
				process.exit();
			});

			// const wait = (timeout = 2000) => {
			// 	return new Promise((resolve) => setTimeout(resolve, timeout));
			// };

			// const tasksForNicelyShutdown = [inEndpoint.stopPoll, firstInterface.release, device.close];

			// tasksForNicelyShutdown.forEach(async (task) => {
			// 	try {
			// 		task();
			// 	} catch (error) {
			// 		//console.log(error);
			// 	}
			// 	await wait();
			// });

			/*
			inEndpoint.on('end', () => {
				// este callback debería ejecutarse cuando se cierra el polling. 
				// por tanto, quizás deba ser aquí donde haga el ".release()" de la interface
			});
			*/

			// inEndpoint.stopPoll(() => {
			// 	console.log('Stop poll');
			// });
			// firstInterface.release(() => {
			// 	console.log('Release interface');
			// });
			// device.close();

			// debo detener el proceso de escucha (cerrando los puertos)
			// debo asegurarme de detener la aplicación por completo
		}, twentySeconds);
	} else {
		console.log('Device not detected!');
	}
};
