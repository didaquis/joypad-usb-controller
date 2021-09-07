import usbDetect, { Device } from 'usb-detection';

export const detectDevice = (): void => {
	try {
		usbDetect.startMonitoring();
		console.log(
			'\nListening for 20 seconds. Please, wait... meanwhile you can try to plug or unplug your USB device\n\n',
		);

		// Detect add/insert
		usbDetect.on('add', function (device: Device): void {
			console.log('\nadd\n', { vendorId: device.vendorId, productId: device.productId });
		});
		usbDetect.on('add:vid', function (device: Device): void {
			console.log('\nadd\n', { vendorId: device.vendorId, productId: device.productId });
		});
		usbDetect.on('add:vid:pid', function (device: Device): void {
			console.log('\nadd\n', { vendorId: device.vendorId, productId: device.productId });
		});

		// Detect remove
		usbDetect.on('remove', function (device: Device): void {
			console.log('\nremove\n', { vendorId: device.vendorId, productId: device.productId });
		});
		usbDetect.on('remove:vid', function (device: Device): void {
			console.log('\nremove\n', { vendorId: device.vendorId, productId: device.productId });
		});
		usbDetect.on('remove:vid:pid', function (device: Device): void {
			console.log('\nremove\n', { vendorId: device.vendorId, productId: device.productId });
		});

		// Get a list of USB devices on your system
		usbDetect.find(function (err: Error | undefined, devices: Device[]): void {
			if (err) {
				console.log(err);
				return;
			}

			console.log('List of devices connected:');
			devices.forEach((device) => {
				console.log('\n');
				console.log(device);
			});

			console.log('\nPlease, wait... \n\n');
		});

		const twentySeconds = 20000;
		setTimeout(function (): void {
			// Allow the process to exit
			usbDetect.stopMonitoring();
		}, twentySeconds);
	} catch (error) {
		// Allow the process to exit
		usbDetect.stopMonitoring();
	}
};
